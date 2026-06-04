import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Verified SES identities. Override at deploy time with the CONTACT_SENDER /
    // CONTACT_RECIPIENT env vars or `-c contactSender=... -c contactRecipient=...`.
    const contactSender =
      this.node.tryGetContext('contactSender') ?? process.env.CONTACT_SENDER ?? 'hello@ozcc.com.au';
    const contactRecipient =
      this.node.tryGetContext('contactRecipient') ?? process.env.CONTACT_RECIPIENT ?? 'hello@ozcc.com.au';

    // Custom domain. The certificate MUST be an ACM cert in us-east-1 for
    // CloudFront. Supply the ARN via `-c certificateArn=...` or CERTIFICATE_ARN;
    // when absent the distribution falls back to the default *.cloudfront.net domain.
    const domainName = this.node.tryGetContext('domainName') ?? process.env.DOMAIN_NAME ?? 'www.ozcc.com.au';
    // Default to the *.ozcc.com.au wildcard cert in us-east-1 (one of two
    // duplicates in the account). Override with -c certificateArn=... / CERTIFICATE_ARN.
    const certificateArn =
      this.node.tryGetContext('certificateArn') ??
      process.env.CERTIFICATE_ARN ??
      'arn:aws:acm:us-east-1:989346119403:certificate/b16c4d9c-202c-4e1e-881f-49a0e742b763';
    const certificate = certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'SiteCertificate', certificateArn)
      : undefined;

    // S3 bucket for the website
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });

    // --- Contact form backend: Lambda + SES, fronted by API Gateway ---
    const contactFn = new lambda.Function(this, 'ContactFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'contact.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      timeout: cdk.Duration.seconds(10),
      memorySize: 128,
      environment: {
        CONTACT_SENDER: contactSender,
        CONTACT_RECIPIENT: contactRecipient,
      },
    });

    contactFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*'],
      }),
    );

    const api = new apigateway.RestApi(this, 'ContactApi', {
      restApiName: 'CorporateSiteContactApi',
      deployOptions: { stageName: 'prod', throttlingRateLimit: 10, throttlingBurstLimit: 20 },
      // CORS is only needed for direct (cross-origin) access; same-origin calls
      // through CloudFront below don't require it, but this keeps local dev working.
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: ['POST', 'OPTIONS'],
        allowHeaders: ['Content-Type'],
      },
    });

    // Routes are exposed under /api/* so they can be served same-origin via
    // CloudFront. The full path forwarded to the API is /prod/api/contact.
    const apiResource = api.root.addResource('api');
    const contactResource = apiResource.addResource('contact');
    contactResource.addMethod('POST', new apigateway.LambdaIntegration(contactFn));

    // CloudFront distribution: S3 for the SPA, API Gateway for /api/*
    const distribution = new cloudfront.Distribution(this, 'WebsiteDistribution', {
      ...(certificate ? { domainNames: [domainName], certificate } : {}),
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      additionalBehaviors: {
        'api/*': {
          origin: new origins.RestApiOrigin(api),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
          originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        },
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // Deployment
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../dist'))],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    const siteHost = certificate ? domainName : distribution.distributionDomainName;

    // Outputs
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront domain — use this as the CNAME target for your custom domain.',
    });

    new cdk.CfnOutput(this, 'SiteUrl', {
      value: `https://${siteHost}`,
    });

    new cdk.CfnOutput(this, 'ContactApiUrl', {
      value: `https://${siteHost}/api/contact`,
      description: 'Same-origin contact endpoint served via CloudFront.',
    });

    if (certificate) {
      new cdk.CfnOutput(this, 'DnsRecordToCreate', {
        value: `CNAME  ${domainName}.  ->  ${distribution.distributionDomainName}`,
        description: 'Create this DNS record at your provider to point the domain at CloudFront.',
      });
    }
  }
}

# OZCC Corporate Site

Marketing website for **Oz Construction and Consulting (OZCC)** — an Australian construction
quality-management consultancy — and its flagship SaaS product, **ITPapp**.

Built as a React single-page app, deployed to AWS (S3 + CloudFront) via the AWS CDK, with a
serverless contact form (API Gateway + Lambda + SES).

## Tech stack

| Area       | Choice                                            |
| ---------- | ------------------------------------------------- |
| UI         | React 19 + TypeScript, React Router v7            |
| Build      | Vite 8                                            |
| Styling    | Vanilla CSS with custom properties (design system in `src/index.css`) |
| Testing    | Vitest + Testing Library                          |
| Infra      | AWS CDK (S3, CloudFront, API Gateway, Lambda, SES) |
| CI/CD      | GitHub Actions → `cdk deploy` on push to `main`   |

## Project structure

```
src/
  components/      Header, Footer, Layout, Logo, Seo, Reveal, ScrollToTop, illustrations
  pages/           Home, Services, Software, About, Contact, NotFound
  config/          site.ts (central config), contact.ts (form client + validation)
  test/            Vitest setup
infra/
  bin/infra.ts     CDK app entry point
  lib/infra-stack.ts  S3 + CloudFront + contact API stack
  lambda/contact.mjs  SES-backed contact form handler
```

## Local development

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
npm run lint       # ESLint
npm test           # run the Vitest suite once
npm run test:watch # watch mode
```

### Environment variables

Copy `.env.example` to `.env` to override defaults for local development:

| Variable               | Default          | Purpose                                              |
| ---------------------- | ---------------- | ---------------------------------------------------- |
| `VITE_APP_URL`         | ITPapp login URL | "Login to ITPapp" links                              |
| `VITE_CONTACT_API_URL` | `/api/contact`   | Contact form endpoint. The default is a same-origin path served through CloudFront, so no override is needed in production. Point it at the deployed `ContactApiUrl` to test the form locally. |

## Contact form architecture

The form posts JSON to `/api/contact`. In production, CloudFront routes `/api/*` to an API
Gateway → Lambda integration **on the same origin**, so there is no CORS dependency and no
build-time API URL to inject. The Lambda validates the payload and sends an email via Amazon SES.

> **SES setup:** SES starts in sandbox mode. Before the form can send mail you must verify the
> sender/recipient identities (and request production access to email arbitrary addresses).
> Configure the addresses with the `CONTACT_SENDER` / `CONTACT_RECIPIENT` environment variables
> or `-c contactSender=… -c contactRecipient=…` at deploy time. They default to `hello@ozcc.com.au`.

## Infrastructure & deployment

```bash
cd infra
npm install
npm run build                 # compile the CDK app
npx cdk diff                  # preview changes
npx cdk deploy                # deploy (region defaults to ap-southeast-2)
```

The stack provisions:

- **S3 bucket** — private (OAC only), SSL-enforced, hosts the built SPA.
- **CloudFront** — HTTPS, SPA fallback (404/403 → `/index.html`), and an `/api/*` behavior
  pointing at API Gateway.
- **API Gateway + Lambda + SES** — the contact form backend.

CI/CD: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the frontend and runs
`cdk deploy` on every push to `main`, using the `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`
repository secrets.

Stack outputs include `SiteUrl`, `DistributionDomainName`, and `ContactApiUrl`.

// Contact form handler. Validates the payload and sends an email via SES.
// The AWS SDK v3 is bundled into the Lambda Node.js 20 runtime, so no
// node_modules/bundling step is required.
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({});

const SENDER = process.env.CONTACT_SENDER;
const RECIPIENT = process.env.CONTACT_RECIPIENT;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
};

const respond = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', ...CORS },
  body: JSON.stringify(body),
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escape = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const handler = async (event) => {
  const method = event.httpMethod || event.requestContext?.http?.method;
  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: CORS, body: '' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return respond(400, { message: 'Invalid request body.' });
  }

  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const company = String(data.company || '').trim();
  const message = String(data.message || '').trim();

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return respond(400, { message: 'Please complete all required fields with valid details.' });
  }

  if (!SENDER || !RECIPIENT) {
    console.error('CONTACT_SENDER / CONTACT_RECIPIENT env vars are not configured.');
    return respond(500, { message: 'The contact service is not configured. Please email us directly.' });
  }

  const subject = `New website enquiry from ${name}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const htmlBody = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Company:</strong> ${escape(company) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escape(message).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: SENDER,
        Destination: { ToAddresses: [RECIPIENT] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: subject, Charset: 'UTF-8' },
          Body: {
            Text: { Data: textBody, Charset: 'UTF-8' },
            Html: { Data: htmlBody, Charset: 'UTF-8' },
          },
        },
      }),
    );
    return respond(200, { message: 'Your message has been sent.' });
  } catch (err) {
    console.error('SES send failed:', err);
    return respond(502, { message: 'We could not send your message right now. Please try again later.' });
  }
};

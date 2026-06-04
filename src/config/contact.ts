import { site } from './site';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Submits the contact form to the API Gateway endpoint defined by
 * VITE_CONTACT_API_URL. Throws on network errors or non-2xx responses so the
 * caller can render an error state.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  if (!site.contactApiUrl) {
    throw new Error('Contact endpoint is not configured.');
  }

  const res = await fetch(site.contactApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let detail = '';
    try {
      const data = (await res.json()) as { message?: string };
      detail = data.message ?? '';
    } catch {
      /* ignore non-JSON error bodies */
    }
    throw new Error(detail || `Request failed (${res.status})`);
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns a map of field -> error message; empty when valid. */
export function validateContact(payload: ContactPayload): Partial<Record<keyof ContactPayload, string>> {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  if (!payload.name.trim()) errors.name = 'Please enter your name.';
  if (!payload.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_RE.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!payload.message.trim()) {
    errors.message = 'Please tell us how we can help.';
  } else if (payload.message.trim().length < 10) {
    errors.message = 'Your message is a little short — please add more detail.';
  }
  return errors;
}

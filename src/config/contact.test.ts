import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { validateContact, submitContact, type ContactPayload } from './contact';

const valid: ContactPayload = {
  name: 'Jane Builder',
  email: 'jane@example.com',
  company: 'Acme Constructions',
  message: 'We would like a demo of ITPapp for our next project.',
};

describe('validateContact', () => {
  it('passes for a complete, valid payload', () => {
    expect(validateContact(valid)).toEqual({});
  });

  it('flags a missing name', () => {
    expect(validateContact({ ...valid, name: '  ' })).toHaveProperty('name');
  });

  it('flags an invalid email', () => {
    expect(validateContact({ ...valid, email: 'not-an-email' })).toHaveProperty('email');
  });

  it('flags a message that is too short', () => {
    expect(validateContact({ ...valid, message: 'hi' })).toHaveProperty('message');
  });
});

describe('submitContact', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('resolves on a 2xx response', async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: true } as Response);
    await expect(submitContact(valid)).resolves.toBeUndefined();
    expect(fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('throws with the server message on a non-2xx response', async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ message: 'Please complete all required fields.' }),
    } as Response);
    await expect(submitContact(valid)).rejects.toThrow('Please complete all required fields.');
  });
});

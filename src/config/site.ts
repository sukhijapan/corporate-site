/**
 * Central site configuration. URLs and contact details live here so they are
 * not hardcoded across components. Override the app/API URLs at build time with
 * VITE_* environment variables (see .env.example).
 */
export const site = {
  name: 'Oz Construction and Consulting',
  shortName: 'OZCC',
  tagline: 'Construction & Consulting',
  description:
    'Expert quality management consulting and the ITPapp digital QA platform for the Australian construction industry.',

  email: 'hello@ozcc.com.au',
  location: 'Australia-wide Support',
  hours: 'Monday – Friday: 8:00 AM – 6:00 PM AEST',

  /** ITPapp login / web app. */
  appUrl: import.meta.env.VITE_APP_URL ?? 'https://quality.ozcc.com.au',

  /**
   * Contact form endpoint. Defaults to the same-origin path served via
   * CloudFront (`/api/*` → API Gateway), so no build-time URL is required in
   * production. Override with VITE_CONTACT_API_URL for local dev.
   */
  contactApiUrl: import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact',

  social: {
    ceoLinkedIn: 'https://www.linkedin.com/in/eddy-k-7507b6ab/',
    ctoLinkedIn: 'https://www.linkedin.com/in/sukhwinder-singh-05195b1a0/',
  },
} as const;

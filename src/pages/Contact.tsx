import React, { useState } from 'react';
import Seo from '../components/Seo';
import { site } from '../config/site';
import { submitContact, validateContact, type ContactPayload } from '../config/contact';
import './Contact.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const empty: ContactPayload = { name: '', email: '', company: '', message: '' };

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as the user corrects it.
    setErrors((prev) => (prev[name as keyof ContactPayload] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContact(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData(empty);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please try again or email us directly.',
      );
    }
  };

  return (
    <div className="contact-page">
      <Seo
        title="Contact Us"
        description="Get in touch with OZCC for expert quality management consulting or a demo of ITPapp."
      />

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">Let's discuss how OZCC can elevate your next project.</p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you're looking for expert consulting or a demo of ITPapp,
                our team is ready to support your quality management needs across Australia.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <h4>Email</h4>
                  <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                </div>
                <div className="info-item">
                  <h4>Location</h4>
                  <p>{site.location}</p>
                </div>
                <div className="info-item">
                  <h4>Hours</h4>
                  <p>{site.hours}</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {status === 'success' ? (
                <div className="form-success" role="status">
                  <div className="form-success-icon" aria-hidden="true">✓</div>
                  <h3>Thank you!</h3>
                  <p>Your message has been sent. We'll get back to you within one business day.</p>
                  <button type="button" className="btn btn-primary mt-2" onClick={() => setStatus('idle')}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company <span className="optional">(optional)</span></label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <p className="form-error-banner" role="alert">{errorMessage}</p>
                  )}

                  <button type="submit" className="btn btn-accent btn-block" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

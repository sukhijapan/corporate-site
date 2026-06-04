import React from 'react';
import './Software.css';

const Software: React.FC = () => {
  return (
    <div className="software-page">
      <section className="page-header">
        <div className="container">
          <h1>ITPapp Software</h1>
          <p className="lead">The future of digitized construction quality control.</p>
        </div>
      </section>

      <section className="section software-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>One Platform. Total Oversight.</h2>
              <p>
                ITPapp is our flagship digital platform designed specifically for the Australian construction industry. 
                It bridges the gap between site engineers, quality managers, and clients, 
                eliminating paper trails and providing real-time transparency.
              </p>
              <div className="feature-grid mt-2">
                <div className="feature-small">
                  <h4>Live Tracking</h4>
                  <p>Monitor project progress and QA sign-offs in real-time from any device.</p>
                </div>
                <div className="feature-small">
                  <h4>Field Ready</h4>
                  <p>Built for the site environment with offline capabilities and mobile-first design.</p>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <div className="laptop-mockup">
                <div className="screen-placeholder">
                  <span className="placeholder-text">ITPapp Web Interface</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section software-features bg-alt">
        <div className="container">
          <h2 className="text-center mb-2">Core Features</h2>
          <div className="features-columns">
            <div className="feature-col">
              <div className="feature-item">
                <h3>Smart ITPs</h3>
                <p>Digital Inspection and Test Plans with integrated Hold and Witness points that notify stakeholders automatically.</p>
              </div>
              <div className="feature-item">
                <h3>NCR Management</h3>
                <p>Capture non-conformances on the spot with photos, descriptions, and automated workflows for resolution.</p>
              </div>
            </div>
            <div className="feature-col">
              <div className="feature-item">
                <h3>Professional Reporting</h3>
                <p>Generate branded PDF reports for clients and stakeholders with a single click, including all photos and sign-offs.</p>
              </div>
              <div className="feature-item">
                <h3>Multi-Tenancy</h3>
                <p>Securely manage multiple organizations and projects within a single, unified environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section software-cta">
        <div className="container text-center">
          <div className="cta-card">
            <h2>Ready to go paperless?</h2>
            <p className="mb-2">Join the leading Australian contractors using ITPapp to streamline their QA process.</p>
            <div className="cta-btns">
              <a href="https://quality.ozcc.com.au" className="btn btn-primary">Login to ITPapp</a>
              <a href="/contact" className="btn btn-accent">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;

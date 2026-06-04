import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { LaptopArt } from '../components/illustrations';
import { site } from '../config/site';
import './Software.css';

const features = [
  {
    title: 'Smart ITPs',
    body: 'Digital Inspection and Test Plans with integrated Hold and Witness points that notify stakeholders automatically.',
  },
  {
    title: 'NCR Management',
    body: 'Capture non-conformances on the spot with photos, descriptions, and automated workflows for resolution.',
  },
  {
    title: 'Professional Reporting',
    body: 'Generate branded PDF reports for clients and stakeholders with a single click, including all photos and sign-offs.',
  },
  {
    title: 'Multi-Tenancy',
    body: 'Securely manage multiple organizations and projects within a single, unified environment.',
  },
];

const Software: React.FC = () => {
  return (
    <div className="software-page">
      <Seo
        title="ITPapp Software"
        description="ITPapp digitizes Inspection & Test Plans, NCRs, and QA sign-offs in real-time for Australian construction teams."
      />

      <section className="page-header">
        <div className="container">
          <h1>ITPapp Software</h1>
          <p className="lead">The future of digitized construction quality control.</p>
        </div>
      </section>

      <section className="section software-intro">
        <div className="container">
          <div className="intro-grid">
            <Reveal className="intro-text">
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
            </Reveal>
            <Reveal delay={120} className="intro-visual">
              <LaptopArt />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section software-features bg-alt">
        <div className="container">
          <Reveal><h2 className="text-center mb-2">Core Features</h2></Reveal>
          <div className="features-columns">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 100} className="feature-item">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section software-cta">
        <div className="container text-center">
          <Reveal className="cta-card">
            <h2>Ready to go paperless?</h2>
            <p className="mb-2">Join the leading Australian contractors using ITPapp to streamline their QA process.</p>
            <div className="cta-btns">
              <a href={site.appUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Login to ITPapp
              </a>
              <Link to="/contact" className="btn btn-accent">Request a Demo</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Software;

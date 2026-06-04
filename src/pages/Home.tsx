import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1>Elevating Quality in Australian Construction</h1>
          <p className="lead">
            Oz Construction and Consulting (OZCC) provides expert quality management consulting 
            and cutting-edge digital solutions tailored for the Australian building industry.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-accent">Get a Free Consultation</Link>
            <Link to="/software" className="btn btn-outline">Explore ITPapp</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="text-center mb-2">Our Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>QMS Setup</h3>
              <p>Establishing robust Quality Management Systems compliant with ISO 9001 and Australian standards.</p>
              <Link to="/services" className="text-link">Learn More &rarr;</Link>
            </div>
            <div className="service-card">
              <h3>Audit Prep</h3>
              <p>Preparing your team and projects for internal and external audits with rigorous documentation reviews.</p>
              <Link to="/services" className="text-link">Learn More &rarr;</Link>
            </div>
            <div className="service-card">
              <h3>Compliance</h3>
              <p>Ensuring site governance and regulatory compliance across complex construction projects.</p>
              <Link to="/services" className="text-link">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Software Highlight */}
      <section className="section software-highlight bg-alt">
        <div className="container highlight-flex">
          <div className="highlight-text">
            <h2>Digital Quality Control with ITPapp</h2>
            <p>
              Stop chasing paper. Our flagship software, ITPapp, digitizes your Inspection and Test Plans, 
              NCRs, and sign-offs in real-time.
            </p>
            <ul className="feature-list">
              <li>Real-time Hold & Witness Point notifications</li>
              <li>Professional PDF report generation</li>
              <li>Integrated NCR management</li>
              <li>Offline-capable mobile field use</li>
            </ul>
            <Link to="/software" className="btn btn-primary mt-2">See Features</Link>
          </div>
          <div className="highlight-image">
            {/* Placeholder for app screenshot */}
            <div className="app-screenshot-placeholder">
              <span className="placeholder-text">ITPapp Dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us">
        <div className="container text-center">
          <h2>Why Choose OZCC?</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Australian Owned</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">ISO</span>
              <span className="stat-label">9001 Focused</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Expert</span>
              <span className="stat-label">Industry Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to transform your project quality?</h2>
          <p className="mb-2">Book a consultation or request a demo of ITPapp today.</p>
          <Link to="/contact" className="btn btn-accent">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

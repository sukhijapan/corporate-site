import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { DashboardArt, QmsIcon, AuditIcon, ComplianceIcon } from '../components/illustrations';
import './Home.css';

const services = [
  {
    icon: <QmsIcon />,
    title: 'QMS Setup',
    body: 'Establishing robust Quality Management Systems compliant with ISO 9001 and Australian standards.',
  },
  {
    icon: <AuditIcon />,
    title: 'Audit Prep',
    body: 'Preparing your team and projects for internal and external audits with rigorous documentation reviews.',
  },
  {
    icon: <ComplianceIcon />,
    title: 'Compliance',
    body: 'Ensuring site governance and regulatory compliance across complex construction projects.',
  },
];

const stats = [
  { number: '100%', label: 'Australian Owned' },
  { number: 'ISO', label: '9001 Focused' },
  { number: 'Expert', label: 'Industry Leadership' },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Seo title="Construction Quality Consulting & ITPapp Software" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <Reveal as="div" className="hero-inner">
            <span className="hero-eyebrow">Australian-owned · Quality-driven</span>
            <h1>Elevating Quality in Australian Construction</h1>
            <p className="lead">
              Oz Construction and Consulting (OZCC) provides expert quality management consulting
              and cutting-edge digital solutions tailored for the Australian building industry.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-accent">Get a Free Consultation</Link>
              <Link to="/software" className="btn btn-outline">Explore ITPapp</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <Reveal><h2 className="text-center mb-2">Our Expertise</h2></Reveal>
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <Link to="/services" className="text-link">Learn More &rarr;</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Software Highlight */}
      <section className="section software-highlight bg-alt">
        <div className="container highlight-flex">
          <Reveal className="highlight-text">
            <h2>Digital Quality Control with ITPapp</h2>
            <p>
              Stop chasing paper. Our flagship software, ITPapp, digitizes your Inspection and Test Plans,
              NCRs, and sign-offs in real-time.
            </p>
            <ul className="feature-list">
              <li>Real-time Hold &amp; Witness Point notifications</li>
              <li>Professional PDF report generation</li>
              <li>Integrated NCR management</li>
              <li>Offline-capable mobile field use</li>
            </ul>
            <Link to="/software" className="btn btn-primary mt-2">See Features</Link>
          </Reveal>
          <Reveal delay={120} className="highlight-image">
            <DashboardArt />
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us">
        <div className="container text-center">
          <Reveal><h2>Why Choose OZCC?</h2></Reveal>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <Reveal>
            <h2>Ready to transform your project quality?</h2>
            <p className="mb-2">Book a consultation or request a demo of ITPapp today.</p>
            <Link to="/contact" className="btn btn-accent">Contact Us Now</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;

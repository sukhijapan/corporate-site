import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { QmsIcon, AuditIcon, ComplianceIcon } from '../components/illustrations';
import './Services.css';

const blocks = [
  {
    id: 'qms',
    title: 'QMS Setup & Optimization',
    icon: <QmsIcon />,
    body: 'A Quality Management System (QMS) is the backbone of successful project delivery. We help you design, implement, and optimize a QMS that is both compliant with ISO 9001 and practical for site teams.',
    points: [
      'Policy and Procedure development',
      'Customized ITP templates for specific trades',
      'Process mapping and workflow optimization',
      'Integration with existing corporate systems',
    ],
  },
  {
    id: 'audit',
    title: 'Audit Preparation & Support',
    icon: <AuditIcon />,
    reverse: true,
    body: "Don't let audits catch you off guard. We provide rigorous pre-audit reviews and on-site support to ensure your documentation and processes stand up to the highest level of scrutiny.",
    points: [
      'Internal quality audits and gap analysis',
      'External audit preparation (ISO certification)',
      'Non-Conformance Report (NCR) close-out support',
      'Subcontractor quality performance reviews',
    ],
  },
  {
    id: 'compliance',
    title: 'Construction Governance & Compliance',
    icon: <ComplianceIcon />,
    body: 'We provide the oversight needed to ensure every aspect of your project adheres to Australian standards, regulatory requirements, and client specifications.',
    points: [
      'Site governance framework setup',
      'Legislative compliance monitoring',
      'Project-specific Quality Plan (PQP) creation',
      'Independent third-party inspections',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <Seo
        title="Consulting Services"
        description="QMS setup, audit preparation and construction governance & compliance services for Australian Tier 1 and Tier 2 projects."
      />

      <section className="page-header">
        <div className="container">
          <h1>Consulting Services</h1>
          <p className="lead">Expert guidance for high-performance construction quality management.</p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          {blocks.map((block) => (
            <Reveal key={block.id} className={`service-block ${block.reverse ? 'reverse' : ''}`}>
              <div className="service-block-anchor" id={block.id} />
              <div className="service-text">
                <h2>{block.title}</h2>
                <p>{block.body}</p>
                <ul>
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="service-visual">{block.icon}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <Reveal>
            <h2>Need a tailored quality strategy?</h2>
            <p className="mb-2">Our consultants are ready to help you optimize your project governance.</p>
            <Link to="/contact" className="btn btn-accent">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;

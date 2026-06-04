import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Consulting Services</h1>
          <p className="lead">Expert guidance for high-performance construction quality management.</p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          <div className="service-block" id="qms">
            <div className="service-text">
              <h2>QMS Setup & Optimization</h2>
              <p>
                A Quality Management System (QMS) is the backbone of successful project delivery. 
                We help you design, implement, and optimize a QMS that is both compliant with ISO 9001 
                and practical for site teams.
              </p>
              <ul>
                <li>Policy and Procedure development</li>
                <li>Customized ITP templates for specific trades</li>
                <li>Process mapping and workflow optimization</li>
                <li>Integration with existing corporate systems</li>
              </ul>
            </div>
            <div className="service-icon-placeholder">QMS</div>
          </div>

          <div className="service-block reverse" id="audit">
            <div className="service-text">
              <h2>Audit Preparation & Support</h2>
              <p>
                Don't let audits catch you off guard. We provide rigorous pre-audit reviews 
                and on-site support to ensure your documentation and processes stand up to 
                the highest level of scrutiny.
              </p>
              <ul>
                <li>Internal quality audits and gap analysis</li>
                <li>External audit preparation (ISO certification)</li>
                <li>Non-Conformance Report (NCR) close-out support</li>
                <li>Subcontractor quality performance reviews</li>
              </ul>
            </div>
            <div className="service-icon-placeholder">AUDIT</div>
          </div>

          <div className="service-block" id="compliance">
            <div className="service-text">
              <h2>Construction Governance & Compliance</h2>
              <p>
                We provide the oversight needed to ensure every aspect of your project 
                adheres to Australian standards, regulatory requirements, and client specifications.
              </p>
              <ul>
                <li>Site governance framework setup</li>
                <li>Legislative compliance monitoring</li>
                <li>Project-specific Quality Plan (PQP) creation</li>
                <li>Independent third-party inspections</li>
              </ul>
            </div>
            <div className="service-icon-placeholder">GOV</div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <h2>Need a tailored quality strategy?</h2>
          <p className="mb-2">Our consultants are ready to help you optimize your project governance.</p>
          <a href="/contact" className="btn btn-accent">Request a Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default Services;

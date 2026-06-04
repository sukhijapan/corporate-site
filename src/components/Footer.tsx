import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo-container">
            <span className="logo-text">OZCC</span>
            <span className="logo-subtext">Construction & Consulting</span>
          </Link>
          <p className="footer-description">
            Elevating Australian construction standards through expert consulting and innovative digital solutions.
          </p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/software">Software</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li><a href="https://quality.ozcc.com.au">ITPapp Login</a></li>
            <li><Link to="/services#qms">QMS Setup</Link></li>
            <li><Link to="/services#audit">Audit Preparation</Link></li>
            <li><Link to="/services#compliance">Compliance</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Australia-wide Support</p>
          <p>Email: hello@ozcc.com.au</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Oz Construction and Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

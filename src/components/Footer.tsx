import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { site } from '../config/site';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
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
            <li>
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">ITPapp Login</a>
            </li>
            <li><Link to="/services#qms">QMS Setup</Link></li>
            <li><Link to="/services#audit">Audit Preparation</Link></li>
            <li><Link to="/services#compliance">Compliance</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>{site.location}</p>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

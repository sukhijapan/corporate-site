import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="notfound-page">
      <Seo title="Page Not Found" description="The page you were looking for could not be found." />
      <div className="container notfound-content">
        <span className="notfound-code">404</span>
        <h1>Page not found</h1>
        <p className="lead">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-accent">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline notfound-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

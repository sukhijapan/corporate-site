import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../config/site';

interface LogoProps {
  /** Use lighter colours for dark backgrounds (e.g. the footer). */
  variant?: 'dark' | 'light';
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', onClick }) => (
  <Link to="/" className={`logo-container logo-${variant}`} onClick={onClick} aria-label={`${site.name} home`}>
    <svg className="logo-mark" viewBox="0 0 64 64" width="38" height="38" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" className="logo-mark-bg" />
      <path
        d="M13 44 L24 20 L32 35 L40 20 L51 44"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15" y="49" width="34" height="4" rx="2" fill="var(--secondary)" />
    </svg>
    <span className="logo-words">
      <span className="logo-text">{site.shortName}</span>
      <span className="logo-subtext">{site.tagline}</span>
    </span>
  </Link>
);

export default Logo;

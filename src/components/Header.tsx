import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { site } from '../config/site';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/software', label: 'Software' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll and allow ESC to close while the menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="header">
      <div className="container header-container">
        <Logo onClick={closeMenu} />

        <nav id="primary-navigation" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={linkClass} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <a href={site.appUrl} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                Login to ITPapp
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href={site.appUrl} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
            Login to ITPapp
          </a>
        </div>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </header>
  );
};

export default Header;

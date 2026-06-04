import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <span className="logo-text">OZCC</span>
          <span className="logo-subtext">Construction & Consulting</span>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink></li>
            <li><NavLink to="/software" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Software</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className="header-cta">
          <a href="https://quality.ozcc.com.au" className="btn btn-accent">Login to ITPapp</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

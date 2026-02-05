import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { contactInfo } from '../data/contact';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 8C14 10 10 16 10 23C10 30 14 35 20 37C26 35 30 30 30 23C30 16 26 10 20 8Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="16" r="3" fill="currentColor"/>
              <path d="M16 24Q20 28, 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">Dott.ssa Martina Paolini</span>
            <span className="header__logo-title">Osteopata</span>
          </div>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <NavLink to="/" className="header__nav-link">Home</NavLink>
          <NavLink to="/servizi" className="header__nav-link">Servizi</NavLink>
          <NavLink to="/prima-visita" className="header__nav-link">Prima Visita</NavLink>
          <NavLink to="/chi-sono" className="header__nav-link">Chi Sono</NavLink>
          <NavLink to="/faq" className="header__nav-link">FAQ</NavLink>
          <NavLink to="/contatti" className="header__nav-link">Contatti</NavLink>
        </nav>

        <div className="header__actions">
          <a href={`tel:${contactInfo.phone}`} className="header__phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>{contactInfo.phoneDisplay}</span>
          </a>
          <Link to="/prenota" className="header__cta">Prenota</Link>
        </div>

        <button 
          className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

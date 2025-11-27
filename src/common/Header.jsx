import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'About Us', link: '/about' },
    { title: 'Products', link: '/products' },
    { title: 'Contact Us', link: '/contact' },
    { title: 'Enquiry', link: '/dealers/enquiry' }
  ];

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2);

  return (
    <>
      <header className={`floating-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="floating-header-inner">
          {/* LEFT NAV */}
          <nav className="nav-left">
            <ul className="nav-list">
              {leftItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href={item.link} className="nav-link">{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CENTER LOGO */}
          <div className="logo-wrapper">
            <a href="/" className="logo-link">
              <img
                src="/assets/images/logo.png"
                alt="Company Logo"
                className="header-logo"
              />
            </a>
          </div>

          {/* RIGHT NAV */}
          <nav className="nav-right">
            <ul className="nav-list">
              {rightItems.map((item, index) => (
                <li key={index + 2} className="nav-item">
                  <a href={item.link} className="nav-link">{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)} 
      />

      {/* MOBILE NAV */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item">
              <a 
                href={item.link} 
                className="mobile-nav-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
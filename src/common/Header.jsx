import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    { 
      title: 'Services', 
      link: '/services',
      submenu: [
        { title: 'Site Management', link: '/services/site-management' },
        { title: 'Clinical Data Management', link: '/services/data-management' },
        { title: 'Clinical Trial Supplies', link: '/services/trial-supplies' },
        { title: 'Medical Writing', link: '/services/medical-writing' },
        { title: 'Biostatistics', link: '/services/biostatistics' }
      ]
    },
    { title: 'Courses', link: '/courses' },
    { title: 'Therapeutic Areas', link: '/therapeutic-areas' },
    { title: 'Careers', link: '/careers' },
    { title: 'Contact Us', link: '/contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <span className="primary">V&S Global Solutions</span>
            <span className="secondary">Clinical Excellence</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${mobileMenuOpen ? 'hidden' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.submenu ? 'has-submenu' : ''}`}>
                <a 
                  href={item.link} 
                  className="nav-link"
                  onClick={item.submenu ? (e) => {
                    e.preventDefault();
                    toggleSubmenu(index);
                  } : undefined}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className={`submenu-icon ${activeSubmenu === index ? 'active' : ''}`} size={16} />
                  )}
                </a>
                
                {item.submenu && (
                  <ul className={`submenu ${activeSubmenu === index ? 'active' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenu-item">
                        <a href={subItem.link} className="submenu-link">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <li className={`mobile-nav-item ${item.submenu ? 'has-submenu' : ''}`}>
                  <a 
                    href={item.link} 
                    className="mobile-nav-link"
                    onClick={item.submenu ? (e) => {
                      e.preventDefault();
                      toggleSubmenu(index);
                    } : undefined}
                  >
                    {item.title}
                    {item.submenu && (
                      <ChevronDown className={`mobile-submenu-icon ${activeSubmenu === index ? 'active' : ''}`} size={20} />
                    )}
                  </a>
                </li>
                
                {item.submenu && (
                  <ul className={`mobile-submenu ${activeSubmenu === index ? 'active' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mobile-submenu-item">
                        <a href={subItem.link} className="mobile-submenu-link">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
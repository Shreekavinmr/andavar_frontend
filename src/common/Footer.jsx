import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const createBubbles = () => {
      const footer = footerRef.current;
      if (!footer) return;

      bubbleRefs.current.forEach(bubble => {
        if (bubble && bubble.parentElement) {
          bubble.parentElement.removeChild(bubble);
        }
      });
      bubbleRefs.current = [];

      const bubbleCount = 12;
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'footer-bubble';

        const size = Math.floor(Math.random() * 70) + 30;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        bubble.style.left = `${posX}%`;
        bubble.style.bottom = `${posY}%`;

        const opacity = Math.random() * 0.15 + 0.05;
        bubble.style.opacity = opacity;

        const duration = Math.random() * 10 + 15;
        bubble.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;

        footer.appendChild(bubble);
        bubbleRefs.current.push(bubble);
      }
    };

    createBubbles();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createBubbles, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      bubbleRefs.current.forEach(bubble => {
        if (bubble && bubble.parentElement) {
          bubble.parentElement.removeChild(bubble);
        }
      });
      bubbleRefs.current = [];
    };
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-info">
            <div className="footer-logo">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-tagline">
              Where Pure Refreshment Meets Endless Flavor
            </p>
          </div>

          <div className="footer-column footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-nav">
              <li><a href="/about" className="footer-link">About Us <ArrowUpRight size={14} /></a></li>
              <li><a href="/services" className="footer-link">Products <ArrowUpRight /></a></li>
              <li><a href="/courses" className="footer-link">Contact Us <ArrowUpRight size={14} /></a></li>
              <li><a href="/therapeutic-areas" className="footer-link">Dealers Enquiry <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div className="footer-column footer-services">
            <h3 className="footer-heading">Our Brands</h3>
            <ul className="footer-nav">
              <li><a href="/services/site-management" className="footer-link">Andavar Plus <ArrowUpRight size={14} /></a></li>
              <li><a href="/services/data-management" className="footer-link">Tizzo <ArrowUpRight size={14} /></a></li>
              <li><a href="/services/trial-supplies" className="footer-link">Aslee< ArrowUpRight size={14} /></a></li>
              <li><a href="/services/medical-writing" className="footer-link">Dhool <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <MapPin size={16} />
                <span>
                  39-B, Sanjeevi Nagar,<br/> Chennai By pass Road, <br/>Tiruchirappalli, TamilNadu 620002,<br/>India.
                </span>
              </li>
              <li className="contact-item">
                <Phone size={16} />
                <a href="tel:+18005551234">+91 9597909179</a>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <a href="mailto:info@andavarplus.com">info@andavarplus.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} V&S Global Solutions. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="https://www.instagram.com/webnd.digi?igsh=em1ocHowZmJyM2Fj" className="legal-link">Developed By Webnd Digi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

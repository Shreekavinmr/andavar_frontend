import React, { useState } from 'react';
import '../styles/ContactPage.css';
import HeroSection from './HeroSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
    const stats = [
    { number: "12+", label: "Unique Flavours" },
    { number: "3", label: "Premium Brands" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "Customer Satisfaction" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; 

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          secretKey: 'fghjnwri7653r2rghjebfh', 
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };
    const partners = [
    { name: "Dhool", logo: "/assets/images/logo3.png" },
    { name: "Tizzo", logo: "/assets/images/logo1.png" },
    { name: "Andavar Plus", logo: "/assets/images/logo.png" },
    { name: "Aslee", logo: "/assets/images/logo4.png" },
  ];

  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <HeroSection stats={stats} />

      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Contact Details</h2>
            <p>We’re here to assist you with all your queries.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Address</h3>
              <p>39-B, Sanjeevi Nagar,Chennai By pass Road, <br/>Tiruchirappalli, TamilNadu 620002 ,<br/>India.</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919597909179">+91 9597909179</a>
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 hammer 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@andavarplus.com">info@andavarplus.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? (
                    <span className="loader"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
            <div className="contact-map">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125399.48449816402!2d78.5500280972656!3d10.831665200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf508de7fca21%3A0x5116c87abf6891c!2sAndavar%20Drinking%20Water!5e0!3m2!1sen!2sin!4v1764173287839!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="V&S Global Solutions Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
             <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Brands</h2>
            <p>
              A vibrant portfolio of beverages trusted for their flavour, purity and quality.
            </p>
          </div>
          <div className="partners-carousel">
            <div className="partners-track">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="partner-logo">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
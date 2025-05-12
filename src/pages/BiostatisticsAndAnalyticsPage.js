import React from 'react';
import '../styles/BiostatisticsAndAnalyticsPage.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const BiostatisticsOverview = () => {
  return (
    <section className="biostatistics-section">
      <div className="container">
        <div className="biostatistics-content">
          <h2>Our Biostatistics Approach</h2>
          <p>
            At V&S Global Solutions, we deliver end-to-end biostatistical support, from crafting trial designs and protocols to managing data, analyzing results, and producing clinical reports. Our skilled statisticians collaborate closely with clients, offering expertise that transcends basic number-crunching. We provide tailored solutions to optimize trial outcomes, ensuring accuracy and compliance across all stages of clinical research.
          </p>
        </div>
      </div>
    </section>
  );
};

const BiostatisticsAndAnalyticsPage = () => {
  const services = [
    {
      title: "Statistical Analysis Plan (SAP)",
      description: "Defining study endpoints, calculating sample sizes, planning interim analyses, and outlining hypotheses and testing methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Advanced Statistical Techniques",
      description: "Applying sophisticated methods to support complex trial requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Adaptive and Bayesian Trial Designs",
      description: "Adjusting sample sizes, study designs, or hypotheses based on trial progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
          <circle cx="10" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Integrated Summaries (ISS/ISE)",
      description: "Compiling comprehensive safety and efficacy data summaries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
    {
      title: "DSMB Support",
      description: "Providing guidance to Data and Safety Monitoring Boards and critiquing datasets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
        </svg>
      ),
    },
    {
      title: "Statistical Review",
      description: "Ensuring accurate interpretation and communication of clinical trial results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
    },
    {
      title: "Clinical Study Report (CSR) Generation",
      description: "Producing detailed reports to document trial outcomes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
    },
    {
      title: "CDISC Expertise",
      description: "Implementing CDISC standards for data consistency and regulatory compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="biostatistics-analytics-page">
      <section className="hero-section">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="dots-pattern dots-1"></div>
        <div className="dots-pattern dots-2"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Expert Biostatistics Services
            </div>
            <h1>Biostatistics and Analytics: Unlocking Insights from Biological Data</h1>
            <p>
              Our expert biostatisticians deliver precise statistical support, guiding clinical trials from design to reporting with accuracy and insight.
            </p>
          </div>
        </div>
      </section>

      <BiostatisticsOverview />

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive biostatistical solutions to ensure robust and reliable clinical trial outcomes.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Contact Us for Collaboration</h2>
            <p>
              For more details or to discuss your biostatistics needs, reach us at{' '}
              <a href="tel:+919080108558">+91 9080108558</a> or mail us at{' '}
              <a href="mailto:info@vsglobalsolutions.com">V&sglobalbiosolutions.com</a>.
            </p>
            <p>
              <strong>Office Address:</strong><br/>
1/393/A, Veppampalayam,<br/>
Erode, Tamil Nadu – 638012,<br/>
India
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BiostatisticsAndAnalyticsPage;
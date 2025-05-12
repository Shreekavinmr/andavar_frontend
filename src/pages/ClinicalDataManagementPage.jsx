import React from 'react';
import '../styles/ClinicalDataManagementPage.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const DataManagementOverview = () => {
  return (
    <section className="data-management-section">
      <div className="container">
        <div className="data-management-content">
          <h2>Our Clinical Data Management Approach</h2>
          <p>
            Clinical Data Management (CDM) is a critical phase in clinical research, which leads to generation of high-quality, reliable, and statistically sound data from clinical trials. This helps to produce a drastic reduction in time from drug development to marketing. CDM has evolved in response to the ever-increasing demand from pharmaceutical companies to fast-track the drug development process and from the regulatory authorities to put the quality systems in place to ensure generation of high-quality data for accurate drug evaluation. Our qualified CDM team ensures that the trial databases go into production within stipulated timeline and ensure seamless integration of clinical data through synchronized platforms. The data in our platform are entered, submitted and processed as per 21 CFR part 11 compliance. We follow the Good Clinical Data Management Practices (GCDMP) guidelines – a document providing the standards of good practice within CDM published by Society for Clinical Data Management (SCDM).
          </p>
        </div>
      </div>
    </section>
  );
};

const ClinicalDataManagementPage = () => {
  const services = [
    {
      title: "CRF Design (Paper/EDC)",
      description: "Designing Case Report Forms for both paper and electronic data capture to ensure accurate data collection.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
    {
      title: "Custom-made CDMS Tools",
      description: "Developing tailored Clinical Data Management Systems to meet specific operational needs and procedures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Implementation and Training of EDC",
      description: "Providing implementation and training for Electronic Data Capture systems to ensure efficient use.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
          <circle cx="10" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "CFR Tracking, Data Entry and Validation",
      description: "Tracking, entering, and validating data in compliance with 21 CFR Part 11 to ensure data integrity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Discrepancy Management",
      description: "Identifying and resolving data discrepancies to maintain high-quality and reliable trial data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
    },
    {
      title: "Medical Coding",
      description: "Standardizing clinical trial data through accurate medical coding for analysis and reporting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
    },
  ];

  return (
    <div className="clinical-data-management-page">
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
              Expert Clinical Data Management Services
            </div>
            <h1>Clinical Data Management: Ensuring Data Integrity in Clinical Trials
            </h1>
            <p>
              Our expert team delivers<br/> high-quality, reliable clinical trial data, ensuring compliance and efficiency through advanced data management solutions.
            </p>
          </div>
        </div>
      </section>

      <DataManagementOverview />

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive clinical data management solutions to ensure high-quality trial data.</p>
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
              For more details or to discuss your clinical trial needs, reach us at{' '}
              <a href="tel:+919080108558">+91 9080108558</a> or mail us at{' '}
              <a href="mailto:V&sglobalbiosolutions.com">V&sglobalbiosolutions.com</a>.
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

export default ClinicalDataManagementPage;
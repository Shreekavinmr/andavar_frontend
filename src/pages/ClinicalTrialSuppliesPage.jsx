import React from 'react';
import '../styles/ClinicalTrialSuppliesPage.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const SupplyChainOverview = () => {
  return (
    <section className="supply-chain-section">
      <div className="container">
        <div className="supply-chain-content">
          <h2>Our Clinical Trial Supply Chain Approach</h2>
          <p>
            We know every clinical trial is unique. Each shipment has different temperature requirements, and its own varying levels of complexity with regulatory and customs constraints. We start from that premise, working closely with you to analyze all aspects of your project before anything ever ships. Our clinical trial supplies and logistics team coordinates a variety of functions including labelling, packaging, temperature management, storage, and distribution. We ensure the right items arrive in the right place, in the right quantity, at the right time, and within budget.
          </p>
          <div className="supply-chain-points">
            <div className="point">
              <span className="point-icon">1</span>
              <p>Delivery of clinical trial supplies including investigational as well as non-investigational medical products.</p>
            </div>
            <div className="point">
              <span className="point-icon">2</span>
              <p>Additional supplies, including all necessary medical devices, equipment, and documents used in the clinical trials.</p>
            </div>
            <div className="point">
              <span className="point-icon">3</span>
              <p>Laboratory logistics, including sample tracking, preparation of forms and manuals, lab kit assembly, and laboratory and data management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClinicalTrialSuppliesPage = () => {
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
    {
      title: "Database Lock and Archival",
      description: "Ensuring secure database lock and archival to maintain data integrity and compliance.",
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
    <div className="clinical-trial-supplies-page">
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
              Expert Clinical Trial Supplies and Logistics
            </div>
            <h1>Clinical Trial Supplies And Logistics</h1>
            <p>
              Our clinical trial supplies and logistics team ensures seamless coordination of labelling, packaging, temperature management, storage, and distribution, delivering the right items to the right place at the right time, within budget.
            </p>
          </div>
        </div>
      </section>

      <SupplyChainOverview />

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive solutions for clinical trial supplies and logistics to ensure seamless operations.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ClinicalTrialSuppliesPage;
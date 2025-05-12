import React from 'react';
import '../styles/MedicalWritingPage.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const MedicalWritingOverview = () => {
  return (
    <section className="medical-writing-section">
      <div className="container">
        <div className="medical-writing-content">
          <h2>Our Medical Writing Approach</h2>
          <p>
            Medical writers are critical to the communication process of outlining the goals, strategies, analysis, and medical understanding of a clinical trial/program to patients, sites, sponsors, and regulatory agencies. V&S Global solutions’ regulatory and medical writers team are lucid and to the point in every step of the process of preparing clinical documents including protocols, clinical study reports (CSRs), and Investigator’s Brochures. V&S Global solutions provides medical writing support to the operational departments including Biostatistics, Medical Affairs, Quality Assurance, Regulatory, and Clinical Operations beginning with early-stage development through marketing application and to post-approval. V&S Global Solutions provides rapid turnaround to meet deadlines efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

const MedicalWritingPage = () => {
  const clinicalTrialServices = [
    {
      title: "Protocol Synopsis, Protocols, and Amendments",
      description: "Crafting clear and precise protocols and amendments to guide clinical trials effectively.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Informed Consent Forms",
      description: "Developing patient-friendly consent forms to ensure clarity and compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
    {
      title: "Clinical Study Reports (CSRs)",
      description: "Preparing comprehensive CSRs to document trial results accurately.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
    },
    {
      title: "Clinical Development Plans",
      description: "Designing strategic plans to streamline clinical trial development.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Investigator Brochure",
      description: "Compiling detailed brochures to inform investigators about trial specifics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
          <circle cx="10" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Patient Information Leaflets",
      description: "Creating accessible leaflets to educate patients about trials.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
    },
    {
      title: "Annual/Aggregate Reports",
      description: "Producing periodic reports to summarize trial progress and outcomes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      ),
    },
    {
      title: "Periodic Safety Update Reports (PSURs)",
      description: "Generating PSURs to monitor and report on trial safety data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
        </svg>
      ),
    },
    {
      title: "Patient Safety Narratives",
      description: "Writing detailed narratives to document patient safety events.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
  ];

  const regulatoryServices = [
    {
      title: "Regulatory Agency Submissions",
      description: "Preparing and submitting documents to regulatory authorities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Regulatory Writing",
      description: "Crafting precise regulatory documents to meet agency requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
    {
      title: "Clinical & Non-Clinical Summaries (Module 2)",
      description: "Developing summaries for clinical and non-clinical data submissions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
    {
      title: "Responses to Agency Reviewers",
      description: "Providing clear and timely responses to regulatory agency queries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      ),
    },
    {
      title: "Risk Management Plans",
      description: "Creating plans to identify and mitigate risks in clinical trials.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="medical-writing-page">
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
              Expert Medical Writing Services
            </div>
            <h1>Medical Writing: Clear Communication of Medical Information</h1>
            <p>
              Our medical writing team delivers precise clinical trial documents and regulatory submissions, supporting your trial from development to approval.
            </p>
          </div>
        </div>
      </section>

      <MedicalWritingOverview />

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Clinical Trial & Program Documentation</h2>
            <p>Comprehensive documentation to support clinical trials and ensure clear communication.</p>
          </div>
          <div className="services-grid">
            {clinicalTrialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Regulatory Publishing</h2>
            <p>Expert regulatory writing to meet agency requirements and streamline submissions.</p>
          </div>
          <div className="services-grid">
            {regulatoryServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Contact Us for Collaboration</h2>
            <p>
              For more details or to discuss your medical writing needs, reach us at{' '}
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
      </section>
    </div>
  );
};

export default MedicalWritingPage;
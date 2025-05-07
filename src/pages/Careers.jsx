import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/CareersPage.css';


const BenefitCard = ({ title, description, icon }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CareersPage = () => {

  const benefits = [
    {
      title: "Professional Growth",
      description:
        "Access continuous learning opportunities, including workshops, certifications, and mentorship from industry experts.",
      icon: (
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
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
    {
      title: "Collaborative Culture",
      description:
        "Work in a dynamic, inclusive environment where your ideas are valued, and teamwork drives innovation.",
      icon: (
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
          <circle cx="10" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Impactful Work",
      description:
        "Contribute to groundbreaking clinical research that improves global health outcomes and advances medical science.",
      icon: (
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
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
          <line x1="8" y1="12" x2="8" y2="12"></line>
          <line x1="16" y1="12" x2="16" y2="12"></line>
        </svg>
      ),
    },
    {
      title: "Work-Life Balance",
      description:
        "Enjoy flexible work arrangements, wellness programs, and a supportive environment that prioritizes your well-being.",
      icon: (
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
  ];

  return (
    <div className="careers-page">
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
              Join Our Mission
            </div>
            <h1>Welcome to Your Journey at V&S Global Solutions</h1>
            <p>
              If you’re passionate about making a lasting impact in clinical research and shaping sustainable health solutions, V&S Global Solutions offers a dynamic environment to hone your skills and grow your career.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Join V&S Global Solutions</h2>
            <p>Discover the benefits of being part of our innovative and passionate team.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="apply-section">
        <div className="animated-bg apply-animated-bg">
          <div className="apply-telescope apply-telescope-1"></div>
          <div className="apply-telescope apply-telescope-2"></div>
          <div className="apply-orbit apply-orbit-1"></div>
          <div className="apply-orbit apply-orbit-2"></div>
          <div className="apply-particle apply-particle-1"></div>
          <div className="apply-particle apply-particle-2"></div>
          <div className="apply-glow apply-glow-1"></div>
          <div className="apply-glow apply-glow-2"></div>
        </div>
        <div className="container">
          <div className="apply-content">
            <h2>Apply Now</h2>
            <p>Ready to join our team? Fill out the form below to submit your application.</p>
            <div className="apply-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
              </div>
              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                <textarea id="coverLetter" placeholder="Tell us why you're a great fit" />
              </div>
              <button type="submit" className="submit-button">
                Submit Application <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          {/* L-shaped dotted corners */}
          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>
          
          <h2>Contact Our HR Team</h2>
          <p>
            For inquiries about job openings or the application process, reach us at{' '}
            <a href="mailto:hr@vsglobalsolutions.com">hr@vsglobalsolutions.com</a> or call{' '}
            <a href="tel:+919074047489">+91 9074047489</a>.
          </p>
          <p>
            <strong>Office Address:</strong> 8MFC+MQ8, Maruthi Nagar, Thindal, Erode, Tamil Nadu 638012
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CareersPage;
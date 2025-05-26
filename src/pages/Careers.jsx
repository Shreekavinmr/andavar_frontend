import React, { useState } from 'react';
import { ArrowRight, Loader } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    coverLetter: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !resumeFile) {
      setStatus('Please fill all required fields.');
      return;
    }

    setIsLoading(true);
    setStatus('');

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('resume', resumeFile);
    formDataToSend.append('secretKey', 'fghjnwri7653r2rghjebfh'); 

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; 


    try {
      const response = await fetch(`${BACKEND_URL}/api/apply`, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Application submitted successfully!');
        setFormData({ fullName: '', email: '', coverLetter: '' });
        setResumeFile(null);
        document.getElementById('resume').value = ''; // Reset file input
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Error submitting application. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              If you're passionate about making a lasting impact in clinical research and shaping sustainable health solutions, V&S Global Solutions offers a dynamic environment to hone your skills and grow your career.
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
            <h-behavior
              actions="fadeIn: { duration: 1s, easing: ease-out }"
              trigger="visible"
            >
              <h2>Apply Now</h2>
            </h-behavior>
            <h-behavior
              actions="fadeIn: { duration: 1s, easing: ease-out, delay: 0.2s }"
              trigger="visible"
            >
              <p>Ready to join our team? Fill out the form below to submit your application.</p>
            </h-behavior>
            <div className="apply-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                <textarea
                  id="coverLetter"
                  placeholder="Tell us why you're a great fit"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <button 
                className={`submit-button ${isLoading ? 'loading' : ''}`} 
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader size={18} className="loading-icon" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <ArrowRight size={18} />
                  </>
                )}
              </button>
              {status && <p className={`form-status ${status.includes('Error') ? 'error' : 'success'}`}>{status}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
            <h2>Contact Our HR Team</h2>
            <p>
              For inquiries about job openings or the application process, reach us at{' '}
              <a href="mailto:V&sglobalbiosolutions.com">V&sglobalbiosolutions.com</a> or call{' '}
              <a href="tel:+919080108558">+91 9080108558</a>.
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

export default CareersPage;
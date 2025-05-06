import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import '../styles/CareersPage.css';

// Intersection Observer Hook for animations
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Section Heading Component
const SectionHeading = ({ title, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`section-heading ${isVisible ? 'animate-slide-up' : ''}`}
    >
      <h2>{title}</h2>
      <div className="heading-divider"></div>
      <p>{subtitle}</p>
    </div>
  );
};

// Job Card Component
const JobCard = ({ title, department, location, type }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      scale={1.03}
      transitionSpeed={700}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
    >
      <div
        ref={ref}
        className={`job-card ${isVisible ? 'card-visible' : ''}`}
      >
        <div className="card-overlay"></div>
        <div className="card-content">
          <h3>{title}</h3>
          <div className="card-divider"></div>
          <p className="department">{department}</p>
          <p className="location">{location}</p>
          <span className="job-type">{type}</span>
          <a
            href="#apply-section"
            className="view-details"
          >
            View Details
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </Tilt>
  );
};

// Value Proposition Card
const ValueCard = ({ title, description }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      scale={1.03}
      transitionSpeed={700}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
    >
      <div
        ref={ref}
        className={`value-card ${isVisible ? 'card-visible' : ''}`}
      >
        <div className="card-overlay"></div>
        <div className="card-content">
          <h3>{title}</h3>
          <div className="card-divider"></div>
          <p>{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

// Application Form Component
const ApplicationForm = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [fileName, setFileName] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div
      ref={ref}
      id="apply-section"
      className={`application-form ${isVisible ? 'card-visible' : ''}`}
    >
      <div className="card-overlay"></div>
      <div className="form-content">
        <h3>Apply Now</h3>
        <div className="card-divider"></div>
        {formStatus === 'success' ? (
          <div className="success-message">
            <div className="success-icon">
              <CheckCircle size={32} />
            </div>
            <h4>Application Submitted!</h4>
            <p>Thank you for your interest in joining V&S Global Solutions. We'll review your application and get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            <div>
              <label>First Name*</label>
              <input type="text" required />
            </div>
            <div>
              <label>Last Name*</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email Address*</label>
              <input type="email" required />
            </div>
            <div>
              <label>Phone Number*</label>
              <input type="tel" required />
            </div>
            <div>
              <label>Position You're Applying For*</label>
              <select required>
                <option value="">Select a position</option>
                <option value="clinical-research-associate">Clinical Research Associate</option>
                <option value="research-coordinator">Research Coordinator</option>
                <option value="data-manager">Clinical Data Manager</option>
                <option value="medical-writer">Medical Writer</option>
                <option value="biostatistician">Biostatistician</option>
                <option value="project-manager">Project Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Upload Your Resume/CV*</label>
              <div className="file-upload">
                <div className="upload-area">
                  <label className="upload-label">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p>or drag and drop</p>
                  <p className="file-types">PDF, DOC up to 10MB</p>
                  {fileName && (
                    <p className="file-name">
                      <FileText size={16} className="mr-2" />
                      {fileName}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label>Why do you want to join V&S Global Solutions? (Optional)</label>
              <textarea rows="4"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`submit-button ${formStatus === 'submitted' ? 'submitting' : ''}`}
                disabled={formStatus === 'submitted'}
              >
                {formStatus === 'submitted' ? (
                  <>
                    <svg className="animate-spin mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Main Careers Page Component
const CareersPage = () => {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Sample job listings
  const openPositions = [
    {
      title: "Clinical Research Associate",
      department: "Clinical Operations",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      title: "Senior Medical Writer",
      department: "Medical Affairs",
      location: "Delhi, India",
      type: "Full-time"
    },
    {
      title: "Clinical Data Manager",
      department: "Data Management",
      location: "Bangalore, India",
      type: "Full-time"
    },
    {
      title: "Biostatistician",
      department: "Biometrics",
      location: "Hyderabad, India",
      type: "Contract"
    },
    {
      title: "Research Coordinator",
      department: "Clinical Operations",
      location: "Chennai, India",
      type: "Full-time"
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Pune, India",
      type: "Full-time"
    }
  ];

  // Value propositions
  const valueProps = [
    {
      title: "Growth Opportunities",
      description: "Develop your skills in a dynamic startup environment focused on clinical research innovation."
    },
    {
      title: "Meaningful Impact",
      description: "Help improve healthcare outcomes across India and beyond through groundbreaking clinical research."
    },
    {
      title: "Collaborative Culture",
      description: "Join a diverse team of passionate professionals who challenge and support each other."
    },
    {
      title: "Excellence & Recognition",
      description: "Your contributions will be valued and recognized in our merit-based work environment."
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section (Unchanged) */}
      <section className="hero-section">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="dots-pattern dots-1"></div>
        <div className="dots-pattern dots-2"></div>
        <div className="container">
          <div
            ref={heroRef}
            className={`hero-content ${heroVisible ? 'animate-slide-up' : ''}`}
          >
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
              Career Opportunities
            </div>
            <h1>Join Our Mission to Transform Clinical Research</h1>
            <p>
              Be part of a team pushing the boundaries of healthcare innovation and making a lasting impact on global health outcomes.
            </p>
            <a
              href="#open-positions"
              className="cta-button"
            >
              Explore Open Positions
              <div className="button-overlay"></div>
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="animated-bg about-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="About V&S Global Solutions"
            subtitle="Learn about our mission and why we're passionate about clinical research"
          />
          <div className="about-content">
            <p>
              At V&S Global Solutions, we are committed to revolutionizing clinical research to improve healthcare outcomes globally. Our team is dedicated to fostering innovation, collaboration, and excellence in a dynamic startup environment.
            </p>
            <p>
              We attract passionate individuals who share our vision of transforming the clinical research landscape. Joining us means becoming part of a diverse team that values your contributions and supports your professional growth.
            </p>
            <p>
              As we expand our presence in India, we are seeking talented professionals to strengthen our team. Explore our opportunities and take the first step towards a rewarding career with us.
            </p>
            <div className="content-note">
              <p>
                Please review the job descriptions carefully to ensure alignment with your skills and career goals before applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section" id="open-positions">
        <div className="animated-bg positions-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Open Positions"
            subtitle="Find the perfect role to contribute to our mission"
          />
          <div className="positions-grid">
            {openPositions.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="values-section">
        <div className="animated-bg values-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Why Join V&S Global Solutions"
            subtitle="Discover what makes our team and culture special"
          />
          <div className="values-grid">
            {valueProps.map((prop, index) => (
              <ValueCard
                key={index}
                title={prop.title}
                description={prop.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="form-section">
        <div className="animated-bg form-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Join Our Team"
            subtitle="Take the first step towards your career with V&S Global Solutions"
          />
          <ApplicationForm />
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
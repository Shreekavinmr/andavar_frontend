import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/CoursesPage.css';

const CourseCard = ({ title, description, modules, duration, brochure, application, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="course-modules">
        <h3>Course Modules</h3>
        <ul>
          {modules.map((module, index) => (
            <li key={index}>{module}</li>
          ))}
        </ul>
      </div>
      <div className="course-duration">{duration}</div>
      <div className="course-links">
        <a href={brochure} className="course-link">
          Download Brochure <ArrowRight size={18} />
        </a>
        <a href={application} className="course-link">
          Application Form <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

const WhyChooseCard = ({ title, description, icon }) => {
  return (
    <div className="why-choose-card">
      <div className="why-choose-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CoursesPage = () => {
  const courses = [
    {
      title: "Advanced Certificate In Clinical Research",
      description:
        "The ADVANCED CERTIFICATE IN CLINICAL RESEARCH course is designed to obtain and develop the skills essential for the conduct of effective clinical research. This course enables you to know the practical features of clinical trial and its management including planning, implementation, regulatory and procedural guidelines, data analysis, and ethical considerations.",
      modules: [
        "Human anatomy, Physiology and Pathophysiology of diseases",
        "Pharmacology",
        "Introduction to Clinical Research and Drug Development",
        "Ethical Guidelines and Regulations in Clinical Research",
        "Clinical Trial and Data Management",
        "Pharmacovigilance and Drug Safety",
      ],
      duration: "6 Months (Full Time – Regular classes)",
      image: "/assets/images/courses_1.jpg",
      brochure: "/assets/docs/clinical_research_brochure.pdf",
      application: "/assets/docs/clinical_research_application.pdf",
    },
    {
      title: "Certificate Programme In Biostatistics & Statistical Software (SAS, R & EXCEL)",
      description:
        "The CERTIFICATE PROGRAMME IN BIOSTATISTICS & STATISTICAL SOFTWARES course introduces the fundamentals of SAS programming, R, and Excel. Emphasis is placed on learning basic SAS commands and statements for solving a variety of data processing applications. You will be able to analyse and write code for real problems, learn to use softwares to work with clinical datasets, perform advanced statistical techniques to obtain optimized results.",
      modules: [
        "Basic Biostatistics",
        "Statistical analysis tests and methods",
        "SAS programming and analysis of data",
        "R and EXCEL programming – basics and detailed analysis",
        "Sample project (students will have the option to carry out data analyses from clinical trials using the computer-based SAS/R/EXCEL software package)",
      ],
      duration: "5 Months (Evening & Weekend classes)",
      image: "/assets/images/courses_2.jpg",
      brochure: "/assets/docs/biostatistics_brochure.pdf",
      application: "/assets/docs/biostatistics_application.pdf",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Faculty",
      description: "Learn from industry veterans and academic leaders with decades of experience in clinical research and biostatistics.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    },
    {
      title: "Industry Connections",
      description: "Benefit from our partnerships with leading pharmaceutical companies and CROs, offering real-world insights and opportunities.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="8" y1="12" x2="8" y2="12"></line><line x1="16" y1="12" x2="16" y2="12"></line></svg>,
    },
    {
      title: "Practical Training",
      description: "Gain hands-on experience with clinical datasets and industry-standard software like SAS, R, and Excel.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    },
    {
      title: "Career Support",
      description: "Access dedicated career services, including resume workshops, interview preparation, and job placement assistance.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    },
  ];

  return (
    <div className="courses-page">
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
              Premier Clinical Research Training
            </div>
            <h1>Empowering Clinical Research Excellence</h1>
            <p>
              V and S Global Solutions offers premier training programs designed to equip students with practical skills and industry expertise for a successful career in clinical research.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Courses</h2>
            <p>Comprehensive programs to build expertise in clinical research and biostatistics.</p>
          </div>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="animated-bg contact-animated-bg">
          <div className="contact-telescope contact-telescope-1"></div>
          <div className="contact-telescope contact-telescope-2"></div>
          <div className="contact-orbit contact-orbit-1"></div>
          <div className="contact-orbit contact-orbit-2"></div>
          <div className="contact-particle contact-particle-1"></div>
          <div className="contact-particle contact-particle-2"></div>
          <div className="contact-glow contact-glow-1"></div>
          <div className="contact-glow contact-glow-2"></div>
        </div>
        <div className="container">
          <div className="contact-content">
            <h2>Contact Us for Admissions</h2>
            <p>
              For admission and more details, reach us at{' '}
              <a href="tel:+919074047489">+91 9074047489</a> or mail us at{' '}
              <a href="mailto:info@vsglobalsolutions.com">info@vsglobalsolutions.com</a>.
            </p>
            <p>
              <strong>Institute Address:</strong> 8MFC+MQ8, Maruthi Nagar, Thindal, Erode, Tamil Nadu 638012
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose V&S Global Solutions</h2>
            <p>Discover what sets our clinical research training programs apart.</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
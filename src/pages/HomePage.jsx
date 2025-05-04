import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/HomePage.css';
import AnimatedServicesSection from './AnimatedServicesSection';

const StatCounter = ({ number, label }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const duration = 2000;

  React.useEffect(() => {
    let observer;
    const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));
    const suffix = number.replace(/[0-9]/g, '');

    const startCounting = () => {
      let start = 0;
      const increment = targetNumber / (duration / 16);

      const updateCount = () => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start) + suffix);
        }
      };

      const timer = setInterval(updateCount, 16);
      return () => clearInterval(timer);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [number]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const HomePage = () => {
  const stats = [
    { number: "500+", label: "Clinical Trials" },
    { number: "50+", label: "Countries" },
    { number: "12000+", label: "Patients Enrolled" },
    { number: "98%", label: "Client Retention" }
  ];

  const partners = [
    { name: "Erode Cancer Center", logo: "/assets/images/scroll_1.png" },
    { name: "IMed Speciality Hospital", logo: "/assets/images/scroll_2.jpeg" },
    { name: "Bangalore Cancer Center", logo: "/assets/images/scroll_3.jpeg" },
    { name: "Universal Cancer Hospital", logo: "/assets/images/scroll_4.png" },
    { name: "Sri Narayani Hospital and Research", logo: "/assets/images/scroll_5.jpg" },
  ];

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text-container">
              <div className="hero-text">
                <h1>Accelerating Medical Breakthroughs Worldwide</h1>
                <p>V&S Global Solutions delivers innovative and reliable clinical research services to advance healthcare outcomes and improve patient lives.</p>
                <div className="hero-buttons">
                  <a href="/services" className="primary-button">
                    Our Services
                    <ArrowRight size={20} />
                  </a>
                  <a href="/contact" className="secondary-button">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="hero-images-overlay">
              <div className="image-overlay image-1">
                <img src="/assets/images/vs_2.jpg" alt="Laboratory researcher" />
              </div>
              <div className="image-overlay image-2">
                <img src="/assets/images/vs_3.jpg" alt="Clinical research meeting" />
              </div>
              <div className="image-overlay image-3">
                <img src="/assets/images/vs_1.jpg" alt="Clinical research meeting" />
              </div>
            </div>
          </div>
          <div className="decorative-elements">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="dots-1"></div>
            <div className="dots-2"></div>
            <div className="glow-1"></div>
            <div className="glow-2"></div>
          </div>
        </div>
      </section>

      <section className="about-preview-section">
        <div className="animated-bg about-animated-bg">
          <div className="about-dots-l1"></div>
          <div className="about-dots-l2"></div>
          <div className="about-square-dots about-square-dots-1"></div>
          <div className="about-square-dots about-square-dots-2"></div>
          <div className="about-glow about-glow-1"></div>
          <div className="about-glow about-glow-2"></div>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/assets/images/meet_clinical.jpg" alt="Clinical research team meeting" />
            </div>
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>V&S Global Solutions is an integrated clinical research solution for pharmaceutical, ayurveda, biotechnology companies, and medical device producers. We have a long track record of evaluating the safety and efficacy of drugs and medical devices across a wide range of therapeutic indications.</p>
              <p>V&S Global Solutions operates in adherence to national and international regulatory requirements. Our centers are in compliance with ICH-GCP and other applicable regulatory guidelines. We focus on quality delivery of clinical trials to our clients by implementing various strategies and focus to ensure timely execution of clinical projects within the budget.</p>
              <a href="/about" className="about-link">
                More About Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCounter key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>


      <AnimatedServicesSection />

      <section className="cta-section">
        <div className="animated-bg cta-animated-bg">
          <div className="cta-telescope cta-telescope-1"></div>
          <div className="cta-telescope cta-telescope-2"></div>
          <div className="cta-orbit cta-orbit-1"></div>
          <div className="cta-orbit cta-orbit-2"></div>
          <div className="cta-particle cta-particle-1"></div>
          <div className="cta-particle cta-particle-2"></div>
          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Partner with Us for Cutting-Edge Research</h2>
            <p>
              At V&S Global Solutions, we specialize in transforming complex clinical challenges into breakthrough solutions. 
              Our team of expert researchers and state-of-the-art methodologies ensure every project is handled with scientific 
              precision and ethical integrity. From early-phase trials to regulatory submissions, we help you navigate the path 
              to successful outcomes — faster and smarter.
            </p>
            <a href="/contact" className="cta-button">
              Start Your Project
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-container">
          <div className="courses-content">
            <div className="courses-text">
              <h2>Clinical Research Courses</h2>
              <p>Empowering the next generation of clinical research professionals with advanced training programs designed to build expertise and drive innovation.</p>
            </div>
            <div className="courses-cards">
              <div className="course-card">
                <h3>Online Clinical Research Course</h3>
                <p>Flexible, self-paced learning to master clinical research methodologies and regulations.</p>
                <a href="/online-course" className="course-link">
                  Explore Course <ArrowRight size={18} />
                </a>
              </div>
              <div className="course-card">
                <h3>Institution of Clinical Research</h3>
                <p>Comprehensive in-person training with hands-on experience and industry insights.</p>
                <a href="/institution" className="course-link">
                  Learn More <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Partners</h2>
            <p>Collaborating with leading organizations to drive innovation in clinical research</p>
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

export default HomePage;
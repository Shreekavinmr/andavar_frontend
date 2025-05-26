import React, { useEffect, useRef, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import '../styles/TherapeuticAreasPage.css';

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

// Animated Counter Component for Impact Section
const AnimatedCounter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="impact-counter">
      {count}
      {suffix}
    </span>
  );
};

// Animated Section Heading Component
const SectionHeading = ({ title, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`section-header ${isVisible ? 'animate-slide-up' : ''}`}
    >
      <h2>{title}</h2>
      <div className="heading-underline"></div>
      <p>{subtitle}</p>
    </div>
  );
};

// Enhanced Therapeutic Area Card Component
const TherapeuticAreaCard = ({ category, areas, index, isOncology }) => {
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
        className={`therapeutic-card ${isVisible ? 'card-visible' : ''} ${
          !isOncology ? 'coming-soon' : ''
        }`}
      >
        <div className="card-overlay"></div>
        <div className="card-content">
          <h3>{category}</h3>
          <div className="card-divider"></div>
          {isOncology ? (
            <ul>
              {areas.map((area, idx) => (
                <li key={idx} className="area-item">
                  <span className="area-line"></span>
                  {area}
                </li>
              ))}
            </ul>
          ) : (
            <p className="coming-soon-text">Coming Soon</p>
          )}
        </div>
      </div>
    </Tilt>
  );
};

// Enhanced Impact Card Component
const ImpactCard = ({ title, count, suffix, description }) => {
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
        className={`impact-card ${isVisible ? 'card-visible' : ''}`}
      >
        <div className="card-overlay"></div>
        <div className="impact-content">
          <AnimatedCounter end={count} duration={2000} suffix={suffix} />
          <h4>{title}</h4>
          <div className="card-divider"></div>
          <p>{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

// Main Therapeutic Areas Page Component
const TherapeuticAreasPage = () => {
  const therapeuticAreas = [
    {
      category: 'Oncology',
      areas: ['Solid Tumors', 'Leukemia', 'Lymphoma', 'Sarcoma', 'Melanoma', 'Multiple Myeloma'],
    },
    
    {
      category: 'Rheumatology and Orthopedics',
      areas: ['Osteoarthritis','Osteoporosis','Arthritis','Rheumatoid Arthritis'],
    },
    {
      category: 'Gynecology',
      areas: ['Fertility','Oral Contraceptives','Intrauterine Devices'],
    },
    
    {
      category: 'Ayurvedic',
      areas: [
    'Digestive Health',
    'Immunity Boosting',
    'Stress & Anxiety Relief',
    'Skin & Hair Care',
    'Detoxification (Panchakarma)',
  ],
    },
    {
      category: 'Neurology',
      areas: [],
    },
    {
      category: 'Respiratory',
      areas: [],
    },
    {
      category: 'Nephrology',
      areas: [],
    },
    {
      category: 'Dermatology',
      areas: [],
    },
    {
      category: 'Diabetes',
      areas: [],
    },
  ];

  const impactData = [
    {
      title: 'Innovative Research',
      count: 50,
      suffix: '+',
      description: 'Contributed to over 50 clinical trials, advancing treatments in oncology, neurology, and cardiology.',
    },
    {
      title: 'Global Collaboration',
      count: 30,
      suffix: '+',
      description: 'Partnered with 30+ international research institutions to accelerate healthcare solutions.',
    },
    {
      title: 'Worldwide Reach',
      count: 20,
      suffix: '+',
      description: 'Our research impacts patients in over 20 countries, improving lives through innovative therapies.',
    },
  ];

  return (
    <div className="therapeutic-areas-page">
      {/* Hero Section */}
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
              Therapeutic Areas
            </div>
            <h1>
              <ReactTyped
                strings={['Advancing Research Across Diverse Therapeutic Areas']}
                typeSpeed={50}
                backSpeed={30}
                loop={false}
                showCursor={true}
                cursorChar="|"
              />
            </h1>
            <p>
              V&S Global Solutions excels in a wide range of therapeutic areas, delivering innovative solutions in oncology, cardiology, neurology, and more to drive global healthcare advancements.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <section className="areas-section">
        <div className="animated-bg areas-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Expertise"
            subtitle="Explore the therapeutic areas where we make a difference"
          />
          <div className="areas-grid">
            {therapeuticAreas.map((area, index) => (
              <TherapeuticAreaCard
                key={index}
                category={area.category}
                areas={area.areas}
                index={index}
                isOncology={area.category === 'Oncology' || area.category==='Gynecology' || area.category==='Rheumatology and Orthopedics' || area.category==='Ayurvedic'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h3>Collaborate with Us to Advance Healthcare</h3>
            <p>
              Partner with V&S Global Solutions to leverage our expertise across diverse therapeutic areas. Together, we can accelerate clinical research and deliver life-changing solutions.
            </p>
            <a href="/contact" className="cta-button">
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
        <div className="animated-bg impact-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Impact"
            subtitle="Driving meaningful change in global healthcare"
          />
          <div className="impact-grid">
            {impactData.map((item, index) => (
              <ImpactCard
                key={index}
                title={item.title}
                count={item.count}
                suffix={item.suffix}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TherapeuticAreasPage;
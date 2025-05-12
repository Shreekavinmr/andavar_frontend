import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  Clock,
  CheckCircle,
  Target,
  Briefcase,
  Star,
  DollarSign,
  Sparkles,
} from 'lucide-react';
import '../styles/AboutUsPage.css';

// Intersection Observer Hook for animations
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
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

// Animated section heading component
const SectionHeading = ({ title, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`section-header ${isVisible ? 'animate-fade-in' : ''}`}
    >
      <h2>{title}</h2>
      <div className="heading-underline"></div>
      <p>{subtitle}</p>
    </div>
  );
};

// Timeline Event Component
const TimelineEvent = ({ event, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'timeline-visible' : ''}`}
    >
      <div className="timeline-icon">
        {event.icon}
      </div>
      <div className="timeline-content">
        <div className="timeline-year">{event.year}</div>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

// Timeline component for company history
const Timeline = () => {
  const timelineEvents = [
    {
      year: '2010',
      title: 'Founded',
      description: 'V&S Global Solutions was established with a vision to accelerate medical breakthroughs worldwide.',
      icon: <Clock />,
    },
    {
      year: '2012',
      title: 'First Major Partnership',
      description: 'Secured partnership with a leading pharmaceutical company for clinical trials across Asia.',
      icon: <Users />,
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Expanded operations to 25+ countries, establishing our global presence.',
      icon: <Globe />,
    },
    {
      year: '2018',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for our quality management systems.',
      icon: <Award />,
    },
    {
      year: '2021',
      title: 'Research Breakthrough',
      description: 'Contributed to a groundbreaking cancer treatment trial with 98% success rate.',
      icon: <CheckCircle />,
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Operating in 50+ countries with over 500 clinical trials and 12,000+ patients enrolled.',
      icon: <Target />,
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {timelineEvents.map((event, index) => (
        <TimelineEvent key={index} event={event} index={index} />
      ))}
    </div>
  );
};

// Why Choose Us Card Component
const ChooseUsCard = ({ icon, title, description }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`choose-us-card ${isVisible ? 'card-visible' : ''}`}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ name, role, image }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`team-member-card ${isVisible ? 'member-visible' : ''}`}
    >
      <div className="member-image">
        <img src={image} alt={name} />
        <div className="member-overlay"></div>
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

// Main About Us Page Component
const AboutUsPage = () => {
  const [missionRef, missionVisible] = useIntersectionObserver({ threshold: 0.1 });

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/assets/images/leader_1.jpeg",
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Scientific Officer",
      image: "/assets/images/leader_2.jpeg",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Clinical Operations",
      image: "/assets/images/leader_3.jpeg",
    },
    {
      name: "Dr. James Wilson",
      role: "Director of Research",
      image: "/assets/images/leader_5.jpg",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Star size={36} />,
      title: "Uniquely Capable",
      description: "We offer the full spectrum of clinical trial services in one package. We are a team with an exceptional mix of technical and research knowledge.",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Comprehensive project management",
      description: "We are experienced in managing all types of complex trials. Every trial is systematically managed and coordinated to achieve the study goals.",
    },
    {
      icon: <Award size={36} />,
      title: "Committed to quality",
      description: "We do not settle for anything but the best, and neither should you when it comes to research. We've worked hard to find the best ways to provide the quality services.",
    },
    {
      icon: <Users size={36} />,
      title: "Extensive investigator network",
      description: "Specialized researchers with decades of combined experience. We have created a multi-site, committed investigator network to fulfill the study/sponsor requirements which catalyze trials and pave the way for drug development.",
    },
    {
      icon: <DollarSign size={36} />,
      title: "Flexible and Cost effective",
      description: "We are responsive, flexible and adapt as your research needs change, with a speed and cost-effectiveness that the other SMO’s can't match.",
    },
    {
      icon: <Sparkles size={36} />,
      title: "Your dreams, Our challenge",
      description: "We are committed to fulfilling your dreams through quality services and we always take up these challenges to make people’s lives better.",
    },
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section (Copied from CoursesPage) */}
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
              About V&S Global Solutions
            </div>
            <h1>Your Partner in Clinical Research Success</h1>
            <p>
              V&S Global Solutions is a trusted leader in clinical research, delivering comprehensive services including site management, clinical data management, clinical trial supplies, medical writing, and biostatistics. We empower professionals and organizations with innovative solutions and expertise to drive impactful healthcare advancements globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-section">
        <div className="animated-bg mission-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Driving innovation and excellence in global clinical research"
          />
          <div
            ref={missionRef}
            className={`mission-content ${missionVisible ? 'mission-visible' : ''}`}
          >
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To build strategic partnerships with selected sponsors and CROs, provide high-quality services to the healthcare industry in clinical research, and deliver quality therapeutics to improve human lives.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To advance clinical research with innovation and empirical leadership to improve global health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      {/* <section className="history-section">
        <div className="animated-bg history-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Journey"
            subtitle="From foundation to global leadership in clinical research"
          />
          <Timeline />
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="values-section">
        <div className="animated-bg values-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="Principles that guide our work and culture"
          />
          <div className="choose-us-grid">
            {whyChooseUs.map((item, index) => (
              <ChooseUsCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
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
            <h3>Partner with Us for Cutting-Edge Research</h3>
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

      {/* Team Section */}
      <section className="team-section">
        <div className="animated-bg team-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind V&S Global Solutions"
          />
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
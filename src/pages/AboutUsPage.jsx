import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  // Globe,
  Users,
  // Clock,
  // CheckCircle,
  // Target,
  Briefcase,
  Star,
  DollarSign,
  Sparkles,
} from "lucide-react";
import "../styles/AboutUsPage.css";
import HeroSection from "./HeroSection";

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
      className={`section-header ${isVisible ? "animate-fade-in" : ""}`}
    >
      <h2>{title}</h2>
      <div className="heading-underline"></div>
      <p>{subtitle}</p>
    </div>
  );
};

// Timeline Event Component
// const TimelineEvent = ({ event, index }) => {
//   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <div
//       ref={ref}
//       className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'timeline-visible' : ''}`}
//     >
//       <div className="timeline-icon">
//         {event.icon}
//       </div>
//       <div className="timeline-content">
//         <div className="timeline-year">{event.year}</div>
//         <h3>{event.title}</h3>
//         <p>{event.description}</p>
//       </div>
//     </div>
//   );
// };

// // Timeline component for company history
// const Timeline = () => {
//   const timelineEvents = [
//     {
//       year: '2010',
//       title: 'Founded',
//       description: 'V&S Global Solutions was established with a vision to accelerate medical breakthroughs worldwide.',
//       icon: <Clock />,
//     },
//     {
//       year: '2012',
//       title: 'First Major Partnership',
//       description: 'Secured partnership with a leading pharmaceutical company for clinical trials across Asia.',
//       icon: <Users />,
//     },
//     {
//       year: '2015',
//       title: 'International Expansion',
//       description: 'Expanded operations to 25+ countries, establishing our global presence.',
//       icon: <Globe />,
//     },
//     {
//       year: '2018',
//       title: 'ISO Certification',
//       description: 'Achieved ISO 9001:2015 certification for our quality management systems.',
//       icon: <Award />,
//     },
//     {
//       year: '2021',
//       title: 'Research Breakthrough',
//       description: 'Contributed to a groundbreaking cancer treatment trial with 98% success rate.',
//       icon: <CheckCircle />,
//     },
//     {
//       year: '2024',
//       title: 'Today',
//       description: 'Operating in 50+ countries with over 500 clinical trials and 12,000+ patients enrolled.',
//       icon: <Target />,
//     },
//   ];

//   return (
//     <div className="timeline-container">
//       <div className="timeline-line"></div>
//       {timelineEvents.map((event, index) => (
//         <TimelineEvent key={index} event={event} index={index} />
//       ))}
//     </div>
//   );
// };

// Why Choose Us Card Component
const ChooseUsCard = ({ icon, title, description }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`choose-us-card ${isVisible ? "card-visible" : ""}`}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Team Member Card Component
// const TeamMemberCard = ({ name, role, image }) => {
//   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <div
//       ref={ref}
//       className={`team-member-card ${isVisible ? 'member-visible' : ''}`}
//     >
//       <div className="member-image">
//         <img src={image} alt={name} />
//         <div className="member-overlay"></div>
//       </div>
//       <div className="member-info">
//         <h3>{name}</h3>
//         <p>{role}</p>
//       </div>
//     </div>
//   );
// };

// Main About Us Page Component
const AboutUsPage = () => {
  const [missionRef, missionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // const teamMembers = [
  //   {
  //     name: "Dr. Sarah Johnson",
  //     role: "Founder & CEO",
  //     image: "/assets/images/leader_1.jpeg",
  //   },
  //   {
  //     name: "Dr. Michael Chen",
  //     role: "Chief Scientific Officer",
  //     image: "/assets/images/leader_2.jpeg",
  //   },
  //   {
  //     name: "Dr. Emily Rodriguez",
  //     role: "Head of Clinical Operations",
  //     image: "/assets/images/leader_3.jpeg",
  //   },
  //   {
  //     name: "Dr. James Wilson",
  //     role: "Director of Research",
  //     image: "/assets/images/leader_5.jpg",
  //   },
  // ];
  const stats = [
    { number: "12+", label: "Unique Flavours" },
    { number: "3", label: "Premium Brands" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "Customer Satisfaction" },
  ];
  const whyChooseUs = [
    {
      icon: <Star size={36} />,
      title: "Unmatched Product Quality",
      description:
        "Every bottle we produce — from drinking water to our beverage line — goes through strict purification, filtration, and quality control to ensure consistent safety, purity, and great taste.",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Strong Distribution & Logistics",
      description:
        "With a reliable supply chain, fast delivery systems, and a growing distribution network, we ensure uninterrupted availability for dealers, retailers, and business partners.",
    },
    {
      icon: <Award size={36} />,
      title: "Certified Production Standards",
      description:
        "Our manufacturing units follow certified hygiene and safety standards with advanced technology, ensuring every product meets the highest industry benchmarks.",
    },
    {
      icon: <Users size={36} />,
      title: "Trusted by Thousands",
      description:
        "From households to local shops, corporate clients, and retailers — our brand is trusted for its consistency, reliability, and purity across all product categories.",
    },
    {
      icon: <DollarSign size={36} />,
      title: "Dealer-Friendly Pricing",
      description:
        "We provide competitive pricing, flexible order quantities, and excellent margins that support long-term growth for distributors and retailers.",
    },
    {
      icon: <Sparkles size={36} />,
      title: "Innovation in Every Sip",
      description:
        "From refreshing sodas and fruit drinks to energy beverages, we continuously innovate to create products that customers love — refreshing, flavorful, and quality-driven.",
    },
  ];
  const partners = [
    { name: "Dhool", logo: "/assets/images/logo3.png" },
    { name: "Tizzo", logo: "/assets/images/logo1.png" },
    { name: "Andavar Plus", logo: "/assets/images/logo.png" },
    { name: "Aslee", logo: "/assets/images/logo4.png" },
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section (Copied from CoursesPage) */}
      <HeroSection stats={stats} />

      {/* Mission and Vision Section */}
      <section className="mission-section">
        <div className="animated-bg mission-animated-bg"></div>
        <div className="container">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Delivering purity, freshness, and trust in every bottle"
          />

          <div
            ref={missionRef}
            className={`mission-content ${
              missionVisible ? "mission-visible" : ""
            }`}
          >
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To provide safe, hygienic, and high-quality packaged drinking
                water and beverages that meet international standards. We aim to
                serve families, retailers, and partners with consistent purity,
                exceptional taste, and reliable service while continuously
                improving our production practices.
              </p>
            </div>

            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To become a leading and most trusted beverage brand across India
                by innovating refreshing products, expanding our distribution
                network, and upholding a commitment to sustainability, customer
                satisfaction, and world-class quality in everything we deliver.
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
            <h3>Let's Build Refreshing Partnerships Together</h3>
            <p>
              At Andavar Beverages, we are committed to delivering purity,
              quality, and great taste across our entire range — from packaged
              drinking water to our refreshing beverages like Aslee, Dhool, and
              Tizzo. Whether you are a distributor, retailer, or business
              partner, we ensure consistent supply, strong brand value, and
              long-term reliability. Join hands with us and bring trusted
              hydration and refreshment to more customers every day.
            </p>
            <a href="/contact" className="cta-button">
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

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

      {/* Team Section */}
      {/* <section className="team-section">
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
      </section> */}
      
       <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Brands</h2>
            <p>
              A vibrant portfolio of beverages trusted for their flavour, purity and quality.
            </p>
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

export default AboutUsPage;

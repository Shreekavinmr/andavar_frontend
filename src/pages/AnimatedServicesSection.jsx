import React, { useEffect } from 'react';
import { ArrowRight, FileText, Microscope, ChartBar, Globe, Building } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/HomePage.css';

const AnimatedServicesSection = () => {
  const services = [
    {
      icon: <Microscope className="service-icon" />,
      title: "Clinical Trial Management",
      description: "Comprehensive design and execution of clinical trials with a focus on patient safety and data integrity.",
      link: "/services/clinical-trials"
    },
    {
      icon: <FileText className="service-icon" />,
      title: "Medical Writing",
      description: "Expert preparation of regulatory documents, protocols, and scientific publications to meet global standards.",
      link: "/services/medical-writing"
    },
    {
      icon: <Building className="service-icon" />,
      title: "Site Management",
      description: "Efficient coordination and oversight of clinical trial sites to ensure compliance and quality.",
      link: "/services/site-management"
    },
    {
      icon: <ChartBar className="service-icon" />,
      title: "Biostatistics",
      description: "Advanced statistical analysis to derive meaningful insights from clinical trial data.",
      link: "/services/biostatistics"
    },
    {
      icon: <Globe className="service-icon" />,
      title: "Global Research Coordination",
      description: "Seamless management of multi-regional trials with consistent quality across diverse populations.",
      link: "/services/global-research"
    }
  ];

  // Animation for the section header
  const headerControls = useAnimation();
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation for the service cards
  const cardsControls = useAnimation();
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
    if (cardsInView) {
      cardsControls.start('visible');
    }
  }, [headerControls, headerInView, cardsControls, cardsInView]);

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
        >
          <h2>Our Clinical Research Services</h2>
          <p>The clinical trial developmental process is riddled with complexity and risk, which can cost your organization significant time and money. V&S Global Solutions offers a variety of clinical research services that bring together our clinical and regulatory expertise with new technologies to simplify your journey to the market. It all begins with our integrated services in conducting clinical research including.</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={cardsContainerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              className={`service-card service-card-${index}`} 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="service-icon-wrapper"
                variants={iconVariants}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.a 
                href={service.link} 
                className="service-link"
                whileHover={{ 
                  x: 8, 
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  transition: { duration: 0.2 }
                }}
              >
                Explore More <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServicesSection;
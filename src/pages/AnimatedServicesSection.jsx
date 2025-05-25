import React from 'react';
import { ArrowRight, FileText, Microscope, Globe, Building } from 'lucide-react';
import '../styles/HomePage.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <Microscope className="service-icon" />,
      title: "Clinical Trial Management",
      description: "Comprehensive design and execution of clinical trials with a focus on patient safety and data integrity.",
      link: "/services/trial-management"
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
      icon: <Globe className="service-icon" />,
      title: "Global Research Coordination",
      description: "Seamless management of multi-regional trials with consistent quality across diverse populations.",
      link: "/services/global-research"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Clinical Research Services</h2>
          <p>The clinical trial developmental process is riddled with complexity and risk, which can cost your organization significant time and money. V&S Global Solutions offers a variety of clinical research services that bring together our clinical and regulatory expertise with new technologies to simplify your journey to the market. It all begins with our integrated services in conducting clinical research including.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card service-card-${index}`} key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="service-link">
                Explore More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
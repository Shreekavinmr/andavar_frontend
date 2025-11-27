import React from 'react';
import {  Droplets, Package, Truck } from 'lucide-react';
import '../styles/HomePage.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplets className="service-icon" />,
      title: "Premium Soft Drinks",
      description: "Wide variety of refreshing flavours across Aslee, Tizzo and Dhool brands - from fruity to fizzy classics.",
      link: "/services/soft-drinks"
    },
    {
      icon: <Package className="service-icon" />,
      title: "Packaged Drinking Water",
      description: "Pure and safe drinking water under Andavar Plus and Tizzo Water, available in multiple sizes for every need.",
      link: "/services/drinking-water"
    },
    {
      icon: <Truck className="service-icon" />,
      title: "Bulk Distribution",
      description: "Reliable delivery solutions for retailers, restaurants and businesses with flexible order quantities.",
      link: "/services/distribution"
    },
    // {
    //   icon: <Award className="service-icon" />,
    //   title: "Custom Solutions",
    //   description: "Tailored beverage packages for events, corporate needs and special occasions with competitive pricing.",
    //   link: "/services/custom-solutions"
    // }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>Finding the right beverage partner shouldn't be complicated. We offer a complete range of high-quality soft drinks and purified water that meet the diverse needs of families, businesses and retailers. From vibrant flavours to pure hydration, our products are crafted with strict quality control and hygienic production standards. Discover how our trusted brands can refresh your day and delight your customers.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card service-card-${index}`} key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
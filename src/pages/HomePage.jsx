import React from "react";
import { ArrowRight } from "lucide-react";
import "../styles/HomePage.css";
import AnimatedServicesSection from "./AnimatedServicesSection";
import HeroSection from "./HeroSection";

const StatCounter = ({ number, label }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const duration = 2000;

  React.useEffect(() => {
    let observer;
    const targetNumber = parseInt(number.replace(/[^0-9]/g, ""), 10);
    const suffix = number.replace(/[0-9]/g, "");

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
  { number: "15+", label: "Unique Flavours" },
  { number: "3", label: "Premium Brands" },
  { number: "20+", label: "Years of Excellence" },
  { number: "100%", label: "Customer Satisfaction" },
];
  const partners = [
    { name: "Dhool", logo: "/assets/images/logo3.png" },
    { name: "Tizzo", logo: "/assets/images/logo1.png" },
    { name: "Andavar Plus", logo: "/assets/images/logo.png" },
    { name: "Aslee", logo: "/assets/images/logo4.png" },
  ];

  return (
    <div className="homepage">
      {/* ================= HERO SECTION ================= */}
      <HeroSection stats={stats} />

      {/* ================= ABOUT PREVIEW ================= */}
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
              <img
                src="/assets/images/logo.png"
                alt="Clinical research team meeting"
              />
            </div>
            <div className="about-text">
              <h2>Who We Are</h2>

              <p>
                We are a multi-brand beverage company offering a complete range
                of soft drinks and purified drinking water trusted by families
                and businesses. Our flagship brands
                <strong>Aslee, Tizzo</strong> and <strong>Dhool</strong> deliver
                a colourful variety of refreshing flavours including
                <strong>
                  Mango, Apple, Clear Lemon, Cloud Lemon, Orange, Grape, Milk
                  Paneer, Clear Paneer, Cola, Jeera, Pineapple, Red Berry
                </strong>{" "}
                and <strong>Lemon Salt Soda</strong>. Each drink is crafted with
                care to provide consistent taste, vibrant flavour and
                high-quality ingredients.
              </p>

              <p>
                Beyond soft drinks, we also produce premium packaged drinking
                water under
                <strong>Andavar Plus</strong> and <strong>Tizzo Water</strong>,
                available in <strong>300ml, 500ml, 1000ml, 2000ml</strong> and{" "}
                <strong>5000ml</strong> sizes. With advanced purification,
                hygienic production and strict quality control, we strive to
                deliver beverages that ensure purity, freshness and satisfaction
                for every occasion. Our mission is to bring safe, tasty and
                affordable refreshment to everyone we serve.
              </p>

              <a href="/about" className="about-link">
                More About Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

            {/* ================= PARTNERS ================= */}
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

      {/* ================= CTA ================= */}
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
            <h2>Ready to Stock Quality Beverages?</h2>
            <p>
              Join hundreds of retailers and businesses who trust us for premium soft drinks and 
              purified water. With 12+ refreshing flavours across three flagship brands and reliable 
              packaged drinking water options, we offer the variety your customers crave. Our commitment 
              to strict quality control, hygienic production and consistent taste ensures every product 
              meets the highest standards. Let's bring freshness and satisfaction to your shelves.
            </p>
            <a href="/contact" className="cta-button">
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
      {/* ================= SERVICES ================= */}
      <AnimatedServicesSection />



      {/* ================= COURSES ================= */}
      <section className="courses-section">
  <div className="courses-container">
    <div className="courses-content">

      <div className="courses-text">
        <h2>Why Partner With Us?</h2>
        <p>
          Become a part of one of the fastest-growing beverage networks. 
          We ensure unmatched product purity, fast delivery, strong margins, 
          and the trusted quality your customers expect.
        </p>
      </div>

      <div className="courses-cards">

        <div className="course-card">
          <h3>For Distributors & Dealers</h3>
          <p>
            Enjoy excellent profit margins, assured product availability, 
            marketing support, and fast-moving beverage categories like 
            water, soda, juice, and refreshing drinks.
          </p>
          <a href="/dealers/enquiry" className="course-link">
            Become a Dealer <ArrowRight size={18} />
          </a>
        </div>

        <div className="course-card">
          <h3>For Retail Stores</h3>
          <p>
            Get access to top-selling products with strong daily demand, 
            flexible restocking options, and quick doorstep delivery 
            for your convenience stores, supermarkets, and juice points.
          </p>
          <a href="/retailers" className="course-link">
            Start Retailing <ArrowRight size={18} />
          </a>
        </div>

        <div className="course-card">
          <h3>For Corporates & Events</h3>
          <p>
            Bulk supply of packaged drinking water and beverages with 
            custom branding, premium packaging options, and reliable 
            delivery for offices, events, hotels, and institutions.
          </p>
          <a href="/corporate" className="course-link">
            Bulk Enquiry <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;

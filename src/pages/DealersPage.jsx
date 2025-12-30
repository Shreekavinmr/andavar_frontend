import React, { useState } from "react";
import "../styles/DealersPage.css";
import HeroSection from "./HeroSection";

const DealersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    location: "",
    brands: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const stats = [
    { number: "200+", label: "Active Dealers" },
    { number: "14", label: "States Covered" },
    { number: "1M+", label: "Bottles Sold Daily" },
    { number: "100%", label: "Brand Support" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    try {
      const response = await fetch(`${BACKEND_URL}/api/dealers-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          secretKey: "andavarplus@dealer",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Your enquiry has been successfully submitted.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          businessName: "",
          location: "",
          brands: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const partners = [
    { name: "Dhool", logo: "/assets/images/logo3.png" },
    { name: "Tizzo", logo: "/assets/images/logo1.png" },
    { name: "Andavar Plus", logo: "/assets/images/logo.png" },
    { name: "Aslee", logo: "/assets/images/logo4.png" },
  ];

  return (
    <div className="dealers-page">
      {/* HERO SECTION */}
      <HeroSection stats={stats} />

      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="container">
          <h2>Become a Distributor of India’s Fast-Growing Beverage Brand</h2>
          <p>
            Join hands with one of India’s fastest-expanding beverage
            manufacturers. Our brands — Aslee, Tizzo, Dhool and Andavar Plus —
            are trusted for taste, quality, and consistency across thousands of
            retail outlets. As our distributor, you gain access to a high-demand
            product lineup, strong brand recall, and complete support to grow
            your territory effectively.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Partner With Us?</h2>
            <p>
              We offer unmatched support, strong brand visibility, and
              fast-moving products.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>High Profit Margins</h3>
              <p>
                Our fast-moving beverage range ensures quick stock rotation and
                strong returns for distributors in every region.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Trusted FMCG Brands</h3>
              <p>
                Our beverages are trusted across markets, making sales easier
                and faster.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Full Marketing Support</h3>
              <p>
                Dealer boards, promotional offers, retailer schemes, digital
                creatives and marketing assets — all included.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Efficient Supply Chain</h3>
              <p>
                Reliable and timely delivery ensures that your inventory never
                falls short.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Widest Product Portfolio</h3>
              <p>
                Soft drinks, flavoured beverages, soda & packaged drinking water
                — all under one roof.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Growing Market Demand</h3>
              <p>
                India’s beverage market is booming — now is the best time to
                grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY SECTION */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-header-small">
            <h2>Distributor Eligibility</h2>
          </div>

          <ul className="eligibility-list">
            <li>Valid business license (GST preferred)</li>
            <li>Basic warehouse or storage space</li>
            <li>Delivery vehicle or logistics arrangement</li>
            <li>Sound retailer network in your region</li>
            <li>Commitment to develop the assigned territory</li>
            <li>Interest in working long-term with our brands</li>
          </ul>
        </div>
      </section>

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
            <h3>Grow With a Fast-Expanding Beverage Brand</h3>
            <p>
              Join hands with Andavar Beverages and be part of a rapidly growing
              distribution network trusted for quality, consistency, and strong
              customer demand. From our refreshing soft drink brands — Aslee,
              Tizzo, and Dhool — to our premium Andavar Plus packaged drinking
              water, we offer a wide range of fast-moving products backed by
              reliable supply and long-term business support. Partner with us
              and expand your market with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="dealer-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Dealer / Distributor Enquiry Form</h2>
            <p>
              Submit your details below. Our team will contact you with the next
              steps and dealership requirements.
            </p>
          </div>

          <div className="dealer-form-wrapper">
            <form onSubmit={handleSubmit} className="dealer-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Business / Shop Name</label>
                <input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Interested Brands</label>
                <select
                  name="brands"
                  value={formData.brands}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Aslee">Aslee</option>
                  <option value="Tizzo">Tizzo</option>
                  <option value="Dhool">Dhool</option>
                  <option value="Andavar Plus Water">Andavar Plus Water</option>
                </select>
              </div>

              <div className="form-group textarea-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your business and interest"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>

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

export default DealersPage;

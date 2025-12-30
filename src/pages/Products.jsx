import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from "./HeroSection";
import '../styles/Products.css';

// Intersection Observer Hook
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
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

const brandData = [
  {
    id: 'aslee-200',
    brand: 'Aslee',
    segment: '200 ml Soft Drinks',
    description: 'Classic fruit-based drinks that your customers already love.',
    logo: '/assets/images/logo4.png',
    images: [
      '/assets/images/aslee_1.jpg?w=800&h=600&fit=crop',
    ],
    variants: [
      { name: 'Mango', size: '200 ml' },
      { name: 'Apple', size: '200 ml' },
    ],
  },
  {
    id: 'tizzo-200',
    brand: 'Tizzo',
    segment: '200/600 ml Soft Drinks',
    description: 'Playful flavours with a modern, youth-focused identity.',
    logo: '/assets/images/logo1.png', 
    images: [
      '/assets/images/tizzo_1.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_2.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_3.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_4.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_5.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_6.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_7.jpg?w=800&h=600&fit=crop',
    ],
    variants: [
      { name: 'Mango', size: '200 ml' },
      { name: 'Clear Lemon', size: '200 ml' },
      { name: 'Orange', size: '200 ml' },
      { name: 'Grape', size: '200 ml' },
      { name: 'Cloud Lemon', size: '200 ml' },
      { name: 'Milk Paneer', size: '200 ml' },
      { name: 'Clear Paneer', size: '200 ml' },
      { name: 'Pineapple', size: '200 ml' },
      { name: 'Cola', size: '200 ml' },
      { name: 'Jeera', size: '200 ml' },
      { name: 'Lemon Salt Soda', size: '200 ml' },
      { name: 'Redberry', size: '200 ml' },
      { name: 'Mango', size: '600 ml' },
      { name: 'Clear Lemon', size: '600 ml' },
      { name: 'Orange', size: '600 ml' },
      { name: 'Grape', size: '600 ml' },
    ],
  },
  {
    id: 'dhool-200',
    brand: 'Dhool',
    segment: '200/600 ml Soft Drinks',
    description: 'Bold, vibrant flavours for impulse and value buyers.',
    logo: '/assets/images/logo3.png',
    images: [
      '/assets/images/dhool_1.jpg?w=800&h=600&fit=crop',
      '/assets/images/dhool_2.jpg?w=800&h=600&fit=crop',
      '/assets/images/dhool_3.jpg?w=800&h=600&fit=crop',
      '/assets/images/dhool_4.jpg?w=800&h=600&fit=crop',
      '/assets/images/dhool_5.jpg?w=800&h=600&fit=crop',
    ],
    variants: [
      { name: 'Mango', size: '200 ml' },
      { name: 'Clear Lemon', size: '200 ml' },
      { name: 'Orange', size: '200 ml' },
      { name: 'Grape', size: '200 ml' },
      { name: 'Cloud Lemon', size: '200 ml' },
      { name: 'Milk Paneer', size: '200 ml' },
      { name: 'Clear Paneer', size: '200 ml' },
      { name: 'Pineapple', size: '200 ml' },
      { name: 'Cola', size: '200 ml' },
      { name: 'Jeera', size: '200 ml' },
      { name: 'Lemon Salt Soda', size: '200 ml' },
      { name: 'Redberry', size: '200 ml' },
      { name: 'Mango', size: '600 ml' },
      { name: 'Clear Lemon', size: '600 ml' },
      { name: 'Orange', size: '600 ml' },
      { name: 'Grape', size: '600 ml' },
    ],
  },
  {
    id: 'andavar-water',
    brand: 'Andavar Plus',
    segment: 'Packaged Drinking Water',
    description: 'Trusted hydration with crystal-clear, consistent quality.',
    logo: '/assets/images/logo.png',
    images: [
      '/assets/images/andavar_1.jpg?w=800&h=600&fit=crop',
      '/assets/images/andavar_2.jpg?w=800&h=600&fit=crop',
      '/assets/images/andavar_3.jpg?w=800&h=600&fit=crop',
    ],
    variants: [
      { name: '300 ml', size: '300 ml' },
      { name: '500 ml', size: '500 ml' },
      { name: '1000 ml', size: '1000 ml' },
      { name: '2000 ml', size: '2000 ml' },
      { name: '5000 ml', size: '5000 ml' },
    ],
  },
  {
    id: 'tizzo-water',
    brand: 'Tizzo',
    segment: 'Packaged Drinking Water',
    description: 'Trusted hydration with crystal-clear, consistent quality.',
    logo: '/assets/images/logo1.png',
    images: [
      '/assets/images/tizzo_water_1.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_water_2.jpg?w=800&h=600&fit=crop',
      '/assets/images/tizzo_water_3.jpg?w=800&h=600&fit=crop',
    ],
    variants: [
      { name: '300 ml', size: '300 ml' },
      { name: '500 ml', size: '500 ml' },
      { name: '1000 ml', size: '1000 ml' },
      { name: '2000 ml', size: '2000 ml' },
      { name: '5000 ml', size: '5000 ml' },
    ],
  },
];

// Image Gallery Component
const ImageGallery = ({ images, brandColor, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="gallery-container">
      <div className={`main-image-wrapper ${isMobile ? 'mobile' : ''}`}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Product ${idx + 1}`}
            className="slide-image"
            style={{
              opacity: idx === currentIndex ? 1 : 0,
              zIndex: idx === currentIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="image-overlay" />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className={`nav-button nav-button-left ${isMobile ? 'mobile' : ''}`}
              style={{ opacity: isTransitioning ? 0.5 : 1 }}
              aria-label="Previous image"
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className={`nav-button nav-button-right ${isMobile ? 'mobile' : ''}`}
              style={{ opacity: isTransitioning ? 0.5 : 1 }}
              aria-label="Next image"
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>

            <div className="dots-container">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  disabled={isTransitioning}
                  className="dot"
                  style={{
                    backgroundColor: idx === currentIndex ? brandColor : 'rgba(255,255,255,0.5)',
                    width: idx === currentIndex ? '24px' : '10px',
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Brand Section Component
const BrandSection = ({ brand, index, isMobile }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id={brand.id}
      ref={ref}
      className={`brand-section ${isVisible ? 'visible' : ''} ${index % 2 === 0 ? 'even' : 'odd'}`}
    >
      <div className="container">
        <div className={`brand-layout ${isMobile ? 'mobile' : ''}`}>
          <div className={`brand-info ${isMobile ? 'mobile' : ''}`}>
            <span className="brand-pill">{brand.segment}</span>
            <h2 className={`brand-title ${isMobile ? 'mobile' : ''}`}>{brand.brand}</h2>
            <p className="brand-description">{brand.description}</p>
            
            <div className="variants-info">
              <h3 className="variants-title">Available Variants ({brand.variants.length})</h3>
              <div className="variants-grid">
                {brand.variants.map((variant, idx) => (
                  <div key={idx} className="variant-card">
                    <div className="variant-size">{variant.size}</div>
                    <div className="variant-name">{variant.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="brand-gallery">
            <ImageGallery images={brand.images} brandColor={brand.color} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const ProductsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { number: "12+", label: "Unique Flavours" },
    { number: "3", label: "Premium Brands" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <HeroSection stats={stats} />

      {/* Brand Navigation */}
      <section id="brands-nav" className="brands-nav-section">
        <div className="container">
          <div className={`brands-nav ${isMobile ? 'mobile' : ''}`}>
            {brandData.map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.id}`}
                className="brand-chip"
              >
                <div className="brand-chip-logo-wrapper">
                  <img
                    src={brand.logo}
                    alt={brand.brand}
                    className="brand-chip-logo"
                  />
                </div>
                <div>
                  <div className="brand-chip-name">{brand.brand}</div>
                  <div className="brand-chip-segment">{brand.segment}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      {brandData.map((brand, index) => (
        <BrandSection key={brand.id} brand={brand} index={index} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default ProductsPage;
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from "./HeroSection";

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.galleryContainer}>
      <div style={{
        ...styles.mainImageWrapper,
        ...(isMobile && { height: '350px' })
      }}>
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          style={styles.mainImage}
        />
        <div style={styles.imageOverlay} />
        
        <button
          onClick={prevSlide}
          style={{
            ...styles.navButton, 
            ...styles.navButtonLeft,
            ...(isMobile && { width: '36px', height: '36px' })
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={isMobile ? 20 : 24} />
        </button>
        
        <button
          onClick={nextSlide}
          style={{
            ...styles.navButton, 
            ...styles.navButtonRight,
            ...(isMobile && { width: '36px', height: '36px' })
          }}
          aria-label="Next image"
        >
          <ChevronRight size={isMobile ? 20 : 24} />
        </button>

        <div style={styles.dotsContainer}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                ...styles.dot,
                backgroundColor: idx === currentIndex ? brandColor : 'rgba(255,255,255,0.5)',
              }}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
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
      style={{
        ...styles.brandSection,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        backgroundColor: index % 2 === 0 ? '#ffffff' : '#faf6f4',
      }}
    >
      <div style={styles.container}>
        <div style={{
          ...styles.brandLayout,
          ...(isMobile && { gridTemplateColumns: '1fr', gap: '32px' })
        }}>
          <div style={{
            ...styles.brandInfo,
            ...(isMobile && { position: 'static' })
          }}>
            <span style={{...styles.brandPill, backgroundColor: brand.color + '20', color: brand.color}}>
              {brand.segment}
            </span>
            <h2 style={{
              ...styles.brandTitle,
              ...(isMobile && { fontSize: '1.8rem' })
            }}>{brand.brand}</h2>
            <p style={styles.brandDescription}>{brand.description}</p>
            
            <div style={styles.variantsInfo}>
              <h3 style={styles.variantsTitle}>Available Variants ({brand.variants.length})</h3>
              <div style={styles.variantsGrid}>
                {brand.variants.map((variant, idx) => (
                  <div key={idx} style={styles.variantCard}>
                    <div style={styles.variantSize}>{variant.size}</div>
                    <div style={styles.variantName}>{variant.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.brandGallery}>
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
    <div style={styles.page}>
      {/* Hero Section */}
      <HeroSection stats={stats} />

      {/* Overall Product Banner */}
      {/* <section style={styles.overallBanner}>
        <div style={styles.container}>
          <div style={styles.bannerContent}>
            <img 
              src="/assets/images/all-products-banner.jpg" 
              alt="All Products" 
              style={styles.bannerImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div style={styles.bannerFallback}>
              <h2 style={{
                ...styles.bannerFallbackTitle,
                ...(isMobile && { fontSize: '1.8rem' })
              }}>Our Complete Product Range</h2>
              <p style={styles.bannerFallbackText}>Discover quality beverages across all our premium brands</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Brand Navigation */}
      <section id="brands-nav" style={styles.brandsNav}>
        <div style={styles.container}>
          <div style={{
            ...styles.brandsNavGrid,
            ...(isMobile && { gridTemplateColumns: '1fr' })
          }}>
            {brandData.map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.id}`}
                style={styles.brandChip}
              >
                <div style={styles.brandChipLogoWrapper}>
                  <img
                    src={brand.logo}
                    alt={brand.brand}
                    style={styles.brandChipLogo}
                  />
                </div>
                <div>
                  <div style={styles.brandChipName}>{brand.brand}</div>
                  <div style={styles.brandChipSegment}>{brand.segment}</div>
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

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1a2140',
    background: '#fff',
    overflowX: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  
  // Overall Banner
  overallBanner: {
    padding: '40px 0',
    background: '#fff',
  },
  bannerContent: {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
  bannerImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    minHeight: '300px',
    objectFit: 'cover',
  },
  bannerFallback: {
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    background: 'linear-gradient(135deg, #26306a 0%, #1e2755 100%)',
    color: '#fff',
    textAlign: 'center',
    minHeight: '300px',
  },
  bannerFallbackTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '16px',
  },
  bannerFallbackText: {
    fontSize: '1.2rem',
    opacity: 0.9,
  },
  
  // Hero
  hero: {
    position: 'relative',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #26306a 0%, #1e2755 100%)',
    padding: '80px 0',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(242, 109, 37, 0.1) 0%, transparent 50%)',
  },
  heroContent: {
    maxWidth: '700px',
    color: '#fff',
  },
  heroTag: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '999px',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: '3rem',
    lineHeight: 1.2,
    marginBottom: '16px',
    fontWeight: 700,
  },
  heroText: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '32px',
    lineHeight: 1.6,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '0.85rem',
    opacity: 0.8,
  },
  heroActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '999px',
    background: '#f26d25',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '15px',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '999px',
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '15px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  
  // Brand Nav
  brandsNav: {
    padding: '32px 0',
    background: '#f9f5f3',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },
  brandsNavGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  brandChipColor: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    flexShrink: 0,
  },
  brandChipName: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#26306a',
  },
  brandChipSegment: {
    fontSize: '0.85rem',
    color: '#6c759a',
  },
  
  // Brand Section
  brandSection: {
    padding: '80px 0',
    transition: 'all 0.7s ease',
  },
  brandLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.3fr',
    gap: '48px',
    alignItems: 'start',
  },
  brandInfo: {
    position: 'sticky',
    top: '100px',
  },
  brandPill: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    marginBottom: '16px',
  },
  brandTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#26306a',
    marginBottom: '12px',
  },
  brandDescription: {
    fontSize: '1.1rem',
    color: '#6c759a',
    lineHeight: 1.6,
    marginBottom: '32px',
  },
  variantsInfo: {
    marginTop: '32px',
  },
  variantsTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#26306a',
    marginBottom: '16px',
  },
  variantsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '12px',
  },
  variantCard: {
    padding: '12px',
    background: '#fff',
    borderRadius: '10px',
    border: '1px solid rgba(38, 48, 106, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  variantSize: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8a90a8',
    marginBottom: '4px',
  },
  variantName: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#1a2140',
  },
  
  // Gallery
  brandGallery: {
    width: '100%',
  },
  galleryContainer: {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
  },
  mainImageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    height: '500px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '16px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 2,
  },
  navButtonLeft: {
    left: '16px',
  },
  navButtonRight: {
    right: '16px',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 2,
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  thumbnailsWrapper: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '8px 0',
  },
  thumbnail: {
    width: '100px',
    height: '80px',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
    background: 'none',
    flexShrink: 0,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  moreThumbnails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '80px',
    borderRadius: '10px',
    background: 'rgba(38, 48, 106, 0.1)',
    color: '#26306a',
    fontSize: '0.9rem',
    fontWeight: 600,
    flexShrink: 0,
  },
  brandChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    background: '#fff',
    borderRadius: '12px',
    textDecoration: 'none',
    border: '2px solid rgba(38, 48, 106, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  brandChipLogoWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  brandChipLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  // CTA
  cta: {
    padding: '60px 0',
    background: 'linear-gradient(135deg, #26306a 0%, #1e2755 100%)',
    color: '#fff',
  },
  ctaContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '32px',
    flexWrap: 'wrap',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  ctaText: {
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '999px',
    background: '#f26d25',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
};

export default ProductsPage;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/HeroSection.css';

const HeroSection = ({ stats = [] }) => {

  // ✅ Full-width banner slides (change image paths to yours)
  const heroSlides = [
  {
    image: '/assets/images/poster_1.png',
    title: 'Pure Hydration, Pure Trust',
    subtitle: 'Premium Andavar packaged drinking water for every occasion.',
    titleColor: '#e5e5e5',
  },
  {
    image: '/assets/images/poster_2.png',
    title: 'The Dhool of Flavours',
    subtitle: 'Apple, Grape, Mango, Paneer, Clear Lemon – Refreshment redefined.',
    titleColor: '#e5e5e5',
  },
  {
    image: '/assets/images/poster_3.png',
    title: 'Flavours That Spark Joy',
    subtitle: 'Aslee & Tizzo favourites – Apple, Mango & Lemonade.',
    titleColor: '#e5e5e5',
  },
  {
    image: '/assets/images/poster_4.png',
    title: 'The Zest of Tizzo',
    subtitle: 'Fresh Club Lemonade and tangy Lemon Salt Soda for every moment.',
    titleColor: '#e5e5e5',
  },
  // {
  //   image: '/assets/images/poster_6.png',
  //   title: 'Taste the Zing of Every Flavour',
  //   subtitle: 'Orange, Jeera, Grape, Mango and more in Aslee & Tizzo.',
  // },
];


  const [currentHero, setCurrentHero] = React.useState(0);

  const goToNextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToHero = (index) => {
    setCurrentHero(index);
  };


  return (
    <section className="hero-slider">
      {heroSlides.map((slide, index) => {
        let slideClass = 'hero-slide';
        if (index === currentHero) {
          slideClass += ' active';
        } else if (index === (currentHero - 1 + heroSlides.length) % heroSlides.length) {
          slideClass += ' prev';
        } else if (index === (currentHero + 1) % heroSlides.length) {
          slideClass += ' next';
        }

        return (
          <div
            key={index}
            className={slideClass}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container hero-container">
              <div className="hero-content">
                <div className="hero-badge">Flavoured Drinks &amp; Beverages</div>

                <h1 style={{ color: slide.titleColor }}>{slide.title}</h1>
                <p>{slide.subtitle}</p>

                <div className="hero-buttons">
                  <a href="/products" className="button primary-button">
                    Explore Products
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* arrows for full banner */}
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={goToPrevHero}
        aria-label="Previous banner"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={goToNextHero}
        aria-label="Next banner"
      >
        ›
      </button>

      {/* dots */}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot ${index === currentHero ? 'active' : ''}`}
            onClick={() => goToHero(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
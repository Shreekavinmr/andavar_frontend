import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ stats = [] }) => {

  // ✅ Full-width banner slides (change image paths to yours)
  const heroSlides = [
  {
    image: '/assets/images/JUNE.jpg',
  },
  {
    image: '/assets/images/JAN.jpg',
  },
  {
    image: '/assets/images/OCT.jpg',
  },
  {
    image: '/assets/images/dec.jpg',
  },
  {
    image: '/assets/images/SEP.jpg',
  },
  {
    image: '/assets/images/JULY.jpg',
  },
  {
    image: '/assets/images/april.jpg',
  },
  {
    image: '/assets/images/NOV.jpg',
  },
  {
    image: '/assets/images/may2026.jpg',
  },
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
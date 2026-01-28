import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "International Onshore Offshore Safety Academy World",
      subtitle: "Fostering a culture of health, safety, environment, and security worldwide",
      bgColor: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      title: "Unparalleled Expertise",
      subtitle: "Health, Safety, Environment, and Security solutions for diverse environments",
      bgColor: "linear-gradient(135deg, #0c2461 0%, #1e3799 100%)"
    },
    {
      title: "Your Partner in HSE Manpower Solutions",
      subtitle: "Top-notch HSE professionals for your workforce needs",
      bgColor: "linear-gradient(135deg, #0a3d62 0%, #1e5f8b 100%)"
    },
    {
      title: "Empowering Your Success",
      subtitle: "Comprehensive procurement services to optimize your supply chain",
      bgColor: "linear-gradient(135deg, #079992 0%, #38ada9 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bgColor }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="welcome-tag">Welcome To</div>
              <h1 className="slide-title animate-fade-up">{slide.title}</h1>
              <p className="slide-subtitle animate-fade-up-delay">{slide.subtitle}</p>
              <div className="hero-buttons">
                <button className="btn-primary animate-slide-up">
                  <span className="btn-icon">📋</span>
                  View Courses
                </button>
                <button className="btn-secondary animate-slide-up-delay">
                  <span className="btn-icon">📞</span>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="carousel-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card animate-stat">
          <div className="stat-number">8+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card animate-stat-delay-1">
          <div className="stat-number">30,000+</div>
          <div className="stat-label">Trained Individuals</div>
        </div>
        <div className="stat-card animate-stat-delay-2">
          <div className="stat-number">48+</div>
          <div className="stat-label">Courses Offered</div>
        </div>
        <div className="stat-card animate-stat-delay-3">
          <div className="stat-number">6+</div>
          <div className="stat-label">Partners</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
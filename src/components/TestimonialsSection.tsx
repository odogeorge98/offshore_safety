import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Akintoye, Oluyemi Ayorinde",
      role: "Lecturer in Occupational Health and Safety",
      company: "University of Calabar, Nigeria",
      text: "The International Onshore Offshore Safety Academy stands as a beacon of excellence in the realm of occupational health and safety training. Its holistic approach, combining theoretical knowledge with practical applications, contributes significantly to the professional development and safety consciousness of individuals within diverse industries.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Oruk Egbai",
      role: "Sup Dean, Environmental Resources Management",
      company: "University of Calabar",
      text: "Training at ONSHORE and INTERNATIONAL ONSHORE OFFSHORE SAFETY ACADEMY for HSE levels 1, 2, & 3 was comprehensive, offering fundamental safety protocol knowledge. A rewarding experience despite the high training cost. Every segment exuded charisma, especially during hands-on sessions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      rating: 5
    },
    {
      id: 3,
      name: "Chima Olivia",
      role: "Contractor",
      company: "Oil & Gas Industry",
      text: "Their consultancy team demonstrated a deep understanding of the oil and gas industry's nuances. The collaborative partnership we've formed has significantly strengthened our emergency response planning and overall safety culture.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
      rating: 5
    },
    {
      id: 4,
      name: "Safety Wari",
      role: "Managing Director",
      company: "Oil & Gas Safety Consultant",
      text: "Competent Safety Wari, M/D INTERNATIONAL ONSHORE OFFSHORE SAFETY ACADEMY stood out. Addressing questions through practical activities and various safety equipment usage enhanced the impact significantly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      rating: 5
    },
    {
      id: 5,
      name: "Trainee",
      role: "Safety Professional",
      company: "Oil & Gas Sector",
      text: "The training covered firefighting (A, B, C, D, E), work at height, waste management, tank farm Safety operations, and more. These insights equip me to work competently as a safety professional, adhering to global best practices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title animate-fade-in">
            Hear What Our Trainees & Clients Say
          </h2>
          <p className="section-description">
            Trusted by industry professionals and organizations worldwide
          </p>
        </div>

        <div className="testimonial-slider">
          {/* Main Testimonial */}
          <div className="testimonial-main">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''} ${
                  index === (activeIndex - 1 + testimonials.length) % testimonials.length ? 'prev' : ''
                } ${
                  index === (activeIndex + 1) % testimonials.length ? 'next' : ''
                }`}
              >
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  
                  <p className="testimonial-text">
                    {testimonial.text}
                  </p>
                  
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <div className="image-border"></div>
                    </div>
                    
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button 
              className="control-btn prev-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <span className="control-icon">←</span>
            </button>
            
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <span className="control-icon">→</span>
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-grid-card animate-testimonial"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid-quote">"</div>
              
              <div className="grid-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="grid-star">⭐</span>
                ))}
              </div>
              
              <p className="grid-text">
                {testimonial.text.length > 150 
                  ? testimonial.text.substring(0, 150) + '...' 
                  : testimonial.text}
              </p>
              
              <div className="grid-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="grid-author-image"
                />
                <div className="grid-author-info">
                  <h5 className="grid-author-name">{testimonial.name}</h5>
                  <p className="grid-author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="testimonial-stats">
          <div className="stat-banner animate-stat-banner">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Course Completion</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React from 'react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: "👨‍🏫",
      title: "HSE Training",
      description: "International standard safety trainings with practical sessions",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      icon: "👥",
      title: "HSE Manpower Supply",
      description: "Top-notch HSE professionals for your workforce needs",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      icon: "📋",
      title: "Consultancy",
      description: "Expert guidance for oil and gas industry safety compliance",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w-800"
    },
    {
      id: 4,
      icon: "🛒",
      title: "Procurement",
      description: "Comprehensive procurement services for safety equipment",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800"
    },
    {
      id: 5,
      icon: "🏭",
      title: "Tank Farm Operations",
      description: "Specialized training and services for tank farm safety",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800"
    },
    {
      id: 6,
      icon: "🔬",
      title: "Technical Safety Studies",
      description: "Process safety engineering and risk assessment",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title animate-fade-in">
            We Offer Wide Range Of Services
          </h2>
          <p className="section-description">
            From Oil and Gas Consultancy to Basic Life Support (BLS), we offer international 
            standard safety trainings in Nigeria. With 8 years of experience, we've trained 
            over 30,000 individuals in 48+ courses.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card animate-service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                />
                <div className="service-overlay"></div>
                <div className="service-number">0{service.id}</div>
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <button className="service-btn">
                  Learn More
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
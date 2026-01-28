import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "🎯",
      title: "Customized Training Services",
      description: "Tailored training programs to meet specific client requirements and objectives."
    },
    {
      icon: "🏅",
      title: "Quality Management System",
      description: "Adherence to ISO 9001:2001 standards for consistent world-class education."
    },
    {
      icon: "📚",
      title: "Diverse Range of Courses",
      description: "Comprehensive courses covering every aspect of safety and security."
    },
    {
      icon: "👥",
      title: "Expert Team",
      description: "Skilled professionals with industry experience and expertise."
    },
    {
      icon: "🌍",
      title: "Global Standards",
      description: "International safety standards implementation and compliance."
    },
    {
      icon: "⚡",
      title: "Responsive Approach",
      description: "Quick adaptation to client needs and industry changes."
    }
  ];

  const stats = [
    { value: "8+", label: "Years Experience", icon: "📅" },
    { value: "30,000+", label: "Trained Individuals", icon: "👨‍🎓" },
    { value: "48+", label: "Courses Offered", icon: "📖" },
    { value: "6+", label: "Industry Partners", icon: "🤝" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title animate-fade-in">
            YOUR SAFETY TRAINING ALLY
          </h2>
          <p className="section-description">
            Welcome to the International Onshore Offshore Safety Academy World – your trusted partner in Health, Safety, Environment, and Security Training. We are a registered training company, renowned for our skilled, professional, and responsive approach.
          </p>
        </div>

        <div className="about-content">
          {/* Main Content */}
          <div className="about-main">
            <div className="about-text animate-fade-left">
              <h3 className="about-subtitle">
                <span className="highlight">Excellence</span> in Safety Training
              </h3>
              <p>
                With a solid reputation and patronage from reputable clients, we specialize in offering a comprehensive range of training services tailored to meet the unique needs of the oil and gas industry.
              </p>
              <p>
                At our academy, we prioritize safety and competence, providing a one-stop-shop for diverse training services. Our courses are designed to create a safe and competent operating environment, addressing the potential hazards of the oil and gas sector.
              </p>
              <p>
                We take pride in customizing training courses to meet the specific requirements of our clients, ensuring that the content aligns with their in-house objectives.
              </p>
            </div>

            <div className="about-image animate-fade-right">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800" 
                  alt="Safety Training" 
                  className="main-image"
                />
                <div className="image-badge">
                  <div className="badge-icon">🏆</div>
                  <div className="badge-text">ISO 45001 Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="stat-item animate-stat"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h3 className="features-title animate-fade-in">What Sets Us Apart</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="feature-card animate-feature"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon-container">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-hover-line"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision">
            <div className="mission-card animate-fade-left">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide world-class safety training and consultancy services that empower organizations to create safer work environments and comply with international standards.
              </p>
            </div>
            
            <div className="vision-card animate-fade-right">
              <div className="vision-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading global safety academy, recognized for excellence in training and commitment to fostering a culture of safety, health, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
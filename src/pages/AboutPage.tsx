// src/components/AboutPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, Users, Award, Globe, CheckCircle, Star, Zap, Target, 
  Clock, ArrowRight, TrendingUp, ChevronRight, Sparkles, Gem,
  Heart, Brain, Rocket, Crown, Eye, Layers, Flame, Waves, 
  CloudSnow, Navigation, Wind, Cpu, Umbrella, Droplets,
  Target as TargetIcon, BarChart, ShieldCheck, Play, Phone,
  Mail, MapPin, Calendar, Filter, Search, ExternalLink
} from 'lucide-react';
import './AboutPage.css';

// Import images - you'll need to add these to your project
import aboutHero from './img1.webp';
import aboutTeam from './img2.jpg';
import aboutTraining from './img3.webp';
import aboutFacility from './img4.webp';

import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.jpeg';
import logo6 from './logo6.png';
import logo7 from './logo7.jpeg';
import logo8 from './logo8.jpeg';

const AboutPage: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const partnersRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  // Courses data
  const courses = [
    {
      id: 1,
      name: "Basic Scaffolding Course (BASCO)",
      duration: "3 Days",
      level: "Beginner",
      icon: Layers,
      color: "#1c63b8"
    },
    {
      id: 2,
      name: "Offshore Emergency Response Team Member (OERTM)",
      duration: "5 Days",
      level: "Advanced",
      icon: ShieldCheck,
      color: "#ff5e15"
    },
    {
      id: 3,
      name: "Advanced Firefighting (AFF)",
      duration: "4 Days",
      level: "Advanced",
      icon: Flame,
      color: "#ff3d00"
    },
    {
      id: 4,
      name: "Helicopter Underwater Escape Training with EBS (HUET-EBS)",
      duration: "2 Days",
      level: "Intermediate",
      icon: Waves,
      color: "#2196f3"
    },
    {
      id: 5,
      name: "Basic Offshore Safety Induction and Emergency Training (BOSIET)",
      duration: "3 Days",
      level: "Beginner",
      icon: CloudSnow,
      color: "#1c63b8"
    },
    {
      id: 6,
      name: "Crane Operator Course (COC)",
      duration: "5 Days",
      level: "Expert",
      icon: Navigation,
      color: "#ff5e15"
    },
    {
      id: 7,
      name: "Proficiency in Fast Rescue Boats (PFRB)",
      duration: "4 Days",
      level: "Advanced",
      icon: Wind,
      color: "#2196f3"
    },
    {
      id: 8,
      name: "Forklift Operator Course (FOC)",
      duration: "3 Days",
      level: "Intermediate",
      icon: Cpu,
      color: "#1c63b8"
    },
    {
      id: 9,
      name: "Proficiency in Survival Craft and Rescue Boats (PSCRB)",
      duration: "4 Days",
      level: "Advanced",
      icon: Umbrella,
      color: "#ff5e15"
    },
    {
      id: 10,
      name: "Tank Farm Operation",
      duration: "5 Days",
      level: "Expert",
      icon: Droplets,
      color: "#ff3d00"
    }
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "Customized Training Services",
      description: "Our comprehensive training services are tailored to meet the specific requirements of our clients, ensuring a focus on essential content and learning outcomes aligned with in-house objectives.",
      icon: TargetIcon,
      color: "#ff5e15"
    },
    {
      id: 2,
      title: "Quality Management System (QMS)",
      description: "Operating in accordance with ISO 9001:2001 standards, we guarantee that every training session adheres to the highest quality standards, delivering world-class education consistently.",
      icon: Award,
      color: "#1c63b8"
    },
    {
      id: 3,
      title: "Diverse Range of Courses",
      description: "From Basic Scaffolding to Cyber Security, our extensive list of courses covers every aspect of safety and security, preparing individuals for challenges across the upstream, midstream, and downstream sectors.",
      icon: Globe,
      color: "#2196f3"
    }
  ];

  // Partners data
  const partners = [
    { id: 1, name: "ExxonMobil", logo: logo1 },
    { id: 2, name: "Shell", logo: logo2 },
    { id: 3, name: "Chevron", logo: logo3 },
    { id: 4, name: "BP", logo: logo4 },
    { id: 5, name: "Total", logo: logo5 },
    { id: 6, name: "Schlumberger", logo: logo6 },
    { id: 7, name: "Halliburton", logo: logo7 },
    { id: 8, name: "Baker Hughes", logo: logo8 }
  ];

  // Stats data
  const stats = [
    { id: 1, number: "8+", label: "Years of Excellence", icon: Clock },
    { id: 2, number: "30,000+", label: "Professionals Trained", icon: Users },
    { id: 3, number: "48+", label: "Certified Courses", icon: Award },
    { id: 4, number: "6+", label: "Global Partners", icon: Globe }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll for partners
  useEffect(() => {
    const partnersTrack = partnersRef.current;
    if (!partnersTrack) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= partnersTrack.scrollWidth / 2) {
        scrollPosition = 0;
      }
      partnersTrack.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="bg-gradient"></div>
          <div className="bg-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                '--i': i,
                '--total': 20,
                '--color': i % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-orange)'
              } as React.CSSProperties}></div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <ChevronRight className="breadcrumb-arrow" />
                  <span className="breadcrumb-item active">About Us</span>
                </div>
                
                <div className="hero-badge">
                  <Sparkles className="badge-icon" />
                  <span>ABOUT US</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">Your Safety Training</span>
                  <span className="title-highlight">Ally</span>
                </h1>
                
                <p className="hero-description">
                  Welcome to the International Onshore Offshore Safety Academy World – your trusted partner in Health, Safety, Environment, and Security Training.
                </p>
                
                <div className="hero-stats">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.id} className="stat-item">
                        <div className="stat-icon">
                          <Icon className="icon" />
                        </div>
                        <div className="stat-content">
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="hero-image">
                <div className="image-container">
                  <div className="image-frame">
                    <img src={aboutHero} alt="Safety Training" className="hero-img" />
                    <div className="image-overlay">
                      <div className="overlay-badge">
                        <Shield className="badge-icon" />
                        <span>ISO 45001 Certified</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="image-decoration decor-1"></div>
                  <div className="image-decoration decor-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="section-content">
            <div className="welcome-text">
              <div className="text-header">
                <div className="section-badge">
                  <Sparkles className="badge-icon" />
                  <span>WHO WE ARE</span>
                </div>
                
                <h2 className="section-title">
                  <span className="title-main">Welcome to the International Onshore Offshore Safety Academy World</span>
                  <span className="title-sub">Your Trusted Partner in HSE Training</span>
                </h2>
              </div>
              
              <div className="welcome-paragraphs">
                <p className="lead-paragraph">
                  We are a registered training company, renowned for our skilled, professional, and responsive approach. With a solid reputation and patronage from reputable clients, we specialize in offering a comprehensive range of training services tailored to meet the unique needs of the oil and gas industry.
                </p>
                
                <p>
                  At our academy, we prioritize safety and competence, providing a one-stop-shop for diverse training services. Our courses are designed to create a safe and competent operating environment, addressing the potential hazards of the oil and gas sector.
                </p>
                
                <p>
                  We take pride in customizing training courses to meet the specific requirements of our clients, ensuring that the content aligns with their in-house objectives. Operating in accordance with a Quality Management System (QMS), we guarantee world-class training experiences for all our trainees.
                </p>
              </div>
              
              <div className="welcome-features">
                <div className="feature-card">
                  <div className="feature-icon">
                    <Target className="icon" />
                  </div>
                  <h4>Industry Expertise</h4>
                  <p>Over 8 years of specialized training experience</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <Users className="icon" />
                  </div>
                  <h4>Professional Team</h4>
                  <p>Certified trainers with industry experience</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <Award className="icon" />
                  </div>
                  <h4>Certified Programs</h4>
                  <p>Internationally recognized certifications</p>
                </div>
              </div>
            </div>
            
            <div className="welcome-images">
              <div className="image-grid">
                <div className="image-item main-image">
                  <img src={aboutTeam} alt="Our Team" />
                  <div className="image-caption">
                    <h4>Expert Training Team</h4>
                    <p>Industry professionals with decades of experience</p>
                  </div>
                </div>
                
                <div className="image-item side-image">
                  <img src={aboutTraining} alt="Training Session" />
                  <div className="image-badge">
                    <Play className="badge-icon" />
                    <span>Practical Training</span>
                  </div>
                </div>
                
                <div className="image-item side-image">
                  <img src={aboutFacility} alt="Training Facility" />
                  <div className="image-badge">
                    <Shield className="badge-icon" />
                    <span>Modern Facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section" ref={missionRef}>
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <div className="section-badge">
                <Sparkles className="badge-icon" />
                <span>OUR MISSION</span>
              </div>
              
              <h2 className="section-title">Driving Safety Excellence Forward</h2>
              
              <div className="mission-statement">
                <div className="statement-icon">
                  <Target className="icon" />
                </div>
                <p className="statement-text">
                  Our mission is clear – to empower individuals and organizations with the knowledge and skills necessary to navigate the complexities of the oil and gas sector safely. We strive to be the catalyst for a cultural shift towards safety excellence, fostering an environment where every professional is equipped to mitigate risks effectively.
                </p>
              </div>
              
              <div className="mission-points">
                <div className="point-item">
                  <CheckCircle className="point-icon" />
                  <span>Empower through education</span>
                </div>
                <div className="point-item">
                  <CheckCircle className="point-icon" />
                  <span>Foster safety culture</span>
                </div>
                <div className="point-item">
                  <CheckCircle className="point-icon" />
                  <span>Mitigate operational risks</span>
                </div>
                <div className="point-item">
                  <CheckCircle className="point-icon" />
                  <span>Drive industry standards</span>
                </div>
              </div>
              
              <button className="btn-primary">
                <span>Learn About Our Approach</span>
                <ArrowRight className="btn-icon" />
              </button>
            </div>
            
            <div className="mission-visual">
              <div className="visual-container">
                <div className="visual-circle">
                  <div className="circle-inner">
                    <Shield className="circle-icon" />
                  </div>
                  <div className="circle-ring ring-1"></div>
                  <div className="circle-ring ring-2"></div>
                  <div className="circle-ring ring-3"></div>
                </div>
                
                <div className="floating-element element-1">
                  <Gem className="element-icon" />
                  <span>Excellence</span>
                </div>
                
                <div className="floating-element element-2">
                  <Award className="element-icon" />
                  <span>Quality</span>
                </div>
                
                <div className="floating-element element-3">
                  <Heart className="element-icon" />
                  <span>Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>OUR COURSES</span>
            </div>
            <h2 className="section-title">Comprehensive Training Programs</h2>
            <p className="section-subtitle">
              We focus on delivering content that aligns with in-house objectives, ensuring a safe and competent workforce.
            </p>
          </div>
          
          <div className="courses-grid">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div 
                  key={course.id}
                  className={`course-item ${activeCourse === course.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCourse(course.id)}
                  onMouseLeave={() => setActiveCourse(0)}
                >
                  <div className="course-header">
                    <div className="course-number">0{course.id}</div>
                    <div className="course-level" style={{ background: course.color }}>
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="course-icon">
                    <Icon className="icon" style={{ color: course.color }} />
                  </div>
                  
                  <h3 className="course-title">{course.name}</h3>
                  
                  <div className="course-footer">
                    <div className="course-duration">
                      <Clock className="duration-icon" />
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="course-action">
                      <span>View Details</span>
                      <ArrowRight className="action-icon" />
                    </div>
                  </div>
                  
                  <div className="course-hover" style={{ background: course.color }}></div>
                </div>
              );
            })}
          </div>
          
          <div className="section-footer">
            <button className="btn-primary">
              <span>View All Courses</span>
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>WHAT SETS US APART</span>
            </div>
            <h2 className="section-title">Our Competitive Advantages</h2>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(0)}
                >
                  <div className="feature-header">
                    <div className="feature-number">0{feature.id}</div>
                    <div className="feature-icon">
                      <Icon className="icon" style={{ color: feature.color }} />
                    </div>
                  </div>
                  
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  
                  <div className="feature-glow" style={{ background: feature.color }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>OUR PARTNERS/CLIENTS</span>
            </div>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">
              We are proud to partner with global industry leaders who trust us with their safety training needs.
            </p>
          </div>
          
          <div className="partners-container">
            <div className="partners-track" ref={partnersRef}>
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="partner-logo">
                  <div className="logo-container">
                    <div className="logo-bg"></div>
                    <div className="logo-content">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="partner-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="logo-overlay">
                      <span>{partner.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-badge">
                <Shield className="badge-icon" />
                <span>GET STARTED TODAY</span>
              </div>
              
              <h2 className="cta-title">Ready to Elevate Your Safety Standards?</h2>
              
              <p className="cta-description">
                Join thousands of professionals who have trusted us with their safety training needs. 
                Contact us today to discuss your requirements and start your journey towards safety excellence.
              </p>
              
              <div className="cta-info">
                <div className="info-item">
                  <Phone className="info-icon" />
                  <span>+234 903 412 5744</span>
                </div>
                
                <div className="info-item">
                  <Mail className="info-icon" />
                  <span>internationalonshoreoffshore@gmail.com</span>
                </div>
                
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              
              <div className="cta-actions">
                <button className="btn-primary">
                  <span>Contact Us Now</span>
                  <ArrowRight className="btn-icon" />
                </button>
                
                <button className="btn-outline">
                  <span>Register for Courses</span>
                  <Calendar className="btn-icon" />
                </button>
              </div>
            </div>
            
            <div className="cta-visual">
              <div className="visual-animation">
                <div className="animated-shape shape-1"></div>
                <div className="animated-shape shape-2"></div>
                <div className="animated-shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <button 
        className={`back-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowRight className="top-icon" />
      </button>
    </div>
  );
};

export default AboutPage;
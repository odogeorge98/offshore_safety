import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Shield, Users, Award, Globe, 
  CheckCircle, Star, Zap, Target, Clock, ArrowRight, ExternalLink, 
  TrendingUp, Download, Search, Filter, Calendar, MapPin, Phone, Mail, 
  BarChart, Sparkles, Gem, Cpu, Cloud, Battery, ShieldCheck, 
  Brain, Target as TargetIcon, Rocket, Crown, Eye, Heart, Layers,
  CloudLightning, Waves, Navigation, Wind, CloudSnow, Thermometer,
  Activity, Zap as ZapIcon, Flame, Droplets, Umbrella
} from 'lucide-react';
import './HomePage.css';
import img1 from './img1.webp';
import img2 from './img2.jpg';
import img3 from './img3.webp';
import img4 from './img4.webp';

import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.jpeg';
import logo6 from './logo6.png';
import logo7 from './logo7.jpeg';
import logo8 from './logo8.jpeg';
import logo9 from './logo9.jpeg';

const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeGallery, setActiveGallery] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hero Carousel Slides
  const slides = [
    {
      title: "Global Leaders in Safety Excellence",
      subtitle: "Welcome To International Onshore Offshore Safety Academy World",
      description: "We are committed to fostering a culture of health, safety, environment, and security worldwide. Experience world-class training with cutting-edge technology.",
      cta: "Start Your Journey",
      bgColor: "linear-gradient(135deg, #1c63b8 0%, #0d47a1 100%)",
      image: img1,
      badge: "World Class Safety Training",
      icon: Shield,
      particles: "blue",
      accentColor: "#1c63b8"
    },
    {
      title: "Unparalleled HSE Expertise",
      subtitle: "Industry-Leading Safety Solutions",
      description: "From onshore to offshore, we offer a wide range of Health, Safety, Environment, and Security solutions. Our expert team is dedicated to mitigating risks and ensuring compliance.",
      cta: "Explore Our Expertise",
      bgColor: "linear-gradient(135deg, #1c63b8 0%, #283593 100%)",
      image: img2,
      badge: "Industry Leaders",
      icon: Award,
      particles: "orange",
      accentColor: "#ff5e15"
    },
    {
      title: "Your Strategic HSE Partner",
      subtitle: "Comprehensive Manpower Solutions",
      description: "We specialize in providing top-notch Health, Safety, and Environment (HSE) professionals. Let us be your trusted partner in ensuring a safe and secure work environment.",
      cta: "Partner With Us",
      bgColor: "linear-gradient(135deg, #1c63b8 0%, #283593 100%)",
      image: img3,
      badge: "Trusted Partner",
      icon: Users,
      particles: "blue",
      accentColor: "#1c63b8"
    }
  ];

  // Gallery Images
  const galleryImages = [
    {
      url: img2,
      title: "Survival Training",
      category: "Practical Sessions",
      icon: Shield
    },
    {
      url: img4,
      title: "Charity Event",
      category: "Community Outreach",
      icon: Heart
    },
    {
      url: img1,
      title: "Fire Safety",
      category: "Emergency Training",
      icon: Flame
    },
    {
      url: img3,
      title: "Team Training",
      category: "Group Sessions",
      icon: Users
    }
  ];

  // Partners Logos
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

  // Enhanced Courses List
  const courses = [
    {
      title: "Basic Scaffolding Course (BASCO)",
      icon: Layers,
      duration: "3 Days",
      level: "Beginner",
      color: "#1c63b8"
    },
    {
      title: "Offshore Emergency Response Team Member (OERTM)",
      icon: ShieldCheck,
      duration: "5 Days",
      level: "Advanced",
      color: "#ff5e15"
    },
    {
      title: "Advanced Firefighting (AFF)",
      icon: Flame,
      duration: "4 Days",
      level: "Advanced",
      color: "#ff3d00"
    },
    {
      title: "Helicopter Underwater Escape Training (HUET-EBS)",
      icon: Waves,
      duration: "2 Days",
      level: "Intermediate",
      color: "#2196f3"
    },
    {
      title: "Basic Offshore Safety Induction (BOSIET)",
      icon: CloudSnow,
      duration: "3 Days",
      level: "Beginner",
      color: "#1c63b8"
    },
    {
      title: "Crane Operator Course (COC)",
      icon: Navigation,
      duration: "5 Days",
      level: "Expert",
      color: "#ff5e15"
    },
    {
      title: "Proficiency in Fast Rescue Boats (PFRB)",
      icon: Wind,
      duration: "4 Days",
      level: "Advanced",
      color: "#2196f3"
    },
    {
      title: "Forklift Operator Course (FOC)",
      icon: Cpu,
      duration: "3 Days",
      level: "Intermediate",
      color: "#1c63b8"
    },
    {
      title: "Proficiency in Survival Craft (PSCRB)",
      icon: Umbrella,
      duration: "4 Days",
      level: "Advanced",
      color: "#ff5e15"
    },
    {
      title: "Tank Farm Operation",
      icon: Droplets,
      duration: "5 Days",
      level: "Expert",
      color: "#ff3d00"
    }
  ];

  // Enhanced Testimonials
  const testimonials = [
    {
      text: "The training was exceptional. The instructors were knowledgeable and practical examples were very helpful for our offshore operations.",
      author: "John D., Safety Manager",
      role: "Oil & Gas Company",
      rating: 5,
      avatar: "/avatar1.jpg"
    },
    {
      text: "World-class facilities and expert trainers. Our team gained valuable skills that directly improved our safety performance.",
      author: "Sarah M., Operations Director",
      role: "Energy Corporation",
      rating: 5,
      avatar: "/avatar2.jpg"
    },
    {
      text: "Customized training that met our specific needs. The academy's approach to practical learning is outstanding.",
      author: "Michael T., HSE Coordinator",
      role: "Offshore Services",
      rating: 5,
      avatar: "/avatar3.jpg"
    }
  ];

  // Floating particles in background
  const particles = Array(30).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Check if scrolled past hero section
      if (winScroll > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get window height for responsive hero section
  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    
    updateWindowHeight();
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <div className="home-page" ref={containerRef}>
      {/* Animated Background */}
      <div className="animated-background">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              background: `radial-gradient(circle, var(--primary-blue) 0%, transparent 70%)`
            }}
          />
        ))}
        
        {/* Animated Grid */}
        <div className="animated-grid">
          <div className="grid-line vertical"></div>
          <div className="grid-line horizontal"></div>
          <div className="grid-line diagonal-1"></div>
          <div className="grid-line diagonal-2"></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Hero Carousel - Simplified version */}
      <section className="hero-carousel" style={{ height: windowHeight }}>
        <div className="carousel-container" ref={carouselRef}>
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            const isActive = index === activeSlide;
            
            return (
              <div
                key={index}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                style={{ 
                  background: slide.bgColor,
                  '--accent-color': slide.accentColor 
                } as React.CSSProperties}
              >
                {/* Animated Background Elements */}
                <div className="slide-background">
                  <div className="background-gradient"></div>
                  <div className="background-overlay"></div>
                  
                  {/* Dynamic Particles */}
                  <div className={`particles-container particles-${slide.particles}`}>
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i} 
                        className="particle"
                        style={{
                          '--i': i,
                          '--total': 15
                        } as React.CSSProperties}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Animated Orbs */}
                  <div className="orb orb-1"></div>
                  <div className="orb orb-2"></div>
                  <div className="orb orb-3"></div>
                </div>
                
                <div className="slide-content">
                  {/* Text content */}
                  <div className="slide-text">
                    <div className="text-container">
                      <div className="slide-badge">
                        <div className="badge-content">
                          <Icon className="badge-icon" />
                          <span>{slide.badge}</span>
                          <Sparkles className="badge-sparkle" />
                        </div>
                        <div className="badge-glow"></div>
                      </div>
                      
                      <div className="title-wrapper">
                        <h1 className="slide-title">
                          <span className="title-line">{slide.title}</span>
                        </h1>
                        <div className="title-underline"></div>
                      </div>
                      
                      <h2 className="slide-subtitle">{slide.subtitle}</h2>
                      
                      <p className="slide-description">{slide.description}</p>
                      
                      <div className="slide-actions">
                        <button className="btn-primary">
                          <span className="btn-text">{slide.cta}</span>
                          <div className="btn-icon-container">
                            <ArrowRight className="btn-icon" />
                          </div>
                        </button>
                        
                        <button className="btn-secondary">
                          <span className="btn-text">Learn More</span>
                          <Play className="play-icon" />
                        </button>
                      </div>
                      
                      <div className="slide-stats">
                        <div className="stat-item">
                          <div className="stat-number">8+</div>
                          <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">30,000+</div>
                          <div className="stat-label">Professionals Trained</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">48+</div>
                          <div className="stat-label">Certified Courses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="slide-image">
                    <div className="image-container">
                      <div className="image-frame">
                        <div className="image-glow"></div>
                        <div className="image-reflection"></div>
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className={`slide-image-content ${isActive ? 'loaded' : ''}`}
                        />
                        
                        {/* Image Overlay Elements */}
                        <div className="image-overlay">
                          <div className="overlay-shine"></div>
                          <div className="overlay-grid"></div>
                        </div>
                        
                        {/* Floating Badges */}
                        <div className="floating-badge badge-1">
                          <Gem className="badge-icon" />
                          <span>ISO Certified</span>
                        </div>
                        <div className="floating-badge badge-2">
                          <Award className="badge-icon" />
                          <span>Global Standard</span>
                        </div>
                      </div>
                      
                      {/* Image Decorations */}
                      <div className="image-decoration decor-1">
                        <div className="decor-line"></div>
                        <div className="decor-dot"></div>
                      </div>
                      <div className="image-decoration decor-2">
                        <div className="decor-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide Indicator */}
                <div className="slide-indicator">
                  <div className="indicator-number">0{index + 1}</div>
                  <div className="indicator-line"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="control-btn prev" onClick={prevSlide}>
            <div className="control-bg"></div>
            <ChevronLeft className="control-icon" />
          </button>
          
          <div className="slide-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => {
                  setActiveSlide(index);
                  setIsPlaying(false);
                  setTimeout(() => setIsPlaying(true), 10000);
                }}
              >
                <div className="dot-bg"></div>
                <div className="dot-pulse"></div>
              </button>
            ))}
          </div>
          
          <button className="control-btn next" onClick={nextSlide}>
            <div className="control-bg"></div>
            <ChevronRight className="control-icon" />
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line">
            <div className="scroll-progress-line"></div>
          </div>
          <div className="scroll-text">SCROLL</div>
        </div>
      </section>

      {/* Rest of the components remain the same */}
      {/* Stats Showcase */}
      <section className="section stats-showcase">
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: Clock, number: "8+", label: "Years Experience", trend: "+15%", color: "#ff5e15" },
              { icon: Users, number: "30K+", label: "Professionals Trained", trend: "+25%", color: "#1c63b8" },
              { icon: Layers, number: "48+", label: "Certified Courses", trend: "+8%", color: "#ff5e15" },
              { icon: Globe, number: "6+", label: "Global Partners", trend: "+12%", color: "#1c63b8" }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-glow" style={{ background: stat.color }}></div>
                <div className="stat-icon">
                  <div className="icon-bg" style={{ background: stat.color }}></div>
                  <stat.icon className="icon" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-trend">
                    <TrendingUp className="trend-icon" />
                    <span>{stat.trend} Growth</span>
                  </div>
                </div>
                <div className="stat-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section who-we-are">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="section-title">
              <span className="title-text">Your Safety Training Ally</span>
              <span className="title-highlight">Excellence in HSE Training</span>
            </h2>
            <p className="section-subtitle">
              We are a registered training company, renowned for our skilled, professional, 
              and responsive approach to safety education worldwide.
            </p>
          </div>
          
          <div className="content-grid">
            <div className="content-text">
              <div className="text-content">
                <div className="content-badge">
                  <Zap className="badge-icon" />
                  <h3>Welcome to International Onshore Offshore Safety Academy</h3>
                </div>
                
                <div className="content-paragraphs">
                  <p className="lead-text">
                    With a solid reputation and patronage from reputable clients, we specialize 
                    in offering a comprehensive range of training services tailored to meet the 
                    unique needs of the oil and gas industry.
                  </p>
                  
                  <p className="content-description">
                    At our academy, we prioritize safety and competence, providing a one-stop-shop 
                    for diverse training services. Our courses are designed to create a safe and 
                    competent operating environment, addressing the potential hazards of the oil 
                    and gas sector.
                  </p>
                </div>
                
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-bg"></div>
                      <Target className="icon" />
                    </div>
                    <div className="feature-content">
                      <h4>Expert Trainers</h4>
                      <p>Industry veterans with decades of practical experience</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-bg"></div>
                      <Award className="icon" />
                    </div>
                    <div className="feature-content">
                      <h4>Certified Programs</h4>
                      <p>Internationally recognized certifications and accreditations</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-bg"></div>
                      <Shield className="icon" />
                    </div>
                    <div className="feature-content">
                      <h4>Safety First</h4>
                      <p>Comprehensive safety protocols and modern equipment</p>
                    </div>
                  </div>
                </div>
                
                <div className="content-actions">
                  <button className="btn-primary">
                    <span>Learn More About Us</span>
                    <ArrowRight className="btn-icon" />
                  </button>
                  
                  <button className="btn-outline">
                    <span>Contact Our Team</span>
                    <Phone className="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="content-image">
              <div className="image-wrapper">
                <div className="main-image">
                  <div className="image-frame">
                    <img src={img1} alt="Safety Training" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h4>State-of-the-Art Facilities</h4>
                        <p>Modern training equipment and simulation technology</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-cards">
                  <div className="floating-card card-1">
                    <div className="card-content">
                      <Award className="card-icon" />
                      <div className="card-stats">
                        <div className="stat-number">30,000+</div>
                        <div className="stat-label">Professionals Certified</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="floating-card card-2">
                    <div className="card-content">
                      <BarChart className="card-icon" />
                      <div className="card-stats">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Success Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="floating-card card-3">
                    <div className="card-content">
                      <Crown className="card-icon" />
                      <div className="card-stats">
                        <div className="stat-number">#1</div>
                        <div className="stat-label">Industry Ranking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">Comprehensive Safety Solutions</h2>
            <p className="section-subtitle">
              From Oil and Gas Consultancy to Basic Life Support, we offer international 
              standard safety trainings with 8 years of excellence.
            </p>
          </div>
          
          <div className="services-grid">
            {[
              {
                icon: Globe,
                title: "Oil & Gas Consultancy",
                description: "Expert consultancy for upstream, midstream, and downstream sectors with global standards.",
                features: ["Risk Assessment", "Compliance Audits", "Safety Management"],
                color: "#1c63b8"
              },
              {
                icon: Shield,
                title: "Safety Training",
                description: "International standard safety trainings with state-of-the-art facilities and expert instructors.",
                features: ["Practical Simulations", "Expert Instructors", "Certification"],
                color: "#ff5e15"
              },
              {
                icon: Users,
                title: "HSE Manpower Solutions",
                description: "Providing top-notch HSE professionals tailored to your organizational needs.",
                features: ["Staffing Solutions", "Training Programs", "Consultation"],
                color: "#2196f3"
              },
              {
                icon: TrendingUp,
                title: "Efficient Procurement",
                description: "Strategic procurement services to optimize your supply chain and drive success.",
                features: ["Supply Chain", "Cost Optimization", "Vendor Management"],
                color: "#1c63b8"
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-number">0{index + 1}</div>
                  <div className="service-icon">
                    <div className="icon-bg" style={{ background: service.color }}></div>
                    <service.icon className="icon" />
                  </div>
                </div>
                
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <button className="service-link">
                  <span>Explore Service</span>
                  <ArrowRight className="link-icon" />
                </button>
                
                <div className="service-glow" style={{ background: service.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>OUR COURSES</span>
            </div>
            <h2 className="section-title">Professional Safety Training Programs</h2>
            <p className="section-subtitle">
              We focus on delivering content that aligns with in-house objectives, ensuring a safe and competent workforce.
            </p>
          </div>
          
          <div className="courses-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={index} className="course-card">
                  <div className="course-header">
                    <div className="course-number">0{index + 1}</div>
                    <div className="course-level">{course.level}</div>
                  </div>
                  
                  <div className="course-icon">
                    <Icon className="icon" style={{ color: course.color }} />
                  </div>
                  
                  <h3>{course.title}</h3>
                  <p>Comprehensive training program designed for maximum safety and efficiency in operations.</p>
                  
                  <div className="course-footer">
                    <div className="course-duration">
                      <Clock className="duration-icon" />
                      <span>{course.duration}</span>
                    </div>
                    
                    <button className="course-btn">
                      <span>Learn More</span>
                      <ArrowRight className="btn-icon" />
                    </button>
                  </div>
                  
                  <div className="course-glow" style={{ background: course.color }}></div>
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

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">Our Competitive Advantages</h2>
          </div>
          
          <div className="features-grid">
            {[
              {
                number: "01",
                icon: TargetIcon,
                title: "Customized Training Services",
                description: "Tailored training programs meeting specific client requirements and learning outcomes.",
                color: "#ff5e15"
              },
              {
                number: "02",
                icon: Award,
                title: "Quality Management System",
                description: "ISO 9001:2001 certified, ensuring highest quality standards in every session.",
                color: "#1c63b8"
              },
              {
                number: "03",
                icon: Globe,
                title: "Diverse Course Portfolio",
                description: "Extensive range covering all aspects of safety and security across sectors.",
                color: "#2196f3"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-header">
                  <div className="feature-number">{feature.number}</div>
                  <div className="feature-icon">
                    <feature.icon className="icon" style={{ color: feature.color }} />
                  </div>
                </div>
                
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                
                <div className="feature-glow" style={{ background: feature.color }}></div>
                <div className="feature-pattern"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Verification */}
      <section className="section certificate-section">
        <div className="container">
          <div className="certificate-card">
            <div className="certificate-content">
              <div className="certificate-badge">
                <ShieldCheck className="badge-icon" />
                <span>Verified & Trusted</span>
              </div>
              
              <h2>Certificate Verification</h2>
              
              <div className="certificate-description">
                <p>
                  We understand the paramount importance of trust in the professional landscape. 
                  Our verification process is designed to instill confidence in employers and trainees alike.
                </p>
                <p>
                  Together, we build a safer and more competent professional environment, fostering 
                  a culture of excellence and reliability.
                </p>
              </div>
              
              <div className="certificate-actions">
                <button className="btn-primary">
                  <Shield className="btn-icon" />
                  <span>Verify Certificate Now</span>
                </button>
                
                <button className="btn-outline">
                  <span>Learn About Our Process</span>
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            
            <div className="certificate-visual">
              <div className="certificate-animation">
                <div className="ring-container">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
                
                <div className="certificate-seal">
                  <div className="seal-bg"></div>
                  <CheckCircle className="seal-icon" />
                </div>
                
                <div className="floating-badges">
                  <div className="cert-badge">
                    <Star className="badge-icon" />
                    <span>Verified</span>
                  </div>
                  <div className="cert-badge">
                    <Award className="badge-icon" />
                    <span>Authentic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>GALLERY</span>
            </div>
            <h2 className="section-title">Training Excellence in Action</h2>
            <p className="section-subtitle">Capturing moments of excellence in safety training through real experiences</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`gallery-item ${index === activeGallery ? 'active' : ''}`}
                  onMouseEnter={() => setActiveGallery(index)}
                >
                  <div className="gallery-image">
                    <img src={item.url} alt={item.title} />
                    
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <div className="gallery-icon">
                          <Icon className="icon" />
                        </div>
                        <span className="gallery-title">{item.title}</span>
                        <span className="gallery-subtitle">{item.category}</span>
                      </div>
                      
                      <button className="gallery-view">
                        <Eye className="view-icon" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="gallery-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="section-footer">
            <button className="btn-primary">
              <span>View Full Gallery</span>
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="section-title">What Our Trainees Say</h2>
            <p className="section-subtitle">
              Hear from professionals who have experienced our world-class safety training programs.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>
                  <div className="testimonial-quote">"</div>
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-bg"></div>
                    <div className="avatar-text">{testimonial.author.charAt(0)}</div>
                  </div>
                  
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="testimonial-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>OUR PARTNERS</span>
            </div>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="partners-container">
            <div className="partners-track" ref={partnersRef}>
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="partner-logo">
                  <div className="logo-container">
                    <div className="logo-bg"></div>
                    <div className="logo-content">
                      <div className="logo-placeholder">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="partner-image"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="logo-overlay">
                      <span>View Partner</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section quick-links-section">
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles className="badge-icon" />
              <span>QUICK ACCESS</span>
            </div>
            <h2 className="section-title">Quick Navigation</h2>
          </div>
          
          <div className="quick-links-grid">
            {[
              { icon: Calendar, title: "Course Registration", desc: "Register for safety training courses", action: "Register Now" },
              { icon: Search, title: "Verify Certificate", desc: "Verify authenticity of certificates", action: "Verify Now" },
              { icon: Users, title: "Become a Partner", desc: "Partner for HSE solutions", action: "Contact Us" },
              { icon: Filter, title: "Corporate Training", desc: "Custom training programs", action: "Learn More" }
            ].map((link, index) => (
              <div key={index} className="quick-link-card">
                <div className="link-icon">
                  <link.icon className="icon" />
                </div>
                
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                
                <button className="link-btn">
                  <span>{link.action}</span>
                  <ArrowRight className="btn-icon" />
                </button>
                
                <div className="link-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content">
              <h2>Ready to Elevate Your Safety Standards?</h2>
              
              <p>
                Contact us today to discuss your training needs and start your journey 
                towards excellence in safety.
              </p>
              
              <div className="contact-info">
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
              
              <button className="btn-primary">
                <span>Contact Us Now</span>
                <ArrowRight className="btn-icon" />
              </button>
            </div>
            
            <div className="contact-visual">
              <div className="visual-animation">
                <div className="animated-element elem-1"></div>
                <div className="animated-element elem-2"></div>
                <div className="animated-element elem-3"></div>
                <div className="animated-element elem-4"></div>
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

export default HomePage;
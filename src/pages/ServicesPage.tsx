// src/components/ServicesPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, Users, Award, Globe, CheckCircle, Star, Zap, Target, 
  Clock, ArrowRight, TrendingUp, ChevronRight, Sparkles, Gem,
  Heart, Brain, Rocket, Crown, Eye, Layers, Flame, Waves, 
  CloudSnow, Navigation, Wind, Cpu, Umbrella, Droplets,
  Target as TargetIcon, BarChart, ShieldCheck, Play, Phone,
  Mail, MapPin, Calendar, Filter, Search, ExternalLink,
  Briefcase, FileText, ShoppingCart, Wrench, ClipboardCheck,
  Truck, HardHat, Settings, BookOpen, UserPlus, Package,
  Droplet, Cog, Users as UsersIcon, ShoppingBag, Scissors,
  Zap as ZapIcon, Bell, AlertTriangle, LifeBuoy, FileCheck,
  Search as SearchIcon, Headphones, Download
} from 'lucide-react';
import './ServicesPage.css';

// Import images - you'll need to add these to your project
import servicesHero from './img1.webp';
import consultancyImg from './img2.jpg';
import recruitmentImg from './img3.webp';
import trainingImg from './img4.webp';
import procurementImg from './img1.webp';
import tankCleaningImg from './img2.jpg';
import safetyStudiesImg from './img3.webp';

import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.jpeg';
import logo6 from './logo6.png';
import logo7 from './logo7.jpeg';
import logo8 from './logo8.jpeg';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Services data
  const services = [
    {
      id: 1,
      name: "Consultancy",
      description: "Our consultancy services are crafted to guide and fortify your organization in the realms of Health, Safety, Environment, and Security (HSE & HSSE). With a seasoned team of experts, we offer bespoke solutions to elevate your safety standards and mitigate risks effectively.",
      icon: ClipboardCheck,
      color: "#ff5e15",
      features: [
        "Tailored HSE & HSSE solutions",
        "Risk assessment & management",
        "Compliance auditing",
        "Safety program development",
        "Emergency response planning",
        "Regulatory compliance guidance"
      ],
      image: consultancyImg
    },
    {
      id: 2,
      name: "HSE Manpower Supply & Recruitment",
      description: "We specialize in the strategic placement of highly competent HSE professionals who align with your organization's specific needs and requirements. Our recruitment services extend to various sectors, ensuring that your team is equipped with the right expertise.",
      icon: UserPlus,
      color: "#1c63b8",
      features: [
        "HSE professional recruitment",
        "Talent assessment & screening",
        "Temporary staffing solutions",
        "Competency verification",
        "Industry-specific expertise",
        "Global talent network"
      ],
      image: recruitmentImg
    },
    {
      id: 3,
      name: "HSE Training",
      description: "We take pride in offering dynamic and industry-focused Health, Safety, and Environment (HSE) training solutions. Our comprehensive programs are designed to empower individuals and organizations with the knowledge and skills required to navigate the complexities of the oil and gas sector safely.",
      icon: BookOpen,
      color: "#2196f3",
      features: [
        "Industry-specific training programs",
        "Certification courses",
        "Practical hands-on training",
        "Customized training modules",
        "Competency assessment",
        "Continuous professional development"
      ],
      image: trainingImg
    },
    {
      id: 4,
      name: "Procurement",
      description: "We go beyond training to offer comprehensive procurement solutions designed to enhance safety excellence. Our procurement services are tailored to meet the specific needs of the Health, Safety, Environment, and Security (HSE&S) sector, ensuring that you have access to the best tools and equipment.",
      icon: ShoppingBag,
      color: "#4caf50",
      features: [
        "Safety equipment procurement",
        "Quality assurance & testing",
        "Supply chain management",
        "Vendor selection & management",
        "Custom procurement solutions",
        "Global sourcing capabilities"
      ],
      image: procurementImg
    },
    {
      id: 5,
      name: "Tank Farm Cleaning",
      description: "Discover efficient and reliable tank farm cleaning services at the International Onshore Offshore Safety Academy. Our specialized cleaning solutions ensure the thorough and safe cleaning of storage tanks, maintaining compliance with industry standards.",
      icon: Droplet,
      color: "#ff9800",
      features: [
        "Storage tank cleaning",
        "Hazardous material handling",
        "Waste management solutions",
        "Environmental compliance",
        "Industrial cleaning services",
        "Safety-first approach"
      ],
      image: tankCleaningImg
    },
    {
      id: 6,
      name: "Technical Safety Studies / Process Safety Engineering",
      description: "We bring a wealth of knowledge and experience in technical safety studies and process safety engineering. Our team of skilled professionals is dedicated to identifying, assessing, and mitigating potential hazards in your processes and facilities.",
      icon: Cog,
      color: "#9c27b0",
      features: [
        "Hazard identification & risk assessment",
        "Process safety management",
        "HAZOP studies",
        "Safety integrity level (SIL) studies",
        "Quantitative risk assessment",
        "Facility safety audits"
      ],
      image: safetyStudiesImg
    }
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "Our team comprises seasoned professionals with decades of experience in the oil and gas sector, ensuring that our services are built on practical, real-world knowledge.",
      icon: Award,
      color: "#ff5e15"
    },
    {
      id: 2,
      title: "Customized Solutions",
      description: "We understand that every organization is unique. Our services are tailored to meet your specific needs, challenges, and objectives.",
      icon: Target,
      color: "#1c63b8"
    },
    {
      id: 3,
      title: "Global Standards",
      description: "All our services adhere to international standards and best practices, ensuring compliance and excellence across all operations.",
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
    { id: 1, number: "200+", label: "Projects Completed", icon: Briefcase },
    { id: 2, number: "50+", label: "Industry Experts", icon: Users },
    { id: 3, number: "98%", label: "Client Satisfaction", icon: Star },
    { id: 4, number: "24/7", label: "Support Available", icon: Headphones }
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
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
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
                  <span className="breadcrumb-item active">Our Services</span>
                </div>
                
                <div className="hero-badge">
                  <Sparkles className="badge-icon" />
                  <span>OUR SERVICES</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">Comprehensive</span>
                  <span className="title-highlight">HSE Solutions</span>
                </h1>
                
                <p className="hero-description">
                  At International Onshore Offshore Safety Academy World, our commitment extends beyond training – we offer a suite of comprehensive services designed to elevate safety standards and contribute to a secure working environment.
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
                    <img src={servicesHero} alt="HSE Services" className="hero-img" />
                    <div className="image-overlay">
                      <div className="overlay-badge">
                        <Shield className="badge-icon" />
                        <span>ISO Certified Services</span>
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

      {/* Services Overview Section */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-content">
            <div className="overview-text">
              <div className="text-header">
                <div className="section-badge">
                  <Sparkles className="badge-icon" />
                  <span>WHAT WE OFFER</span>
                </div>
                
                <h2 className="section-title">
                  <span className="title-main">Elevating Safety Standards</span>
                  <span className="title-sub">Comprehensive HSE&S Services</span>
                </h2>
              </div>
              
              <div className="overview-paragraphs">
                <p className="lead-paragraph">
                  Explore our comprehensive array of services across Health, Safety, Environment, and Security (HSE&S). Each service is designed to address specific challenges and contribute to a secure working environment.
                </p>
                
                <p>
                  Our multidisciplinary approach ensures that every aspect of your safety needs is covered. From consultancy to technical studies, we provide end-to-end solutions that align with international standards and best practices.
                </p>
                
                <p>
                  We combine technical expertise with practical experience to deliver services that not only meet compliance requirements but also drive operational excellence and continuous improvement in safety performance.
                </p>
              </div>
              
              <div className="overview-features">
                <div className="feature-card">
                  <div className="feature-icon">
                    <ShieldCheck className="icon" />
                  </div>
                  <h4>Safety First</h4>
                  <p>All services prioritize safety and compliance</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <Target className="icon" />
                  </div>
                  <h4>Customized Approach</h4>
                  <p>Tailored solutions for specific needs</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <ZapIcon className="icon" />
                  </div>
                  <h4>Quick Response</h4>
                  <p>Timely delivery and support</p>
                </div>
              </div>
            </div>
            
            <div className="overview-visual">
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
                  <FileCheck className="element-icon" />
                  <span>Compliance</span>
                </div>
                
                <div className="floating-element element-2">
                  <AlertTriangle className="element-icon" />
                  <span>Risk Management</span>
                </div>
                
                <div className="floating-element element-3">
                  <LifeBuoy className="element-icon" />
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">Comprehensive Service Portfolio</h2>
            <p className="section-subtitle">
              Each service is designed to address specific challenges and contribute to a secure working environment.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`service-item ${activeService === service.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(0)}
                >
                  <div className="service-header">
                    <div className="service-number">0{service.id}</div>
                    <div className="service-category" style={{ background: service.color }}>
                      {service.name.split(' ')[0]}
                    </div>
                  </div>
                  
                  <div className="service-icon">
                    <Icon className="icon" style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="service-title">{service.name}</h3>
                  
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>
                          <CheckCircle className="feature-icon" style={{ color: service.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-footer">
                    <button className="btn-service">
                      <span>More Detail</span>
                      <ArrowRight className="btn-icon" />
                    </button>
                  </div>
                  
                  <div className="service-hover" style={{ background: service.color }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section detailed-services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>DETAILED SERVICES</span>
            </div>
            <h2 className="section-title">In-Depth Service Overview</h2>
            <p className="section-subtitle">
              Explore each service in detail and understand how we can help elevate your safety standards.
            </p>
          </div>
          
          <div className="detailed-services-container">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="detailed-service">
                  <div className="service-content">
                    <div className="service-header-detailed">
                      <div className="service-badge" style={{ background: service.color }}>
                        <Icon className="badge-icon" />
                        <span>Service {index + 1}</span>
                      </div>
                      
                      <h3 className="service-title-detailed">{service.name}</h3>
                      
                      <p className="service-description-detailed">{service.description}</p>
                    </div>
                    
                    <div className="service-details">
                      <div className="details-column">
                        <h4>Service Features:</h4>
                        <ul className="features-list">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>
                              <CheckCircle className="list-icon" style={{ color: service.color }} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-column">
                        <h4>Benefits:</h4>
                        <ul className="benefits-list">
                          <li>Improved safety performance</li>
                          <li>Regulatory compliance</li>
                          <li>Risk mitigation</li>
                          <li>Operational efficiency</li>
                          <li>Cost savings</li>
                          <li>Enhanced reputation</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-actions">
                      <button className="btn-primary">
                        <span>Request Service</span>
                        <Phone className="btn-icon" />
                      </button>
                      
                      <button className="btn-outline">
                        <span>Download Brochure</span>
                        <Download className="btn-icon" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="service-visual">
                    <div className="visual-wrapper">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="service-image" 
                      />
                      <div className="visual-overlay" style={{ background: service.color }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>WHY CHOOSE US</span>
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
          
          <div className="additional-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Clock className="icon" />
              </div>
              <h4>Timely Delivery</h4>
              <p>We respect deadlines and ensure timely completion of all projects</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <Award className="icon" />
              </div>
              <h4>Quality Assurance</h4>
              <p>Rigorous quality checks ensure excellence in service delivery</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <UsersIcon className="icon" />
              </div>
              <h4>Expert Team</h4>
              <p>Our professionals bring years of industry experience</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <Headphones className="icon" />
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock support for all your safety needs</p>
            </div>
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
              We are proud to partner with global industry leaders who trust us with their safety needs.
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
                Join thousands of organizations who have trusted us with their safety needs. 
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
                  <span>Request Consultation</span>
                  <ArrowRight className="btn-icon" />
                </button>
                
                <button className="btn-outline">
                  <span>Download Service Catalog</span>
                  <Download className="btn-icon" />
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

export default ServicesPage;
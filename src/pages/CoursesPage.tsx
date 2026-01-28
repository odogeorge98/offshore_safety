// src/components/CoursesPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, Users, Globe, CheckCircle, Star, Zap, Target, 
  Clock, ArrowRight, TrendingUp, ChevronRight, Sparkles,
  Heart, Flame, Waves, CloudSnow, Navigation, Wind, Cpu, Umbrella,
  Droplets, BarChart, ShieldCheck, Play, Phone, Mail, MapPin,
  Calendar, Filter, Search, ExternalLink, Briefcase, FileText,
  ShoppingCart, Wrench, ClipboardCheck, Truck, HardHat, Settings,
  BookOpen, UserPlus, Package, Droplet as DropletIcon, Cog,
  ShoppingBag, Scissors, Zap as ZapIcon, Bell, AlertTriangle,
  LifeBuoy, FileCheck, Search as SearchIcon, Headphones, Download,
  X, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon,
  Share2, Heart as HeartIcon, Grid, List, Book, University,
  Target as TargetIcon2, TrendingUp as TrendingUpIcon, DollarSign,
  Clock as ClockIcon, CheckCircle as CheckCircleIcon, Award as AwardIcon
} from 'lucide-react';
import './CoursesPage.css';

// Import images
import coursesHero from './img3.webp';
import courseTraining1 from './img2.jpg';
import courseTraining2 from './img3.webp';
import courseTraining3 from './img4.webp';

// Import partner logos
import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.jpeg';
import logo6 from './logo6.png';
import logo7 from './logo7.jpeg';
import logo8 from './logo8.jpeg';

interface Course {
  id: number;
  name: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  icon: React.FC<any>;
  color: string;
}

const CoursesPage: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Courses data
  const courses: Course[] = [
    {
      id: 1,
      name: "Basic Scaffolding Course (BASCO)",
      category: "safety",
      description: "Comprehensive training on safe scaffolding practices, including erection, alteration, and dismantling procedures.",
      duration: "3 Days",
      level: "Beginner",
      price: "$450",
      features: [
        "Scaffold erection & dismantling",
        "Safety procedures",
        "Inspection techniques",
        "Practical hands-on training",
        "Certificate of completion"
      ],
      icon: (props: any) => <Book {...props} />,
      color: "#1c63b8"
    },
    {
      id: 2,
      name: "Offshore Emergency Response Team Member (OERTM)",
      category: "emergency",
      description: "Specialized training for offshore emergency response team members covering firefighting, first aid, and rescue operations.",
      duration: "5 Days",
      level: "Advanced",
      price: "$850",
      features: [
        "Emergency response procedures",
        "Firefighting techniques",
        "First aid & medical response",
        "Team coordination",
        "Offshore certification"
      ],
      icon: ShieldCheck,
      color: "#ff5e15"
    },
    {
      id: 3,
      name: "Advanced Firefighting (AFF)",
      category: "fire",
      description: "Advanced training in firefighting techniques, including live fire exercises and advanced rescue procedures.",
      duration: "4 Days",
      level: "Advanced",
      price: "$750",
      features: [
        "Live fire exercises",
        "Advanced rescue techniques",
        "Hazardous material handling",
        "Team leadership",
        "International certification"
      ],
      icon: Flame,
      color: "#ff3d00"
    },
    {
      id: 4,
      name: "Helicopter Underwater Escape Training (HUET-EBS)",
      category: "emergency",
      description: "Training for helicopter underwater escape procedures with emergency breathing systems.",
      duration: "2 Days",
      level: "Intermediate",
      price: "$600",
      features: [
        "Underwater escape techniques",
        "EBS operation",
        "Emergency procedures",
        "Practical pool training",
        "Offshore certification"
      ],
      icon: Waves,
      color: "#2196f3"
    },
    {
      id: 5,
      name: "Basic Offshore Safety Induction (BOSIET)",
      category: "safety",
      description: "Basic safety training for offshore workers covering survival, first aid, and emergency procedures.",
      duration: "3 Days",
      level: "Beginner",
      price: "$650",
      features: [
        "Offshore survival techniques",
        "Sea survival",
        "First aid training",
        "Fire awareness",
        "Mandatory certification"
      ],
      icon: CloudSnow,
      color: "#1c63b8"
    },
    {
      id: 6,
      name: "Crane Operator Course (COC)",
      category: "technical",
      description: "Comprehensive training for crane operators covering safety, operations, and maintenance procedures.",
      duration: "5 Days",
      level: "Expert",
      price: "$950",
      features: [
        "Crane operations",
        "Load calculations",
        "Safety procedures",
        "Maintenance basics",
        "Operator certification"
      ],
      icon: Navigation,
      color: "#ff5e15"
    },
    {
      id: 7,
      name: "Proficiency in Fast Rescue Boats (PFRB)",
      category: "marine",
      description: "Training for fast rescue boat operations in offshore environments.",
      duration: "4 Days",
      level: "Advanced",
      price: "$800",
      features: [
        "Rescue boat operations",
        "Navigation skills",
        "Rescue techniques",
        "Safety procedures",
        "International certification"
      ],
      icon: Wind,
      color: "#2196f3"
    },
    {
      id: 8,
      name: "Forklift Operator Course (FOC)",
      category: "technical",
      description: "Training for safe forklift operation including load handling and safety procedures.",
      duration: "3 Days",
      level: "Intermediate",
      price: "$500",
      features: [
        "Forklift operations",
        "Load handling",
        "Safety procedures",
        "Maintenance basics",
        "Operator license"
      ],
      icon: Cpu,
      color: "#1c63b8"
    },
    {
      id: 9,
      name: "Proficiency in Survival Craft (PSCRB)",
      category: "marine",
      description: "Training for survival craft and rescue boat operations.",
      duration: "4 Days",
      level: "Advanced",
      price: "$780",
      features: [
        "Survival craft operations",
        "Rescue procedures",
        "Emergency communications",
        "Practical exercises",
        "STCW certification"
      ],
      icon: Umbrella,
      color: "#ff5e15"
    },
    {
      id: 10,
      name: "Tank Farm Operation",
      category: "technical",
      description: "Training for safe tank farm operations including loading, unloading, and maintenance.",
      duration: "5 Days",
      level: "Expert",
      price: "$900",
      features: [
        "Tank farm operations",
        "Safety procedures",
        "Maintenance techniques",
        "Emergency response",
        "Specialized certification"
      ],
      icon: Droplets,
      color: "#ff3d00"
    },
    {
      id: 11,
      name: "HSE Level 1 Certification",
      category: "safety",
      description: "Basic Health, Safety and Environment training for entry-level professionals.",
      duration: "3 Days",
      level: "Beginner",
      price: "$400",
      features: [
        "Basic HSE principles",
        "Risk assessment",
        "Safety regulations",
        "Environmental awareness",
        "HSE Level 1 certificate"
      ],
      icon: Shield,
      color: "#4caf50"
    },
    {
      id: 12,
      name: "HSE Level 2 Certification",
      category: "safety",
      description: "Intermediate HSE training for supervisors and team leaders.",
      duration: "5 Days",
      level: "Intermediate",
      price: "$650",
      features: [
        "Advanced risk assessment",
        "Incident investigation",
        "Safety management",
        "Leadership skills",
        "HSE Level 2 certificate"
      ],
      icon: ShieldCheck,
      color: "#2196f3"
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Courses', count: courses.length, icon: Book },
    { id: 'safety', name: 'Safety', count: courses.filter(c => c.category === 'safety').length, icon: Shield },
    { id: 'emergency', name: 'Emergency', count: courses.filter(c => c.category === 'emergency').length, icon: AlertTriangle },
    { id: 'fire', name: 'Fire Safety', count: courses.filter(c => c.category === 'fire').length, icon: Flame },
    { id: 'technical', name: 'Technical', count: courses.filter(c => c.category === 'technical').length, icon: Cog },
    { id: 'marine', name: 'Marine', count: courses.filter(c => c.category === 'marine').length, icon: Waves }
  ];

  // Stats data
  const stats = [
    { id: 1, number: "48+", label: "Certified Courses", icon: Book },
    { id: 2, number: "30,000+", label: "Professionals Trained", icon: Users },
    { id: 3, number: "98%", label: "Success Rate", icon: TrendingUpIcon },
    { id: 4, number: "24/7", label: "Support Available", icon: Headphones }
  ];

  // Features
  const features = [
    {
      id: 1,
      title: "Industry-Recognized Certifications",
      description: "All our courses provide internationally recognized certifications that enhance your career prospects.",
      icon: AwardIcon,
      color: "#ff5e15"
    },
    {
      id: 2,
      title: "Practical Hands-On Training",
      description: "Our training methodology emphasizes practical, hands-on experience with real-world equipment.",
      icon: TargetIcon2,
      color: "#1c63b8"
    },
    {
      id: 3,
      title: "Expert Instructors",
      description: "Learn from industry experts with decades of practical experience in their respective fields.",
      icon: University,
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

  // Filtered courses
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

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

  const handleRegisterClick = (courseName: string) => {
    // Store the selected course in localStorage for the registration form
    localStorage.setItem('selectedCourse', courseName);
    window.location.href = '/register';
  };

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
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
                  <span className="breadcrumb-item active">Courses</span>
                </div>
                
                <div className="hero-badge">
                  <Sparkles className="badge-icon" />
                  <span>OUR COURSES</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">Professional Safety</span>
                  <span className="title-highlight">Training Programs</span>
                </h1>
                
                <p className="hero-description">
                  Discover our comprehensive range of certified safety training programs designed to enhance your skills and advance your career in the oil and gas industry.
                </p>
                
                <div className="hero-stats">
                  {stats.map((stat) => {
                    const Icon = stat.icon as React.ComponentType<any>;
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
                    <img src={coursesHero} alt="Safety Training" className="hero-img" />
                    <div className="image-overlay">
                      <div className="overlay-badge">
                        <AwardIcon className="badge-icon" />
                        <span>Internationally Certified</span>
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

      {/* Course Categories */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>COURSE CATEGORIES</span>
            </div>
            <h2 className="section-title">Browse by Training Area</h2>
            <p className="section-subtitle">
              Select a category to explore specialized training programs in your area of interest.
            </p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category) => {
              const Icon = category.icon as React.ComponentType<any>;
              return (
                <button
                  key={category.id}
                  className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="category-icon">
                    <Icon className="icon" />
                  </div>
                  <h3 className="category-name">{category.name}</h3>
                  <div className="course-count">{category.count} Courses</div>
                  <div className="category-hover"></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section courses-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {activeCategory === 'all' 
                ? 'All Training Programs' 
                : `${categories.find(c => c.id === activeCategory)?.name} Training Programs`
              }
            </h2>
            <p className="section-subtitle">
              {activeCategory === 'all' 
                ? 'Browse our complete catalog of safety training programs' 
                : `Specialized training programs in ${categories.find(c => c.id === activeCategory)?.name?.toLowerCase()}`
              }
            </p>
          </div>
          
          <div className="courses-grid">
            {filteredCourses.map((course) => {
              const Icon = course.icon as React.ComponentType<any>;
              return (
                <div 
                  key={course.id}
                  className={`course-card ${activeCourse === course.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCourse(course.id)}
                  onMouseLeave={() => setActiveCourse(null)}
                >
                  <div className="course-header">
                    <div className="course-number">0{course.id}</div>
                    <div className="course-level" style={{ backgroundColor: course.color }}>
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="course-icon">
                    <Icon className="icon" style={{ color: course.color }} />
                  </div>
                  
                  <h3 className="course-title">{course.name}</h3>
                  
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-details">
                    <div className="detail-item">
                      <ClockIcon className="detail-icon" />
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{course.duration}</span>
                    </div>
                    
                    <div className="detail-item">
                      <DollarSign className="detail-icon" />
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">{course.price}</span>
                    </div>
                    
                    <div className="detail-item">
                      <Book className="detail-icon" />
                      <span className="detail-label">Category:</span>
                      <span className="detail-value">{course.category}</span>
                    </div>
                  </div>
                  
                  <div className="course-features">
                    <h4 className="features-title">What You'll Learn:</h4>
                    <ul className="features-list">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>
                          <CheckCircleIcon className="feature-icon" style={{ color: course.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="course-footer">
                    <button 
                      className="btn-primary"
                      onClick={() => handleRegisterClick(course.name)}
                    >
                      <span>Register Now</span>
                      <ArrowRight className="btn-icon" />
                    </button>
                    
                    <button className="btn-outline">
                      <span>Course Details</span>
                      <ExternalLink className="btn-icon" />
                    </button>
                  </div>
                  
                  <div className="course-hover" style={{ backgroundColor: course.color }}></div>
                </div>
              );
            })}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <Book className="empty-icon" />
              <h3>No courses found</h3>
              <p>Try selecting a different category</p>
              <button 
                className="btn-primary"
                onClick={() => setActiveCategory('all')}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles className="badge-icon" />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">Excellence in Safety Training</h2>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon as React.ComponentType<any>;
              return (
                <div key={feature.id} className="feature-card">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <Icon className="icon" style={{ color: feature.color }} />
                    </div>
                    <div className="feature-number">0{feature.id}</div>
                  </div>
                  
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
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
              <span>OUR PARTNERS</span>
            </div>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">
              We are proud to partner with global industry leaders who trust us with their training needs.
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
                <Book className="badge-icon" />
                <span>START YOUR JOURNEY</span>
              </div>
              
              <h2 className="cta-title">Ready to Advance Your Career?</h2>
              
              <p className="cta-description">
                Join thousands of professionals who have enhanced their skills with our certified training programs. 
                Register today and take the first step towards safety excellence.
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
                <button 
                  className="btn-primary"
                  onClick={() => window.location.href = '/register'}
                >
                  <span>Register Now</span>
                  <ArrowRight className="btn-icon" />
                </button>
                
                <button className="btn-outline">
                  <span>Download Course Catalog</span>
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

export default CoursesPage;

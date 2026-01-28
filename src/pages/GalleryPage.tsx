// src/components/GalleryPage.tsx
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
  Search as SearchIcon, Headphones, Download,
  X, Maximize2, ChevronLeft, /* ChevronRight as ChevronRightIcon removed */
  Share2, Heart as HeartIcon, Download as DownloadIcon,
  Grid, List, Filter as FilterIcon
} from 'lucide-react';
import './GalleryPage.css';

// Import gallery images - you'll need to add these to your project
import gallery1 from './img1.webp';
import gallery2 from './img3.webp';
import gallery3 from './img4.webp';
import gallery4 from './img1.webp';
import gallery5 from './img2.jpg';
import gallery6 from './img3.webp';
import gallery7 from './img1.webp';
import gallery8 from './img3.webp';
import gallery9 from './img2.jpg';
import gallery10 from './img3.webp';
import gallery11 from './img4.webp';
import gallery12 from './img1.webp';

// Import partner logos
import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.jpeg';
import logo6 from './logo6.png';
import logo7 from './logo7.jpeg';
import logo8 from './logo8.jpeg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Custom Camera icon component (moved before stats so it is defined before use)
  const Camera: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );

  // Stats data (icon typed as a React component)
  const stats: {
    id: number;
    number: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[] = [
    { id: 1, number: "500+", label: "Training Photos", icon: Camera },
    { id: 2, number: "50+", label: "Events Covered", icon: Calendar },
    { id: 3, number: "12+", label: "Years Documented", icon: Clock },
    { id: 4, number: "1000+", label: "Happy Moments", icon: HeartIcon }
  ];

  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: gallery1,
      alt: "Safety Training Session",
      category: "training",
      title: "Advanced Firefighting Training",
      description: "Our trainees practicing advanced firefighting techniques in a controlled environment",
      width: 800,
      height: 600
    },
    {
      id: 2,
      src: gallery2,
      alt: "Training Facility",
      category: "facilities",
      title: "State-of-the-Art Training Facility",
      description: "Modern training facilities equipped with the latest safety equipment",
      width: 600,
      height: 800
    },
    {
      id: 3,
      src: gallery3,
      alt: "Team Photo",
      category: "team",
      title: "Expert Training Team",
      description: "Our certified instructors with decades of industry experience",
      width: 800,
      height: 500
    },
    {
      id: 4,
      src: gallery4,
      alt: "Practical Training",
      category: "training",
      title: "Hands-on Practical Training",
      description: "Trainees gaining practical experience with real equipment",
      width: 600,
      height: 900
    },
    {
      id: 5,
      src: gallery5,
      alt: "Certificate Ceremony",
      category: "events",
      title: "Certificate Award Ceremony",
      description: "Celebrating successful completion of training programs",
      width: 900,
      height: 600
    },
    {
      id: 6,
      src: gallery6,
      alt: "Safety Equipment",
      category: "equipment",
      title: "Modern Safety Equipment",
      description: "Latest safety equipment used in our training programs",
      width: 700,
      height: 500
    },
    {
      id: 7,
      src: gallery7,
      alt: "Classroom Session",
      category: "training",
      title: "Interactive Classroom Sessions",
      description: "Engaging theoretical sessions with modern teaching aids",
      width: 800,
      height: 550
    },
    {
      id: 8,
      src: gallery8,
      alt: "Outdoor Training",
      category: "training",
      title: "Outdoor Practical Sessions",
      description: "Real-world scenario training in outdoor environments",
      width: 600,
      height: 700
    },
    {
      id: 9,
      src: gallery9,
      alt: "Simulation Training",
      category: "training",
      title: "Advanced Simulation Training",
      description: "Using VR and simulations for realistic training scenarios",
      width: 850,
      height: 600
    },
    {
      id: 10,
      src: gallery10,
      alt: "Client Meeting",
      category: "events",
      title: "Client Partnership Meetings",
      description: "Working closely with industry partners to understand their needs",
      width: 700,
      height: 500
    },
    {
      id: 11,
      src: gallery11,
      alt: "Safety Workshop",
      category: "events",
      title: "Safety Awareness Workshop",
      description: "Conducting safety awareness programs for various organizations",
      width: 900,
      height: 650
    },
    {
      id: 12,
      src: gallery12,
      alt: "Facility Tour",
      category: "facilities",
      title: "Modern Training Infrastructure",
      description: "Tour of our world-class training infrastructure",
      width: 800,
      height: 600
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'training', name: 'Training', count: galleryImages.filter(img => img.category === 'training').length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
    { id: 'team', name: 'Our Team', count: galleryImages.filter(img => img.category === 'team').length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(img => img.category === 'equipment').length }
  ];

  // Filtered images
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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

  // Handle image click
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Handle lightbox close
  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle next image
  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  // Handle previous image
  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Toggle favorite
  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          handleCloseLightbox();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage, filteredImages]);

  // Scroll effect for navbar
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
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
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
                  <span className="breadcrumb-item active">Gallery</span>
                </div>
                
                <div className="hero-badge">
                  <Sparkles className="badge-icon" />
                  <span>OUR GALLERY</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">Visual Journey Through</span>
                  <span className="title-highlight">Safety Excellence</span>
                </h1>
                
                <p className="hero-description">
                  Explore our visual gallery showcasing training sessions, facilities, events, and moments that define our commitment to safety excellence.
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
                    <img src={gallery1} alt="Gallery Preview" className="hero-img" />
                    <div className="image-overlay">
                      <div className="overlay-badge">
                        <Camera className="badge-icon" />
                        <span>Visual Stories</span>
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

      {/* Gallery Controls Section */}
      <section className="section gallery-controls">
        <div className="container">
          <div className="controls-container">
            <div className="controls-header">
              <div className="controls-text">
                <h2 className="section-title">Our Visual Collection</h2>
                <p className="section-subtitle">
                  Browse through our collection of training moments, facility tours, and safety events.
                </p>
              </div>
              
              <div className="view-controls">
                <button 
                  className={`view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                  onClick={() => setViewMode('masonry')}
                  title="Masonry View"
                >
                  <Grid className="btn-icon" />
                  <span>Masonry</span>
                </button>
                
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <List className="btn-icon" />
                  <span>Grid</span>
                </button>
              </div>
            </div>
            
            <div className="category-filters">
              <div className="filters-scroll">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <span className="filter-name">{category.name}</span>
                    <span className="filter-count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section gallery-grid-section">
        <div className="container">
          <div className={`gallery-container ${viewMode}`}>
            {filteredImages.map(image => (
              <div 
                key={image.id}
                className="gallery-item"
                onClick={() => handleImageClick(image)}
                data-category={image.category}
              >
                <div className="image-wrapper">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                  
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="image-actions">
                        <button 
                          className="action-btn favorite"
                          onClick={(e) => toggleFavorite(image.id, e)}
                          title={favorites.includes(image.id) ? "Remove from favorites" : "Add to favorites"}
                        >
                          <HeartIcon className={`heart-icon ${favorites.includes(image.id) ? 'filled' : ''}`} />
                        </button>
                        
                        <button 
                          className="action-btn expand"
                          onClick={() => handleImageClick(image)}
                          title="View larger"
                        >
                          <Maximize2 className="expand-icon" />
                        </button>
                      </div>
                      
                      <div className="image-info">
                        <h3 className="image-title">{image.title}</h3>
                        <p className="image-description">{image.description}</p>
                        <div className="image-category">
                          <span className="category-badge">{image.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="empty-state">
              <Camera className="empty-icon" />
              <h3>No images found</h3>
              <p>Try selecting a different category</p>
              <button 
                className="btn-primary"
                onClick={() => setActiveFilter('all')}
              >
                Show All Photos
              </button>
            </div>
          )}
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
              We are proud to partner with global industry leaders in safety training.
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
                <Camera className="badge-icon" />
                <span>VISIT OUR FACILITIES</span>
              </div>
              
              <h2 className="cta-title">Schedule a Facility Tour</h2>
              
              <p className="cta-description">
                Interested in seeing our training facilities in person? Schedule a tour to experience our world-class training environment firsthand.
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
                  <span>Schedule Tour</span>
                  <Calendar className="btn-icon" />
                </button>
                
                <button className="btn-outline">
                  <span>View Virtual Tour</span>
                  <Play className="btn-icon" />
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

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <div className="lightbox-container" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={handleCloseLightbox}>
              <X className="close-icon" />
            </button>
            
            <button className="lightbox-nav prev" onClick={handlePrevImage}>
              <ChevronLeft className="nav-icon" />
            </button>
            
            <button className="lightbox-nav next" onClick={handleNextImage}>
              <ChevronRight className="nav-icon" />
            </button>
            
            <div className="lightbox-content">
              <div className="lightbox-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="lightbox-image"
                />
              </div>
              
              <div className="lightbox-info">
                <div className="lightbox-header">
                  <h3 className="lightbox-title">{selectedImage.title}</h3>
                  <div className="lightbox-actions">
                    <button 
                      className="lightbox-action-btn favorite"
                      onClick={() => toggleFavorite(selectedImage.id, { stopPropagation: () => {} } as any)}
                      title={favorites.includes(selectedImage.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      <HeartIcon className={`action-icon ${favorites.includes(selectedImage.id) ? 'filled' : ''}`} />
                    </button>
                    
                    <button className="lightbox-action-btn share" title="Share">
                      <Share2 className="action-icon" />
                    </button>
                    
                    <button className="lightbox-action-btn download" title="Download">
                      <DownloadIcon className="action-icon" />
                    </button>
                  </div>
                </div>
                
                <p className="lightbox-description">{selectedImage.description}</p>
                
                <div className="lightbox-meta">
                  <div className="meta-item">
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">{selectedImage.category}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Dimensions:</span>
                    <span className="meta-value">{selectedImage.width} × {selectedImage.height}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Image ID:</span>
                    <span className="meta-value">#{selectedImage.id.toString().padStart(3, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lightbox-counter">
              <span className="current-index">
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1}
              </span>
              <span className="separator">/</span>
              <span className="total-count">{filteredImages.length}</span>
            </div>
          </div>
        </div>
      )}

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

export default GalleryPage;

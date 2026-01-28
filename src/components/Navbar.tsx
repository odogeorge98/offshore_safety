// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaCheck,
  FaUserPlus
} from 'react-icons/fa';
import './Navbar.css';

// Import logo image
import logoImage from './logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Scroll to top whenever the location pathname changes
  useEffect(() => {
    // scroll to top immediately when route changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  // Toggle body class when mobile menu opens so CSS can lock scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    // cleanup not strictly necessary but keep safe
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    // ensure we start at top after clicking a nav item
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    // ensure top-of-page on mobile navigation as well
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Services dropdown items
  const servicesItems = [
    { name: 'HSE Training', path: '/services#training' },
    { name: 'HSE Manpower Supply', path: '/services#manpower' },
    { name: 'Consultancy', path: '/services#consultancy' },
    { name: 'Procurement', path: '/services#procurement' },
    { name: 'Tank Farm Operations', path: '/services#tank-farm' },
    { name: 'Technical Safety Studies', path: '/services#technical' },
  ];

  // Courses dropdown items
  const coursesItems = [
    { name: 'All Courses', path: '/courses' },
    { name: 'Offshore Safety Courses', path: '/courses?category=offshore' },
    { name: 'Onshore Safety Courses', path: '/courses?category=onshore' },
    { name: 'Fire Safety Training', path: '/courses?category=fire' },
    { name: 'Rescue Operations', path: '/courses?category=rescue' },
    { name: 'Specialized Training', path: '/courses?category=specialized' },
  ];

  // Icon component helper
  const Icon = ({ icon: IconComponent, ...props }: { icon: any } & React.SVGProps<SVGSVGElement>) => (
    <IconComponent {...props} />
  );

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        {/* Compact Contact Info Bar - Hidden on Scroll */}
        <div className={`contact-info-bar ${isScrolled ? 'hidden' : ''}`}>
          <div className="contact-info-container">
            <div className="contact-info-content">
              <div className="contact-info-item">
                <Icon icon={FaClock} className="contact-info-icon" />
                <span className="contact-info-text">Monday - Saturday 8AM - 7PM</span>
              </div>
              <div className="contact-info-item">
                <Icon icon={FaPhone} className="contact-info-icon" />
                <a href="tel:+2349034125744" className="contact-info-link">+234 903 412 5744</a>
              </div>
              <div className="contact-info-item">
                <Icon icon={FaEnvelope} className="contact-info-icon" />
                <a href="mailto:internationalonshoreoffshore@gmail.com" className="contact-info-link">
                  internationalonshoreoffshore@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Section */}
        <div className="navbar-main">
          <div className="navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-logo" onClick={handleDropdownClose}>
              <div className="logo-main">
                <div className="logo-image-container">
                  <img src={logoImage} alt="International Onshore Offshore Safety Academy" className="logo-img" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <div className="nav-links">
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">Home</span>
                  <span className="nav-line"></span>
                </Link>

                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">About</span>
                  <span className="nav-line"></span>
                </Link>

                {/* Services Dropdown */}
                <div
                  className={`nav-item-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                    onClick={() => handleDropdownToggle('services')}
                  >
                    <span className="nav-text">Services</span>
                    <Icon icon={FaChevronDown} className="dropdown-arrow" />
                    <span className="nav-line"></span>
                  </button>

                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      <div className="dropdown-header">
                        <div className="dropdown-icon">
                          <Icon icon={FaCheck} />
                        </div>
                        <div>
                          <h3>Our Services</h3>
                          <p>Comprehensive HSE solutions</p>
                        </div>
                      </div>
                      <div className="dropdown-grid">
                        {servicesItems.map((item, index) => (
                          <Link key={index} to={item.path} className="dropdown-item" onClick={handleDropdownClose}>
                            <div className="dropdown-item-icon"></div>
                            <span>{item.name}</span>
                            <Icon icon={FaChevronRight} className="dropdown-arrow-small" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Courses Dropdown */}
                <div
                  className={`nav-item-dropdown ${activeDropdown === 'courses' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown('courses')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
                    onClick={() => handleDropdownToggle('courses')}
                  >
                    <span className="nav-text">Courses</span>
                    <Icon icon={FaChevronDown} className="dropdown-arrow" />
                    <span className="nav-line"></span>
                  </button>

                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      <div className="dropdown-header">
                        <div className="dropdown-icon">
                          <Icon icon={FaCheck} />
                        </div>
                        <div>
                          <h3>Our Courses</h3>
                          <p>Professional safety training</p>
                        </div>
                      </div>
                      <div className="dropdown-grid">
                        {coursesItems.map((item, index) => (
                          <Link key={index} to={item.path} className="dropdown-item" onClick={handleDropdownClose}>
                            <div className="dropdown-item-icon"></div>
                            <span>{item.name}</span>
                            <Icon icon={FaChevronRight} className="dropdown-arrow-small" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">Gallery</span>
                  <span className="nav-line"></span>
                </Link>

                {/* <Link to="/testimonials" className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">Testimonials</span>
                  <span className="nav-line"></span>
                </Link> */}

                {/* News & Events - added to desktop nav */}
                <Link to="/news-and-events" className={`nav-link ${isActive('/news-and-events') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">News & Events</span>
                  <span className="nav-line"></span>
                </Link>

                {/* <Link to="/verify-certificate" className={`nav-link ${isActive('/verify-certificate') ? 'active' : ''}`} onClick={handleDropdownClose}>
                  <span className="nav-text">Verify</span>
                  <span className="nav-line"></span>
                </Link> */}
              </div>

              {/* Desktop CTA - Changed to Register */}
              <Link to="/register" className="nav-cta" onClick={handleDropdownClose}>
                <Icon icon={FaUserPlus} className="cta-icon" />
                <span className="cta-text">Register</span>
                <div className="cta-hover"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Icon icon={FaTimes} className="menu-icon" />
              ) : (
                <Icon icon={FaBars} className="menu-icon" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-container">
          {/* Mobile Header with Close Button */}
          <div className="mobile-nav-header">
            <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <Icon icon={FaTimes} className="close-icon" />
            </button>
            <div className="mobile-logo">
              <img src={logoImage} alt="Safety Academy" className="mobile-logo-img" />
            </div>
            <div className="mobile-certified">
              <div className="mobile-cert-icon">
                <Icon icon={FaCheck} />
              </div>
              <div className="mobile-cert-text">
                <span>ISO 45001 - HSE Certified</span>
                <span className="mobile-verified">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="mobile-contact-info">
            <div className="mobile-contact-item">
              <Icon icon={FaClock} className="contact-icon" />
              <span className="contact-text">Mon-Sat: 8AM-7PM</span>
            </div>
            <div className="mobile-contact-item">
              <Icon icon={FaPhone} className="contact-icon" />
              <a href="tel:+2349034125744" className="contact-link">+234 903 412 5744</a>
            </div>
            <div className="mobile-contact-item">
              <Icon icon={FaEnvelope} className="contact-icon" />
              <a href="mailto:internationalonshoreoffshore@gmail.com" className="contact-link">
                internationalonshoreoffshore@gmail.com
              </a>
            </div>
          </div>

          <div className="mobile-nav-links">
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">Home</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link>

            <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">About Us</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="mobile-dropdown">
              <button 
                className={`mobile-dropdown-btn ${activeDropdown === 'mobile-services' ? 'active' : ''}`} 
                onClick={() => handleDropdownToggle('mobile-services')}
              >
                <span className="mobile-link-text">Our Services</span>
                <Icon 
                  icon={FaChevronDown} 
                  className={`mobile-dropdown-arrow ${activeDropdown === 'mobile-services' ? 'active' : ''}`} 
                />
              </button>

              <div className={`mobile-dropdown-content ${activeDropdown === 'mobile-services' ? 'active' : ''}`}>
                {servicesItems.map((item, index) => (
                  <Link key={index} to={item.path} className="mobile-dropdown-item" onClick={handleMobileLinkClick}>
                    <Icon icon={FaChevronRight} className="dropdown-item-icon" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Courses Dropdown */}
            <div className="mobile-dropdown">
              <button 
                className={`mobile-dropdown-btn ${activeDropdown === 'mobile-courses' ? 'active' : ''}`} 
                onClick={() => handleDropdownToggle('mobile-courses')}
              >
                <span className="mobile-link-text">Courses</span>
                <Icon 
                  icon={FaChevronDown} 
                  className={`mobile-dropdown-arrow ${activeDropdown === 'mobile-courses' ? 'active' : ''}`} 
                />
              </button>

              <div className={`mobile-dropdown-content ${activeDropdown === 'mobile-courses' ? 'active' : ''}`}>
                {coursesItems.map((item, index) => (
                  <Link key={index} to={item.path} className="mobile-dropdown-item" onClick={handleMobileLinkClick}>
                    <Icon icon={FaChevronRight} className="dropdown-item-icon" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/gallery" className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">Gallery</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link>

            {/* <Link to="/testimonials" className={`mobile-nav-link ${isActive('/testimonials') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">Testimonials</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link> */}

            <Link to="/news-and-events" className={`mobile-nav-link ${isActive('/news-and-events') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">News & Events</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link>

            {/* <Link to="/verify-certificate" className={`mobile-nav-link ${isActive('/verify-certificate') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">Verify Certificate</span>
              <Icon icon={FaChevronRight} className="mobile-link-arrow" />
            </Link> */}

            <Link to="/register" className={`mobile-nav-link ${isActive('/register') ? 'active' : ''}`} onClick={handleMobileLinkClick}>
              <span className="mobile-link-text">Register</span>
              <Icon icon={FaUserPlus} className="mobile-link-arrow" />
            </Link>
          </div>

          <div className="mobile-nav-footer">
            <Link to="/register" className="mobile-cta-btn" onClick={handleMobileLinkClick}>
              <Icon icon={FaUserPlus} className="cta-btn-icon" />
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

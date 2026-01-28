// In src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <Link to="/">
                  <h2 className="logo-text">
                    International <span className="logo-highlight">Onshore Offshore</span>
                  </h2>
                  <div className="logo-subtitle">Safety Academy World</div>
                </Link>
              </div>
              <p className="footer-about-text">
                We are committed to fostering a culture of health, safety, 
                environment, and security worldwide through comprehensive 
                training and consultancy services.
              </p>
              <div className="certification-badge">
                <span className="cert-icon">🏅</span>
                <span className="cert-text">Certified Under ISO 45001 - HSE</span>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Our Services</Link></li>
                <li><Link to="/courses" className="footer-link">Our Courses</Link></li>
                <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/services" className="footer-link">HSE Training</Link></li>
                <li><Link to="/services" className="footer-link">Manpower Supply</Link></li>
                <li><Link to="/services" className="footer-link">Consultancy</Link></li>
                <li><Link to="/services" className="footer-link">Procurement</Link></li>
                <li><Link to="/verify-certificate" className="footer-link">Certificate Verification</Link></li>
                <li><Link to="/services" className="footer-link">Technical Studies</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">
                    Nigeria Office, Calabar
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+2349034125744" className="contact-link">
                    +234 903 412 5744
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a 
                    href="mailto:internationalonshoreoffshore@gmail.com" 
                    className="contact-link"
                  >
                    internationalonshoreoffshore@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <span className="contact-text">
                    Monday - Saturday: 8AM - 7PM
                  </span>
                </div>
              </div>

              <div className="whatsapp-widget">
                <div className="whatsapp-status">
                  <div className="status-indicator online"></div>
                  <span className="status-text">Typically replies within minutes</span>
                </div>
                <a 
                  href="https://wa.me/2349034125744"
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="whatsapp-icon">💬</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} International Onshore Offshore Safety Academy World. 
              All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="#" className="legal-link">Privacy Policy</Link>
              <Link to="#" className="legal-link">Terms of Service</Link>
              <Link to="#" className="legal-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
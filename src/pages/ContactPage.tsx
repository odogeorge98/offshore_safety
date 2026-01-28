import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Get in touch with us for inquiries, training, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Our Location</h3>
              <p>Nigeria Office, Calabar</p>
              <p className="contact-detail">Training Center: Industrial Area, Calabar</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Number</h3>
              <p>+234 903 412 5744</p>
              <p className="contact-detail">Monday - Saturday: 8AM - 7PM</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Address</h3>
              <p>internationalonshoreoffshore@gmail.com</p>
              <p className="contact-detail">We respond within 24 hours</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-map-grid">
            <div className="contact-form">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you promptly</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="training">Training Inquiry</option>
                    <option value="certification">Certificate Verification</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="recruitment">Manpower Recruitment</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="map-section">
              <div className="map-header">
                <h2>Find Our Office</h2>
                <p>Visit our training center in Calabar</p>
              </div>
              
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="map-pin">📍</div>
                  <h3>International Onshore Offshore Safety Academy</h3>
                  <p>Industrial Area, Calabar, Nigeria</p>
                  <div className="map-directions">
                    <h4>Directions:</h4>
                    <ul>
                      <li>From Airport: 30 minutes drive</li>
                      <li>From City Center: 15 minutes drive</li>
                      <li>Public Transport: Available</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="office-hours">
                <h3>Office Hours</h3>
                <div className="hours-grid">
                  <div className="day">Monday - Friday</div>
                  <div className="time">8:00 AM - 7:00 PM</div>
                  <div className="day">Saturday</div>
                  <div className="time">8:00 AM - 5:00 PM</div>
                  <div className="day">Sunday</div>
                  <div className="time">Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="whatsapp-section">
        <div className="container">
          <div className="whatsapp-content">
            <div className="whatsapp-icon">💬</div>
            <div className="whatsapp-text">
              <h2>Chat with Us on WhatsApp</h2>
              <p>Get quick responses to your inquiries</p>
            </div>
            <a 
              href="https://wa.me/2349034125744"
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I register for a course?</h3>
              <p>You can register online through our website, call our office, or visit us in person. Online registration is available 24/7.</p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept bank transfers, online payments, and cash payments at our office. Corporate clients can request invoices.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer corporate training packages?</h3>
              <p>Yes, we offer customized corporate training packages with flexible scheduling and discounted rates for group bookings.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can I verify a certificate?</h3>
              <p>Use our online certificate verification tool on the Verify Certificate page. You'll need the certificate number.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
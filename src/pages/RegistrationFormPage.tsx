// src/pages/RegistrationFormPage.tsx
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Sparkles, Shield, Phone, Mail, MapPin, 
  Calendar, ArrowRight, User, Mail as MailIcon, Phone as PhoneIcon,
  MapPin as MapPinIcon, BookOpen, CheckCircle, X, Loader,
  ArrowLeft, UserPlus
} from 'lucide-react';
import './RegistrationFormPage.css';

const RegistrationFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    course: 'HSE L1'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  // Available courses for the dropdown
  const courses = [
    'HSE L1',
    'HSE L2',
    'HSE L3',
    'Basic Scaffolding Course (BASCO)',
    'Offshore Emergency Response Team Member (OERTM)',
    'Advanced Firefighting (AFF)',
    'Helicopter Underwater Escape Training (HUET-EBS)',
    'Basic Offshore Safety Induction (BOSIET)',
    'Crane Operator Course (COC)',
    'Proficiency in Fast Rescue Boats (PFRB)',
    'Forklift Operator Course (FOC)',
    'Proficiency in Survival Craft (PSCRB)',
    'Tank Farm Operation',
    'Other'
  ];

  // Load selected course from localStorage if coming from Courses page
  useEffect(() => {
    const savedCourse = localStorage.getItem('selectedCourse');
    if (savedCourse && courses.includes(savedCourse)) {
      setFormData(prev => ({ ...prev, course: savedCourse }));
      setSelectedCourse(savedCourse);
      localStorage.removeItem('selectedCourse');
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        course: 'HSE L1'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="registration-hero">
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
                  <a href="/courses" className="breadcrumb-item">Courses</a>
                  <ChevronRight className="breadcrumb-arrow" />
                  <span className="breadcrumb-item active">Registration</span>
                </div>
                
                <div className="hero-badge">
                  <Sparkles className="badge-icon" />
                  <span>APPLICATION FORM</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">Start Your Safety</span>
                  <span className="title-highlight">Training Journey</span>
                </h1>
                
                <p className="hero-description">
                  We're delighted that you've chosen International Onshore Offshore Safety Academy for your professional development. 
                  To kick-start your journey, please fill out the form below.
                </p>
                
                <div className="hero-info">
                  <div className="info-card">
                    <div className="info-icon">
                      <Phone className="icon" />
                    </div>
                    <div className="info-content">
                      <div className="info-label">Need Help?</div>
                      <div className="info-value">+234 903 412 5744</div>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="info-icon">
                      <Mail className="icon" />
                    </div>
                    <div className="info-content">
                      <div className="info-label">Email Support</div>
                      <div className="info-value">internationalonshoreoffshore@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hero-form">
                <div className="form-container">
                  {isSubmitted ? (
                    <div className="success-message">
                      <div className="success-icon">
                        <CheckCircle className="icon" />
                      </div>
                      <h2 className="success-title">Application Submitted!</h2>
                      <p className="success-description">
                        Thank you for registering with International Onshore Offshore Safety Academy. 
                        Our team will contact you within 24 hours to proceed with your enrollment.
                      </p>
                      <div className="success-actions">
                        <button className="btn-primary" onClick={handleReset}>
                          Submit Another Application
                        </button>
                        <a href="/courses" className="btn-outline">
                          <ArrowLeft className="btn-icon" />
                          <span>Back to Courses</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="registration-form">
                      <div className="form-header">
                        <div className="form-header-icon">
                          <UserPlus className="icon" />
                        </div>
                        <h2 className="form-title">Application Form</h2>
                        <p className="form-subtitle">Complete all fields to register for your chosen course</p>
                      </div>
                      
                      <div className="form-grid">
                        {/* First Name */}
                        <div className="form-group">
                          <label htmlFor="firstName" className="form-label">
                            First Name *
                            <span className="label-hint">E.g. John</span>
                          </label>
                          <div className="input-group">
                            <User className="input-icon" />
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Enter your first name"
                              className={`form-input ${errors.firstName ? 'error' : ''}`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.firstName && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.firstName}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Last Name */}
                        <div className="form-group">
                          <label htmlFor="lastName" className="form-label">
                            Last Name *
                            <span className="label-hint">E.g. Doe</span>
                          </label>
                          <div className="input-group">
                            <User className="input-icon" />
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Enter your last name"
                              className={`form-input ${errors.lastName ? 'error' : ''}`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.lastName && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.lastName}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Phone */}
                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            Phone Number *
                            <span className="label-hint">E.g. +234 300 400 5000</span>
                          </label>
                          <div className="input-group">
                            <PhoneIcon className="input-icon" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className={`form-input ${errors.phone ? 'error' : ''}`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.phone && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.phone}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Email */}
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address *
                            <span className="label-hint">E.g. john@doe.com</span>
                          </label>
                          <div className="input-group">
                            <MailIcon className="input-icon" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email address"
                              className={`form-input ${errors.email ? 'error' : ''}`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.email && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.email}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Location */}
                        <div className="form-group">
                          <label htmlFor="location" className="form-label">
                            Location *
                            <span className="label-hint">E.g. Cross River</span>
                          </label>
                          <div className="input-group">
                            <MapPinIcon className="input-icon" />
                            <input
                              type="text"
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              placeholder="Enter your location"
                              className={`form-input ${errors.location ? 'error' : ''}`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.location && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.location}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Course Selection */}
                        <div className="form-group full-width">
                          <label htmlFor="course" className="form-label">
                            Which safety training are you applying for *
                          </label>
                          <div className="input-group">
                            <BookOpen className="input-icon" />
                            <select
                              id="course"
                              name="course"
                              value={formData.course}
                              onChange={handleChange}
                              className={`form-select ${errors.course ? 'error' : ''}`}
                              disabled={isSubmitting}
                            >
                              {courses.map((course) => (
                                <option key={course} value={course}>
                                  {course}
                                </option>
                              ))}
                            </select>
                            <div className="select-arrow"></div>
                          </div>
                          {errors.course && (
                            <div className="error-message">
                              <X className="error-icon" />
                              <span>{errors.course}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {errors.submit && (
                        <div className="form-error">
                          <X className="error-icon" />
                          <span>{errors.submit}</span>
                        </div>
                      )}
                      
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn-primary submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader className="btn-icon spinning" />
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Application</span>
                              <ArrowRight className="btn-icon" />
                            </>
                          )}
                        </button>
                        
                        <p className="form-note">
                          By submitting this form, you agree to our terms and conditions.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section support-section">
        <div className="container">
          <div className="support-card">
            <div className="support-content">
              <div className="support-badge">
                <Shield className="badge-icon" />
                <span>NEED ASSISTANCE?</span>
              </div>
              
              <h2 className="support-title">We're Here to Help You</h2>
              
              <p className="support-description">
                If you encounter any issues during the registration process or have questions about our courses, 
                feel free to contact our support team. We're here to help you every step of the way.
              </p>
              
              <div className="support-info">
                <div className="support-item">
                  <Phone className="support-icon" />
                  <div className="support-details">
                    <h4>Call Us</h4>
                    <p>+234 903 412 5744</p>
                    <span className="support-hint">Available 24/7</span>
                  </div>
                </div>
                
                <div className="support-item">
                  <Mail className="support-icon" />
                  <div className="support-details">
                    <h4>Email Us</h4>
                    <p>internationalonshoreoffshore@gmail.com</p>
                    <span className="support-hint">Response within 24 hours</span>
                  </div>
                </div>
                
                <div className="support-item">
                  <MapPin className="support-icon" />
                  <div className="support-details">
                    <h4>Visit Us</h4>
                    <p>Lagos, Nigeria</p>
                    <span className="support-hint">Schedule a visit</span>
                  </div>
                </div>
              </div>
              
              <div className="support-message">
                <p className="thank-you-message">
                  Thank you for choosing International Onshore Offshore Safety Academy for your training needs. 
                  We look forward to being a part of your journey towards safety and competence in your industry.
                </p>
              </div>
            </div>
            
            <div className="support-visual">
              <div className="visual-animation">
                <div className="animated-shape shape-1"></div>
                <div className="animated-shape shape-2"></div>
                <div className="animated-shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationFormPage;
import React, { useState } from 'react';
import './CoursesSection.css';

const CoursesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Basic Scaffolding Course (BASCO)",
      category: "offshore",
      duration: "3 days",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      title: "Offshore Emergency Response Team Member (OERTM)",
      category: "offshore",
      duration: "5 days",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      title: "Advanced Firefighting (AFF)",
      category: "onshore",
      duration: "4 days",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
    },
    {
      id: 4,
      title: "Helicopter Underwater Escape Training (HUET-EBS)",
      category: "offshore",
      duration: "2 days",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 5,
      title: "Basic Offshore Safety Induction (BOSIET)",
      category: "offshore",
      duration: "3 days",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 6,
      title: "Crane Operator Course (COC)",
      category: "onshore",
      duration: "5 days",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 7,
      title: "Proficiency in Fast Rescue Boats (PFRB)",
      category: "offshore",
      duration: "4 days",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    },
    {
      id: 8,
      title: "Forklift Operator Course (FOC)",
      category: "onshore",
      duration: "3 days",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Courses</div>
          <h2 className="section-title animate-fade-in">
            Building Competent Workforce
          </h2>
          <p className="section-description">
            We focus on delivering content that aligns with in-house objectives, 
            ensuring a safe and competent workforce.
          </p>
        </div>

        <div className="courses-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </button>
          <button 
            className={`tab-btn ${activeTab === 'offshore' ? 'active' : ''}`}
            onClick={() => setActiveTab('offshore')}
          >
            Offshore
          </button>
          <button 
            className={`tab-btn ${activeTab === 'onshore' ? 'active' : ''}`}
            onClick={() => setActiveTab('onshore')}
          >
            Onshore
          </button>
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="course-card animate-course-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="course-image">
                <img 
                  src={course.image} 
                  alt={course.title}
                  loading="lazy"
                />
                <div className="course-overlay"></div>
                <div className="course-category">{course.category}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <span className="course-duration">
                    <span className="meta-icon">⏱️</span>
                    {course.duration}
                  </span>
                  <span className="course-level">
                    <span className="meta-icon">📊</span>
                    {course.level}
                  </span>
                </div>
                <p className="course-description">
                  Comprehensive training program designed for safety professionals
                </p>
                <div className="course-actions">
                  <button className="enroll-btn">
                    <span className="btn-icon">📝</span>
                    Enroll Now
                  </button>
                  <button className="details-btn">
                    View Details
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-courses">
          <button className="view-all-btn">
            View All 48+ Courses
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Survival Training",
      category: "practical",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Practical survival training sessions"
    },
    {
      id: 2,
      title: "Charity in Motherless Home",
      category: "charity",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800",
      description: "Giving back to the community"
    },
    {
      id: 3,
      title: "Firefighting Training",
      category: "practical",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800",
      description: "Advanced firefighting techniques"
    },
    {
      id: 4,
      title: "Safety Equipment Demo",
      category: "equipment",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Latest safety equipment demonstrations"
    },
    {
      id: 5,
      title: "Team Building",
      category: "events",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
      description: "Team building activities"
    },
    {
      id: 6,
      title: "Certificate Award",
      category: "events",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Graduation and certificate award ceremonies"
    },
    {
      id: 7,
      title: "Classroom Training",
      category: "training",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Interactive classroom sessions"
    },
    {
      id: 8,
      title: "Field Exercises",
      category: "practical",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Real-world field exercises"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Gallery</div>
          <h2 className="section-title animate-fade-in">
            Moments That Matter
          </h2>
          <p className="section-description">
            Capturing our journey in creating safer work environments through training and community engagement.
          </p>
        </div>

        <div className="gallery-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Training</button>
          <button className="filter-btn">Practical</button>
          <button className="filter-btn">Events</button>
          <button className="filter-btn">Charity</button>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-item animate-gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="gallery-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-desc">{item.description}</p>
                    <button className="view-btn">
                      <span className="view-icon">🔍</span>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-btn">
            Load More
            <span className="load-icon">↴</span>
          </button>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-lightbox"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={galleryItems[selectedImage].image} 
              alt={galleryItems[selectedImage].title}
            />
            <div className="lightbox-info">
              <h3>{galleryItems[selectedImage].title}</h3>
              <p>{galleryItems[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
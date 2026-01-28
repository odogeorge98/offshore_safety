import React from 'react';
import './PartnersSection.css';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Shell Nigeria",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shell_logo.svg/320px-Shell_logo.svg.png",
      description: "Global energy company"
    },
    {
      id: 2,
      name: "Chevron",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chevron_Logo.svg/320px-Chevron_Logo.svg.png",
      description: "International oil and gas corporation"
    },
    {
      id: 3,
      name: "ExxonMobil",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/ExxonMobil_logo.svg/320px-ExxonMobil_logo.svg.png",
      description: "World's largest publicly traded oil company"
    },
    {
      id: 4,
      name: "Total Energies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TotalEnergies_logo.svg/320px-TotalEnergies_logo.svg.png",
      description: "French multinational energy company"
    },
    {
      id: 5,
      name: "NNPC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/NNPC_logo.svg/320px-NNPC_logo.svg.png",
      description: "Nigerian National Petroleum Corporation"
    },
    {
      id: 6,
      name: "Schlumberger",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Schlumberger_logo.svg/320px-Schlumberger_logo.svg.png",
      description: "Oilfield services company"
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Partners</div>
          <h2 className="section-title animate-fade-in">
            Trusted by Industry Leaders
          </h2>
          <p className="section-description">
            We collaborate with leading organizations in the oil and gas industry 
            to deliver exceptional safety training solutions.
          </p>
        </div>

        <div className="partners-slider">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="partner-logo animate-partner-logo"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="logo-container">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="logo-image"
                  />
                </div>
                <div className="partner-info">
                  <h4 className="partner-name">{partner.name}</h4>
                  <p className="partner-desc">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className="partner-card animate-partner-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partner-logo-card">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo-img"
                />
              </div>
              <div className="partner-content">
                <h3 className="partner-title">{partner.name}</h3>
                <p className="partner-text">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
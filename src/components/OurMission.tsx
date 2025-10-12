import React, { useEffect } from 'react';
import './OurMission.css';

const OurMission: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="our-mission-page">
      {/* Hero Section with Photo Background */}
      <div className="mission-hero">
        <div className="hero-content">
          <h1>Our Mission</h1>
          <p>Delivering premium products with responsiveness.</p>
        </div>
      </div>

      {/* Main Content Section - Clean Layout */}
      <div className="mission-main">
        <div className="mission-container">
          {/* Mission Story Section - Clean Professional Layout */}
          <section className="mission-story">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Mission</h2>
                <p>
                  At Nutrinoix, our mission is simple: to offer European professionals a demanding selection of dried fruits and nuts sourced from the unique terroirs of northern Pakistan, where agricultural traditions have been passed down for generations.
                </p>
                <p>
                  Our products – dried figs, soft apricots, golden raisins, crunchy pistachios, wild almonds – are hand-harvested, naturally sun-dried, and carefully sorted to ensure freshness, authentic taste, and rich nutrition.
                </p>
                <p>
                  We rely on a direct sourcing model, without intermediaries, working with trusted producers located in the most remote regions, sometimes near the Afghan and Iranian borders.
                </p>
                <p>
                  This direct link allows us to control every step of the chain, from field to delivery, ensuring traceability, sanitary compliance, and timely execution – meeting the needs of professionals such as wholesalers, distributors, manufacturers, or artisans seeking premium, operationally adapted products.
                </p>
              </div>
              <div className="story-image">
                <img
                  src="/assets/images/latestphotos/Our mission Page with content.jpg"
                />
              </div>
            </div>
          </section>

          {/* Key Principles Section */}
          <section className="key-principles">
            <div className="principles-content">
              <div className="principle-item">
                <div className="principle-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="#2d5a27"/>
                    <path d="M12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14C6 10.6863 8.68629 8 12 8Z" fill="#5cb85c" stroke="#2d5a27" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Direct Sourcing</h3>
                  <p>
                    We partner directly with smallholder farms across Pakistan to bring you authentic organic dry fruits and nuts.
                    By eliminating middlemen, we ensure fair prices for farmers, empower rural communities, and deliver pure, traceable products straight from the source to your table.
                  </p>
                </div>
              </div>

              <div className="principle-item">
                <div className="principle-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Organic & Authentic</h3>
                  <p>
                    Every product is handpicked and naturally sun-dried to preserve its flavor and nutrients.
                    No additives, no processing — just the wholesome richness of Pakistan's finest orchards and valleys, brought to European consumers with integrity and care.
                  </p>
                </div>
              </div>

              <div className="principle-item">
                <div className="principle-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L12 3L7 8V21H17V8Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V12H15V21" fill="#5cb85c" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Sustainable Bridge</h3>
                  <p>
                    We act as a sustainable bridge between local farms and global markets.
                    Our commitment extends beyond trade — we invest in eco-friendly packaging and sustainable practices that benefit both communities and the environment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurMission;

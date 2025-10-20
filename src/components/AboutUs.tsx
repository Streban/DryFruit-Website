import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="about-us-page">
      {/* Hero Section with Photo Background */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>A Franco-Pakistani venture led by two partners, serving agri-food professionals.</p>
        </div>
      </div>

      {/* Main Content Section - Clean Layout */}
      <div className="about-main">
        <div className="about-container">
          {/* Company Story Section - Clean Professional Layout */}
          <section className="company-story">
            <div className="story-content">
              <div className="story-text">
                <h2>The company...</h2>
                <p>
                  Born from the meeting of two friends – one French, the other Pakistani – our company is the result of a shared passion: to introduce the European market to the richness and authenticity of Pakistani dried fruits and nuts.
                </p>
                <p>
                  From Lyon, we have built a direct and lasting network with producers located in the most preserved agricultural regions of northern Pakistan, near the Afghan and Iranian borders.
                </p>
                <p>
                  Our products – figs, apricots, raisins, pistachios, walnuts, almonds, etc. – are hand-harvested, sun-dried, and carefully sorted to preserve their flavor and nutritional value.
                </p>
                <p>
                  Our mission is simple: to provide our clients with healthy, traceable, ethical, and flavorful products.
                </p>
                <p>
                  We are committed to:
                  <br />
                  – Producers, to ensure fair and stable incomes
                  <br />
                  – European professionals, to provide consistent quality and reliable service
                  <br />
                  – Consumers, to offer meaningful products that respect the environment
                </p>
                <p>
                  <strong>
                    We are not just importers.
                    <br />
                    We are a bridge between the remote agricultural regions of Pakistan and the distribution channels of France.
                  </strong>
                </p>
                
                {/* Certifications and Memberships */}
                <div className="certifications">
                  <div className="cert-logo">
                    <div className="logo-placeholder organic">
                      <span>AB</span>
                      <small>AGRICULTURE BIOLOGIQUE</small>
                    </div>
                  </div>
                  <div className="cert-logo">
                    <div className="logo-placeholder fair-trade">
                      <span>FT</span>
                      <small>FAIR TRADE</small>
                    </div>
                  </div>
                  <div className="cert-logo">
                    <div className="logo-placeholder quality">
                      <span>QS</span>
                      <small>QUALITY SOURCED</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-image">
                <img
                  src='https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760636497/About_Us_with_content_on_about_us_page_1_synjsg.jpg'
                  alt="Our team and office"
                />
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          {/* <section className="mission-vision">
            <div className="mission-vision-content">
              <div className="mission-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To bridge the gap between Pakistan's unique terroirs and European professionals 
                  by offering premium quality dried fruits and nuts, cultivated using artisanal 
                  methods and selected with care.
                </p>
              </div>
              
              <div className="vision-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" fill="#2d5a27"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading ambassador of Pakistan's agricultural heritage, 
                  delivering authentic flavors and exceptional quality while supporting 
                  sustainable farming communities and ethical business practices.
                </p>
              </div>
            </div>
          </section> */}

          {/* Values Section */}
          {/* <section className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L12 3L7 8V21H17V8Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V12H15V21" fill="#5cb85c" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Quality Excellence</h4>
                <p>Hand-picked, sun-dried, and additive-free products that reflect generations of traditional craftsmanship.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="none" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Full Traceability</h4>
                <p>Each batch is traceable from field to warehouse, backed by certifications and lab testing.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="#2d5a27"/>
                    <path d="M12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14C6 10.6863 8.68629 8 12 8Z" fill="#5cb85c" stroke="#2d5a27" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Ethical Sourcing</h4>
                <p>Direct partnerships with small-scale producers ensuring fair pay and sustainable practices.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="20" r="1" fill="#2d5a27"/>
                    <circle cx="20" cy="20" r="1" fill="#2d5a27"/>
                  </svg>
                </div>
                <h4>Reliable Service</h4>
                <p>Flexible logistics with tailored Incoterms and consistent, on-time delivery.</p>
              </div>
            </div>
          </section> */}

          {/* Our Team Section */}
          {/* <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-content">
              <div className="team-text">
                <p>
                  Our success is built on the foundation of a dedicated team that combines 
                  deep local knowledge with international expertise. With one of us connected 
                  to the best harvests of Pakistan, and the other familiar with the European 
                  market, our partnership has become our strength.
                </p>
                <p>
                  We are not just importers - we are ambassadors of flavor, committed to 
                  delivering nature's best while supporting the communities that make it possible.
                </p>
              </div>
              <div className="team-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Our dedicated team"
                />
              </div>
            </div>
          </section> */}

          {/* Statistics Section */}
          {/* <section className="stats-section">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">39+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Partner Producers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Premium Products</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Traceable Supply Chain</div>
              </div>
            </div>
          </section> */}

          {/* Call to Action */}
          {/* <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Experience Premium Quality?</h2>
              <p>
                Join hundreds of satisfied customers who trust us for their dry fruit and nut needs. 
                Request samples today and taste the difference that authentic quality makes.
              </p>
              <div className="cta-buttons">
                <button className="primary-button">Request Samples</button>
                <button className="secondary-button">Contact Us</button>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

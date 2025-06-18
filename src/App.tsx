import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ContactBottomBar from './components/ContactBottomBar';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProductPage from './components/ProductPage';

// Easing function
const easeOutQuart = (t: number): number => {
  return 1 - (--t) * t * t * t;
};

function App() {
  const [counts, setCounts] = useState({
    suppliers: 0,
    customers: 0,
    products: 0,
    experience: 0
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Counter animation effect
  useEffect(() => {
    const targets = {
      suppliers: 300,
      customers: 850,
      products: 150,
      experience: 39
    };

    const duration = 5000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);

    Object.keys(targets).forEach(key => {
      let frame = 0;
      const countTo = targets[key as keyof typeof targets];
      
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuart(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        
        setCounts(prev => ({
          ...prev,
          [key]: currentCount
        }));

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    });
  }, []);

  // Scroll to section if hash is present in URL, or scroll to top if navigating to home
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Handler to navigate to product page
  const handleNavbarProductSelect = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onProductSelect={handleNavbarProductSelect} />
              {/* Hero Section */}
              <section id="home" className="hero-section">
                <div className="hero-overlay">
                  <div className="hero-content">
                    <div className="hero-text">
                      <h1>
                        Specialist<br />
                        <span className="highlight">in Dry Fruits and Nuts</span><br />
                        Since 1985
                      </h1>
                      <p>Premium quality dry fruits and nuts sourced from the finest farms around the world. We bring you the taste of nature with uncompromised quality and freshness.</p>
                      <button className="cta-button">
                        Explore Products
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Service Info */}
              <section className="service-info">
                <div className="container">
                  <div className="service-content">
                    <h2>At the service of Dry Fruits and Nuts</h2>
                    <p>We are looking for a better universe. We can be better to improve the situation of your business.</p>
                  </div>
                </div>
              </section>
              {/* Products Section */}
              <section id="products" className="products-section">
                <div className="container">
                  <div className="products-content">
                    <div className="products-text">
                      <h2>Our products</h2>
                      <p>We offer premium quality dry fruits and nuts. Our extensive range includes cashews, almonds, dates, and quality products sourced directly from growers at exceptional prices for all our customers.</p>
                      <button className="products-button">Explore all products</button>
                    </div>
                    <div className="products-grid">
                      <div className="product-item">
                        <div className="product-icon">🍓</div>
                        <h3>Premium Dates</h3>
                      </div>
                      <div className="product-item">
                        <div className="product-icon">🥜</div>
                        <h3>Mixed Nuts</h3>
                      </div>
                      <div className="product-item">
                        <div className="product-icon">🌰</div>
                        <h3>Cashews</h3>
                      </div>
                      <div className="product-item">
                        <div className="product-icon">🥝</div>
                        <h3>Almonds</h3>
                      </div>
                      <div className="product-item">
                        <div className="product-icon">🍊</div>
                        <h3>Walnuts</h3>
                      </div>
                      <div className="product-item">
                        <div className="product-icon">🥒</div>
                        <h3>Pistachios</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* About Us Section */}
              <section id="about" className="about-section">
                <div className="container">
                  <div className="about-content">
                    <div className="about-text">
                      <h2>Who are we?</h2>
                      <p>
                        DryFruit Co. is a family business founded in 1985 and established in the heart of premium agriculture regions. We have built our reputation on providing the highest quality dry fruits and nuts to customers worldwide.
                      </p>
                      <p>
                        Our expertise spans over 39 years in the business of sourcing, processing, and distributing premium dry fruits. Our key ingredients are quality, freshness, and customer satisfaction.
                      </p>
                      <p>
                        Our know-how and our 39 years of experience in the business world has enabled us to be among all of our suppliers.
                      </p>
                      <button className="about-button">Read more about us</button>
                    </div>
                    <div className="about-image">
                      <img src="/api/placeholder/500/400" alt="Our facility and team" />
                    </div>
                  </div>
                </div>
              </section>
              {/* History Section */}
              <section id="history" className="history-section">
                <div className="container">
                  <h2>Our history</h2>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">1985</div>
                      <div className="timeline-content">
                        <h3>The family business DryFruit Co. is founded</h3>
                        <img src="/api/placeholder/300/200" alt="Company founding" />
                        <p>The family business was founded in 1985 as a modest family business. In a modest villa business, created from the desire of food crops that are wholesome and fruits. From the very first years DryFruit Co. set alongside the premium wholesale export market.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">1998</div>
                      <div className="timeline-content">
                        <h3>DryFruit Co. sets up in the Premium Quality Division</h3>
                        <img src="/api/placeholder/300/200" alt="Premium quality division" />
                        <p>Expansion of our business; setting new branches in several countries. We decide to operate as a Premium Quality supplier, expanding our reach to international markets. Our commitment to quality never wavered.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">Today</div>
                      <div className="timeline-content">
                        <h3>The third generation also emerges over the long term</h3>
                        <img src="/api/placeholder/300/200" alt="Modern operations" />
                        <p>The third generation has entered over the long term. The continuation of a unique concept. The new family generation is now in charge of the business with modern farming techniques and sustainable practices, ensuring quality for decades to come.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Statistics Section */}
              <section className="stats-section">
                <div className="container">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">{counts.suppliers}</div>
                      <div className="stat-label">Suppliers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{counts.customers}</div>
                      <div className="stat-label">Satisfied Customers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{counts.products}</div>
                      <div className="stat-label">Premium Products</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{counts.experience}</div>
                      <div className="stat-label">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Follow Us Section */}
              <section className="follow-section">
                <div className="container">
                  <h2>Follow us on the networks</h2>
                  <div className="social-grid">
                    <a href="#" className="social-card facebook">
                      <div className="social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <span>Follow us on Facebook</span>
                    </a>
                    <a href="#" className="social-card instagram">
                      <div className="social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span>Follow us on Instagram</span>
                    </a>
                    <a href="#" className="social-card twitter">
                      <div className="social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
                      <span>Follow us on Twitter</span>
                    </a>
                    <a href="#" className="social-card linkedin">
                      <div className="social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </section>
              {/* Visit Us Section */}
              <section id="visit" className="visit-section">
                <div className="container">
                  <div className="visit-content">
                    <div className="visit-info">
                      <h2>COME AND VISIT US</h2>
                      <div className="visit-details">
                        <div className="detail-item">
                          <h3>DryFruit Co. Premium Store</h3>
                          <p>123 Fruit Street, Dry Valley</p>
                          <p>California, CA 90210</p>
                        </div>
                        <div className="detail-item">
                          <h3>Phone: +1 (555) 123-4567</h3>
                          <p>Email: info@dryfruitco.com</p>
                        </div>
                        <div className="detail-item">
                          <h3>Store Timing</h3>
                          <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                          <p>Sat: 9:00 AM - 4:00 PM</p>
                          <p>Sun: Closed</p>
                        </div>
                      </div>
                      <button className="directions-btn">Get Directions</button>
                    </div>
                    <div className="map-container">
                      <div className="map-placeholder">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959342716!5m2!1sen!2s"
                          width="100%"
                          height="400"
                          style={{ border: 0, borderRadius: '12px' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="DryFruit Co. Location"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ContactBottomBar />
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={<ProductPageWrapper />}
        />
      </Routes>
    </div>
  );
}

// Wrapper to extract productId param and pass to ProductPage
import { useParams } from 'react-router-dom';
const ProductPageWrapper = () => {
  const { productId } = useParams<{ productId: string }>();
  return <ProductPage productId={productId} />;
};

export default App;

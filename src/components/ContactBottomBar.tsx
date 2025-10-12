import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ContactBottomBar.css';

const ContactBottomBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="contact-bottom-bar">
      {/* Upper Section - Dark Green */}
      <div className="footer-upper">
        <div className="footer-container">
          <div className="footer-content">
            {/* Left Column - Logo and Contact */}
            <div className="footer-column logo-column">
              <div className="logo-container">
                <img 
                  src="/assets/images/latestphotos/Nutrinoix LOGO wb.png" 
                  alt="Nutrinoix Logo" 
                  className="footer-logo"
                />
              </div>
              <div className="contact-info">
                <p className="phone">01 81 85 07 20</p>
                <p className="address">48 Cours Blaise Pascal</p>
                <p className="address">91000 Évry-Courcouronnes</p>
              </div>
            </div>

            {/* Middle Column - Company Description */}
            <div className="footer-column description-column">
              <p className="company-description">
              Premium Trading, a player in the import market since 2011, has established itself and carved out a niche on the European scene. A specialist in food trading, Premium Trading adapts to consumer trends to ideally meet the expectations of its customers.


              </p>
            </div>

            {/* Right Column - Navigation */}
            <div className="footer-column navigation-column">
              <h4>Who are we?</h4>
              <ul className="footer-links">
                <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')}>Products</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>News</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Blue */}
      <div className="footer-lower">
        <p>Legal notices | Copyright © 2022 A Communikey production, communications agency</p>
      </div>
    </footer>
  );
};

export default ContactBottomBar; 
import React, { useState } from 'react';
import './ContactBottomBar.css';

const ContactBottomBar: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { newsletterEmail, firstName, lastName });
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
    setFirstName('');
    setLastName('');
  };

  return (
    <footer className="contact-bottom-bar">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Column */}
          <div className="footer-column">
            <h4>DryFruit Co.</h4>
            <div className="company-details">
              <p>62A rue de Montpellier</p>
              <p>CP 50 369</p>
              <p>94622 Rungis cedex France</p>
              <br />
              <p>Tél. +33 1 46 86 40 30</p>
              <p>Fax. +33 1 46 87 92 94</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#company">The Company</a></li>
              <li><a href="#about">Who Are We?</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#fruits">Our Fruits</a></li>
              <li><a href="#vegetables">Our Vegetables</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="footer-column social-column">
            <div className="social-icons">
              <a href="#" className="social-icon facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-icon email" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </a>
              <a href="#" className="social-icon instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.346-1.24-.898-.75-1.297-1.615-1.297-2.473V9.724c0-.858.399-1.724 1.297-2.473.898-.75 2.049-1.24 3.346-1.24h7.102c1.297 0 2.448.49 3.346 1.24.898.749 1.297 1.615 1.297 2.473v3.551c0 .858-.399 1.723-1.297 2.473-.898.75-2.049 1.24-3.346 1.24H8.449zm3.551-9.895c-1.985 0-3.597 1.612-3.597 3.596 0 1.985 1.612 3.597 3.597 3.597s3.596-1.612 3.596-3.597c0-1.984-1.611-3.596-3.596-3.596zm5.338-.899c-.464 0-.84-.376-.84-.84s.376-.84.84-.84.84.376.84.84-.376.84-.84.84z"/>
                </svg>
              </a>
              <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Signup Column */}
          <div className="footer-column newsletter-column">
            <h4>Get Our Offers</h4>
            <p>Receive exclusive offers on fresh fruits and vegetables directly from our offices in Rungis</p>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="My email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-checkbox">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">I accept the Privacy Policy</label>
              </div>
              
              <button type="submit" className="newsletter-btn">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 DryFruit Co.</p>
        
        </div>
      </div>
    </footer>
  );
};

export default ContactBottomBar; 
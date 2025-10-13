import React, { useState, useEffect } from 'react';
import './ContactUs.css';

interface FormData {
  companyName: string;
  name: string;
  businessType: string[];
  email: string;
  phone: string;
  postalCode: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    businessType: [],
    email: '',
    phone: '',
    postalCode: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      businessType: checked 
        ? [...prev.businessType, value]
        : prev.businessType.filter(type => type !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      companyName: '',
      name: '',
      businessType: [],
      email: '',
      phone: '',
      postalCode: '',
      message: ''
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>CONTACT</h1>
      </div>

      {/* Main Content Section */}
      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-content">
            {/* Visit Information Section */}
            <div className="visit-info-section">
              <div className="section-title">
                <h2>COME AND VISIT US</h2>
              </div>
              
              <div className="visit-details">
                <div className="detail-item">
                  <h3>DryFruit Co. Premium Store</h3>
                  <p>48 Cours Blaise Pascal</p>
                  <p>91000 Évry-Courcouronnes, France</p>
                </div>
                <div className="detail-item">
                  <h3>Phone: +33 01 81 85 07 20</h3>
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
              
              {/* Map positioned vertically below */}
              <div className="map-container">
                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.80926516913!2d74.308013!3d31.520370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ddc8b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635959342716!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DryFruit Co. Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="form-section">
              <div className="section-title">
                <h2>CONTACT FORM</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="companyName">COMPANY NAME</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Business Type Checkboxes */}
                <div className="form-group checkbox-group">
                  <div className="checkbox-row">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="wholesaler"
                        name="businessType"
                        value="wholesaler"
                        checked={formData.businessType.includes('wholesaler')}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="wholesaler">WHOLESALER</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="independentRestaurant"
                        name="businessType"
                        value="independentRestaurant"
                        checked={formData.businessType.includes('independentRestaurant')}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="independentRestaurant">INDEPENDENT RESTAURANT</label>
                    </div>
                  </div>
                  <div className="checkbox-row">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="restaurantChain"
                        name="businessType"
                        value="restaurantChain"
                        checked={formData.businessType.includes('restaurantChain')}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="restaurantChain">RESTAURANT CHAIN</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="industrial"
                        name="businessType"
                        value="industrial"
                        checked={formData.businessType.includes('industrial')}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="industrial">INDUSTRIAL</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="other"
                        name="businessType"
                        value="other"
                        checked={formData.businessType.includes('other')}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="other">OTHER</label>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">PHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Postal Code */}
                <div className="form-group">
                  <label htmlFor="postalCode">POSTAL CODE</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button type="submit" className="submit-button">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;

import React, { useState } from 'react';
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
            {/* Address Section */}
            <div className="address-section">
              <div className="section-title">
                <h2>ADDRESS</h2>
              </div>
              
              <div className="address-content">
                {/* Location */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="#7CFC00"/>
                      <circle cx="12" cy="10" r="3" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>48 Cours Blaise Pascal</p>
                    <p>91000 Évry-Courcouronnes</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.03996 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" fill="#7CFC00"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>+33 01 81 85 07 20</p>
                  </div>
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

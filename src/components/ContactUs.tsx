import React, { useState, useEffect } from 'react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xvgvzpee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          name: formData.name,
          businessType: formData.businessType.join(', '),
          email: formData.email,
          phone: formData.phone,
          postalCode: formData.postalCode,
          message: formData.message
        })
      });

      if (response.ok) {
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
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <style>
        {`
          @keyframes floatPattern {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
      <div style={{
        minHeight: '100vh',
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
        backgroundColor: 'white'
      }}>
      {/* Header Section */}
      <div style={{
        background: 'white',
        padding: '120px 0',
        textAlign: 'center',
        color: '#2d5a27',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#0f2419'
        }}></div>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          margin: 0,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#2d5a27',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 1
        }}>CONTACT</h1>
      </div>

      {/* Main Content Section */}
      <div style={{
        background: 'white',
        padding: '80px 0',
        minHeight: 'calc(100vh - 200px)',
        position: 'relative'
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"1\" fill=\"rgba(26,61,46,0.05)\"/><circle cx=\"80\" cy=\"80\" r=\"1\" fill=\"rgba(26,61,46,0.05)\"/><circle cx=\"40\" cy=\"60\" r=\"0.8\" fill=\"rgba(26,61,46,0.03)\"/><circle cx=\"70\" cy=\"30\" r=\"0.8\" fill=\"rgba(26,61,46,0.03)\"/></svg>')",
          opacity: 0.6,
          animation: 'floatPattern 20s ease-in-out infinite'
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {/* Visit Information Section */}
            <div style={{
              background: 'white',
              padding: '35px 30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(45, 90, 39, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              animation: 'slideInLeft 0.8s ease-out'
            }}>
              <div style={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #2d5a27, #4a7c59)'
              }}></div>
              <div style={{
                marginBottom: '25px',
                position: 'relative'
              }}>
                <h2 style={{
                  background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c59 100%)',
                  color: 'white',
                  padding: '18px 25px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  display: 'inline-block',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(45, 90, 39, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>COME AND VISIT US</h2>
              </div>
              
              <div style={{
                marginBottom: '32px'
              }}>
                {/* Company Information */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #eee'
                }}>
                  <h3 style={{
                    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                    color: '#2d5a27',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                    lineHeight: 1.4
                  }}>ARYANA INDUS COMPANY PVT LTD</h3>
                  <p style={{
                    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    margin: 0
                  }}>Unit 66, C1 Block, AWT Phase 2, Lahore - 54000, Pakistan</p>
                </div>

                {/* Phone Section */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    gap: '8px'
                  }}>
                    <svg style={{
                      flexShrink: 0,
                      color: '#e91e63'
                    }} viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <h4 style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#2d5a27',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Phone:</h4>
                  </div>
                  <div style={{
                    marginLeft: '28px'
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>+33 780 790 330 (France)</p>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>+92 312 163 3358 | +92 306 100 2866 (Pakistan)</p>
                  </div>
                </div>

                {/* Email Section */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    gap: '8px'
                  }}>
                    <svg style={{
                      flexShrink: 0,
                      color: '#9c27b0'
                    }} viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <h4 style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#2d5a27',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Email:</h4>
                  </div>
                  <div style={{
                    marginLeft: '28px'
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <a href="mailto:sales@nutrinoix.com" style={{
                        color: '#2d5a27',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.3s ease'
                      }}>sales@nutrinoix.com</a>
                      <svg style={{
                        color: '#999',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease'
                      }} viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </p>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <a href="mailto:info@nutrinoix.com" style={{
                        color: '#2d5a27',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.3s ease'
                      }}>info@nutrinoix.com</a>
                      <svg style={{
                        color: '#999',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease'
                      }} viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </p>
                  </div>
                </div>

                {/* Store Hours Section */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: 'none'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    gap: '8px'
                  }}>
                    <svg style={{
                      flexShrink: 0,
                      color: '#666'
                    }} viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                    <h4 style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#2d5a27',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Visit Hours:</h4>
                  </div>
                  <div style={{
                    marginLeft: '28px'
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>Mon-Fri: 8:00 AM – 6:00 PM</p>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>Sat: 9:00 AM – 4:00 PM</p>
                    <p style={{
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      color: '#666',
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>Sun: Closed</p>
                  </div>
                </div>
              </div>
              <button style={{
                background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c59 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
              }}>Our Location</button>
              
              {/* Map positioned vertically below */}
              <div style={{
                marginTop: '40px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)'
              }}>
                <div>
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
            <div style={{
              background: 'white',
              padding: '50px 40px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(45, 90, 39, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              animation: 'slideInRight 0.8s ease-out'
            }}>
              <div style={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #2d5a27, #4a7c59)'
              }}></div>
              <div style={{
                marginBottom: '25px',
                position: 'relative'
              }}>
                <h2 style={{
                  background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c59 100%)',
                  color: 'white',
                  padding: '18px 25px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  display: 'inline-block',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(45, 90, 39, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>CONTACT FORM</h2>
              </div>
              
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px'
              }}>
                {/* Company Name */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="companyName" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>COMPANY NAME</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Name */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="name" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Business Type Checkboxes */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '30px',
                    flexWrap: 'wrap',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <input
                        type="checkbox"
                        id="wholesaler"
                        name="businessType"
                        value="wholesaler"
                        checked={formData.businessType.includes('wholesaler')}
                        onChange={handleCheckboxChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#7CFC00',
                          cursor: 'pointer'
                        }}
                      />
                      <label htmlFor="wholesaler" style={{
                        color: '#2d5a27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        margin: 0,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}>WHOLESALER</label>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <input
                        type="checkbox"
                        id="independentRestaurant"
                        name="businessType"
                        value="independentRestaurant"
                        checked={formData.businessType.includes('independentRestaurant')}
                        onChange={handleCheckboxChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#7CFC00',
                          cursor: 'pointer'
                        }}
                      />
                      <label htmlFor="independentRestaurant" style={{
                        color: '#2d5a27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        margin: 0,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}>INDEPENDENT RESTAURANT</label>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '30px',
                    flexWrap: 'wrap',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <input
                        type="checkbox"
                        id="restaurantChain"
                        name="businessType"
                        value="restaurantChain"
                        checked={formData.businessType.includes('restaurantChain')}
                        onChange={handleCheckboxChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#7CFC00',
                          cursor: 'pointer'
                        }}
                      />
                      <label htmlFor="restaurantChain" style={{
                        color: '#2d5a27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        margin: 0,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}>RESTAURANT CHAIN</label>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <input
                        type="checkbox"
                        id="industrial"
                        name="businessType"
                        value="industrial"
                        checked={formData.businessType.includes('industrial')}
                        onChange={handleCheckboxChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#7CFC00',
                          cursor: 'pointer'
                        }}
                      />
                      <label htmlFor="industrial" style={{
                        color: '#2d5a27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        margin: 0,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}>INDUSTRIAL</label>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <input
                        type="checkbox"
                        id="other"
                        name="businessType"
                        value="other"
                        checked={formData.businessType.includes('other')}
                        onChange={handleCheckboxChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#7CFC00',
                          cursor: 'pointer'
                        }}
                      />
                      <label htmlFor="other" style={{
                        color: '#2d5a27',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        margin: 0,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}>OTHER</label>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="email" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="phone" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>PHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Postal Code */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="postalCode" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>POSTAL CODE</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label htmlFor="message" style={{
                    color: '#2d5a27',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '8px'
                  }}>MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    style={{
                      padding: '15px 18px',
                      border: '2px solid #E8E8E8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                      background: '#fafafa',
                      color: '#333',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      minHeight: '100px'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <button type="submit" style={{
                    background: 'linear-gradient(135deg, #1a3d2e 0%, #2d5a27 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '18px 35px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
                    marginTop: '15px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(26, 61, 46, 0.3)'
                  }}>
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default ContactUs;

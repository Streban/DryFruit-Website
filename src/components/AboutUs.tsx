import React, { useEffect } from 'react';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <style>{`
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
      `}</style>
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
      background: '#ffffff'
    }}>
      {/* Hero Section with Photo Background */}
      <div style={{
        height: '60vh',
        minHeight: '500px',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634009/About_Us_cover_page_mvgvh0.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 800,
            color: 'white',
            margin: '0 0 20px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>About Us</h1>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'white',
            margin: 0,
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
            opacity: 0.95,
            maxWidth: '600px',
            lineHeight: 1.5
          }}>A Franco-Pakistani venture based in Lahore, bridging authentic Pakistani dried fruits and nuts to European markets.</p>
        </div>
      </div>

      {/* Main Content Section - Clean Layout */}
      <div style={{
        background: '#ffffff',
        padding: '80px 0',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative'
        }}>
          {/* Company Story Section - float image with flowing text */}
          <section className="story-section">
            <div>
              <img
                className="story-image"
                src='https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760636497/About_Us_with_content_on_about_us_page_1_synjsg.jpg'
                alt="Our team and office"
              />
              <h2 className="story-heading">Our Story</h2>
              <p className="story-paragraph">
                  Born from the meeting between two entrepreneurs – one French and one Pakistani – our company was created out of a shared passion: to introduce the European market to the richness, authenticity, and cultural heritage of Pakistani dried fruits and nuts. Now based in Lahore, we have built a direct and lasting network with producers located in the most preserved agricultural regions of northern & southwestern Pakistan to regions near the Afghan and Iranian borders.
              </p>
              <p className="story-paragraph">
                  These high valleys, shaped by pure mountain air and ancient cultivation traditions, give birth to fruits and nuts of extraordinary flavour and quality. Our products – figs, apricots, raisins, pistachios, walnuts, almonds, pine nuts, raisins and more – are hand-harvested, sun-dried, and carefully sorted by local farmers who have inherited generations of expertise. We value slow, natural processes that preserve both the nutritional richness and the authentic taste of each product. Behind every batch lies a story of craftsmanship, patience, and respect for nature.
              </p>
              <p className="story-paragraph">
                  Our Philosophy is simple yet powerful: to provide healthy, traceable, ethical, and flavourful products while creating a positive impact on every link of the value chain. We believe that true quality begins at the source — with fair treatment of producers, transparent practices, and a deep respect for the land. That's why we are committed to ensuring that our partner farmers receive fair and stable incomes, allowing them to sustain their families and preserve traditional farming methods.
              </p>
              <p className="story-paragraph">
                  To our European partners — wholesalers, retailers, and artisans — we guarantee consistent quality, reliability, and a genuine partnership based on trust and shared values. We understand the expectations of the European market and combine that understanding with the authenticity of our roots to deliver products that truly stand out.
              </p>
              <p className="story-paragraph">
                  For consumers, our promise is to offer more than just dried fruits and nuts. We offer meaningful products — foods that nourish both body and conscience, that respect the environment, and that tell a story of connection between distant worlds. Every package carries not just flavor, but the essence of a place, a people, and a purpose.
              </p>
              <p className="story-paragraph">
                <strong className="story-strong">
                    We are not just exporters.
                    <br />
                    We are a bridge — a bridge between the remote agricultural valleys of Pakistan and the refined distribution networks of Europe; between tradition and innovation; between small farmers and conscious consumers. Our goal is to create a sustainable link that celebrates authenticity while opening new horizons for ethical trade.
                </strong>
              </p>
              <p className="story-paragraph">
                  As we look to the future, our ambition is to expand our network of sustainable farms, introduce organic-certified product lines, and raise awareness across Europe about Pakistan's exceptional agricultural heritage. We want to make ethical sourcing not a niche — but the new standard.
              </p>
              <p className="story-paragraph">
                  By combining tradition, fairness, and excellence, we bring to Europe a taste that goes beyond food — a taste of authenticity, responsibility, and connection.
              </p>
              {/* Certifications and Memberships */}
              <div style={{
                display: 'flex',
                gap: '30px',
                marginTop: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1, minWidth: '120px' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    background: '#2d5a27',
                    color: 'white'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '5px',
                      display: 'block'
                    }}>AB</span>
                    <small style={{
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2
                    }}>AGRICULTURE BIOLOGIQUE</small>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    background: '#4a7c59',
                    color: 'white'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '5px',
                      display: 'block'
                    }}>FT</span>
                    <small style={{
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2
                    }}>FAIR TRADE</small>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    background: '#5cb85c',
                    color: 'white'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '5px',
                      display: 'block'
                    }}>QS</span>
                    <small style={{
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2
                    }}>QUALITY SOURCED</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

        
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

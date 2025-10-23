import React, { useEffect, useState } from 'react';

const OurMission: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive helper functions
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;
  const isSmallMobile = windowWidth <= 480;

  // Inline styles for the component with responsive behavior
  const styles = {
    ourMissionPage: {
      minHeight: '100vh',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
      background: '#ffffff',
    },
    missionHero: {
      height: isSmallMobile ? '40vh' : isMobile ? '45vh' : isTablet ? '50vh' : '60vh',
      minHeight: isSmallMobile ? '300px' : isMobile ? '350px' : isTablet ? '400px' : '500px',
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760635662/Our_mission_cover_photo_pukshx.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : isSmallMobile ? '0 15px' : '0 40px',
      width: '100%',
    },
    heroTitle: {
      fontSize: isSmallMobile ? '2.2rem' : isMobile ? '2.8rem' : isTablet ? '3.2rem' : '4rem',
      fontWeight: 800,
      color: 'white',
      margin: '0 0 20px 0',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    heroSubtitle: {
      fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.1rem',
      fontWeight: 400,
      color: 'white',
      margin: '0',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
      opacity: 0.95,
      maxWidth: '600px',
      lineHeight: 1.5,
    },
    missionMain: {
      background: '#ffffff',
      padding: isSmallMobile ? '40px 0' : isMobile ? '50px 0' : isTablet ? '60px 0' : '80px 0',
      minHeight: '100vh',
      position: 'relative' as const,
    },
    missionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : isSmallMobile ? '0 15px' : '0 40px',
      position: 'relative' as const,
    },
    missionStory: {
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      boxShadow: 'none',
      border: 'none',
      position: 'relative' as const,
      marginBottom: '100px',
      animation: 'fadeInUp 0.8s ease-out',
    },
    storyContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '40px' : isSmallMobile ? '30px' : '80px',
      alignItems: 'start',
      maxWidth: '100%',
    },
    storyText: {
      fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.1rem',
      color: '#333',
      lineHeight: 1.7,
      marginBottom: isSmallMobile ? '15px' : isMobile ? '18px' : '20px',
      fontWeight: 400,
    },
    storyTextH2: {
      fontSize: isSmallMobile ? '1.6rem' : isMobile ? '1.8rem' : isTablet ? '2rem' : '2.2rem',
      color: '#2d5a27',
      marginBottom: isSmallMobile ? '20px' : isMobile ? '25px' : isTablet ? '30px' : '40px',
      fontWeight: 700,
      position: 'relative' as const,
      display: 'block',
      lineHeight: 1.2,
    },
    storyTextH3: {
      fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.4rem' : '1.5rem',
      color: '#2d5a27',
      marginBottom: isSmallMobile ? '10px' : isMobile ? '12px' : '20px',
      fontWeight: 700,
    },
    storyTextStrong: {
      color: '#2d5a27',
      fontWeight: 600,
    },
    storyImage: {
      position: 'relative' as const,
    },
    storyImageImg: {
      width: '100%',
      height: isSmallMobile ? '300px' : isMobile ? '350px' : '100%',
      objectFit: 'cover' as const,
      borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    keyPrinciples: {
      background: 'transparent',
      padding: isSmallMobile ? '40px 0' : isMobile ? '50px 0' : isTablet ? '60px 0' : '80px 0',
      position: 'relative' as const,
      marginBottom: '100px',
      animation: 'fadeInUp 0.8s ease-out',
    },
    principlesContent: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isSmallMobile ? '30px' : isMobile ? '35px' : isTablet ? '40px' : '60px',
      maxWidth: '100%',
    },
    principleItem: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      gap: isSmallMobile ? '25px' : isMobile ? '25px' : '40px',
      padding: isSmallMobile ? '20px 0' : isMobile ? '25px 0' : '40px 0',
      position: 'relative' as const,
      animation: 'fadeInUp 0.8s ease-out',
      animationFillMode: 'both' as const,
      textAlign: isMobile ? 'center' as const : 'left' as const,
    },
    principleIcon: {
      flexShrink: 0,
      width: isSmallMobile ? '50px' : isMobile ? '60px' : isTablet ? '70px' : '80px',
      height: isSmallMobile ? '50px' : isMobile ? '60px' : isTablet ? '70px' : '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      borderRadius: '50%',
      position: 'relative' as const,
      transition: 'all 0.3s ease',
      margin: isMobile ? '0 auto' : '0',
    },
    principleContent: {
      flex: 1,
    },
    principleContentH3: {
      fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.4rem' : isTablet ? '1.6rem' : '1.8rem',
      color: '#2d5a27',
      margin: isSmallMobile ? '0 0 10px 0' : isMobile ? '0 0 12px 0' : '0 0 20px 0',
      fontWeight: 700,
      position: 'relative' as const,
      lineHeight: 1.3,
    },
    principleContentP: {
      fontSize: isSmallMobile ? '0.9rem' : isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem',
      color: '#333',
      lineHeight: 1.7,
      margin: '0',
      fontWeight: 400,
    },
  };

  return (
    <>
      <style>
        {`
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
        `}
      </style>
      <div style={styles.ourMissionPage}>
        {/* Hero Section with Photo Background */}
        <div style={styles.missionHero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Mission</h1>
          <p style={styles.heroSubtitle}>Delivering premium products with responsiveness.</p>
        </div>
      </div>

      {/* Main Content Section - Clean Layout */}
      <div style={styles.missionMain}>
        <div style={styles.missionContainer}>
          {/* Mission Story Section - float image with flowing text */}
          <section className="story-section">
            <div>
              <img
                className="story-image"
                src="https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634026/Our_mission_Page_with_content_ev5h9m.jpg"
                alt="Our mission visual"
              />
              <h2 className="story-heading">Our Mission</h2>
              <p className="story-paragraph">
                At Nutrinoix, our mission is to bring the authentic taste, natural purity, and ethical excellence of northern Pakistan's dried fruits and nuts to the European market — a journey that begins in the high valleys of the Himalayas and ends on the tables of discerning professionals across Europe.
              </p>
              <p className="story-paragraph">
                Our ambition is to bridge traditional craftsmanship and modern standards, creating a transparent value chain that respects both people and the planet. From hand-harvested almonds, soft apricots and figs, golden raisins, wild walnuts to crunchy pistachios, and rich pine nuts to buttery peanuts, each product tells the story of a farmer, a region, and a centuries-old agricultural culture that thrives in harmony with nature.
              </p>
              <p className="story-paragraph">
                We work through a fully direct sourcing model, eliminating intermediaries to ensure traceability, fairness, and control over every stage — from field to delivery. Our trusted network of smallholder farmers is based in Pakistan's most remote and preserved agricultural regions, sometimes near the Afghan and Iranian borders.
              </p>
              <p className="story-paragraph">
                By being directly present on the ground, we oversee cultivation, drying, sorting, and packaging. This gives us full visibility into our supply chain, enabling us to guarantee consistency, safety, and transparency for our European clients — whether they are wholesalers, distributors, manufacturers, or artisans.
              </p>
              <p className="story-paragraph">
                Our model ensures that farmers receive fair, stable compensation, allowing them to sustain their livelihoods and preserve ancestral techniques while empowering rural communities.
              </p>

              <h3 className="story-heading" style={{ fontSize: '1.6rem', marginBottom: '12px' }}><b className="story-strong">Our Promise</b></h3>
              <p className="story-paragraph">
                At Nutrinoix, we are redefining what it means to deliver premium dried fruits and nuts. We unite the purity of nature, the precision of certified quality, and the fairness of direct sourcing to create products that are as authentic as they are trustworthy. Every shipment is traceable, every certificate verifiable, and every product tells a story — a story of origin, integrity, and excellence. We are not just exporter; we are custodians of authenticity, ambassadors of quality, and partners in sustainability. Through Nutrinoix, the finest dried fruits of Pakistan journey from mountain orchards to European tables — safely, ethically, and beautifully.
              </p>

              <h3 className="story-heading" style={{ fontSize: '1.6rem', marginBottom: '12px' }}><b className="story-strong">Certified Quality and Safety Standards</b></h3>
              <p className="story-paragraph">
                At Nutrinoix, quality is not a claim — it is a documented process. Every product undergoes rigorous testing and validation through certified laboratories in compliance with international standards. We ensure that all our shipments are accompanied by:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li className="story-paragraph" style={{ marginBottom: '10px' }}><b className="story-strong">Phytosanitary Certificates</b>, verifying that products meet EU plant health regulations and are free from contaminants or pests.</li>
                <li className="story-paragraph" style={{ marginBottom: '10px' }}><b className="story-strong">ISO 22000 and HACCP-aligned quality checks</b>, ensuring food safety management and traceability from origin to delivery.</li>
                <li className="story-paragraph" style={{ marginBottom: '10px' }}><b className="story-strong">Certificates of Origin</b>, issued by recognized trade authorities, confirming the provenance of our products and reinforcing transparency.</li>
                <li className="story-paragraph" style={{ marginBottom: '10px' }}><b className="story-strong">Batch-level laboratory analyses</b>, testing for moisture content, aflatoxins, heavy metals, and microbial safety to meet European import requirements.</li>
              </ul>
              <p className="story-paragraph">
                These certifications are more than paperwork — they are our commitment to excellence, guaranteeing that every shipment meets both European regulatory standards and Nutrinoix's own quality benchmarks.
              </p>
            </div>
          </section>

          {/* Key Principles Section */}
          <section style={styles.keyPrinciples}>
            <div style={styles.principlesContent}>
              <div style={styles.principleItem}>
                <div style={styles.principleIcon}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="#2d5a27"/>
                    <path d="M12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14C6 10.6863 8.68629 8 12 8Z" fill="#5cb85c" stroke="#2d5a27" strokeWidth="2"/>
                  </svg>
                </div>
                <div style={styles.principleContent}>
                  <h3 style={styles.principleContentH3}>Direct Sourcing</h3>
                  <p style={styles.principleContentP}>
                    We partner directly with smallholder farms across Pakistan to bring you authentic organic dry fruits and nuts.
                    By eliminating middlemen, we ensure fair prices for farmers, empower rural communities, and deliver pure, traceable products straight from the source to your table.
                  </p>
                </div>
              </div>

              <div style={styles.principleItem}>
                <div style={styles.principleIcon}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={styles.principleContent}>
                  <h3 style={styles.principleContentH3}>Organic & Authentic</h3>
                  <p style={styles.principleContentP}>
                    Every product is handpicked and naturally sun-dried to preserve its flavor and nutrients.
                    No additives, no processing — just the wholesome richness of Pakistan's finest orchards and valleys, brought to European consumers with integrity and care.
                  </p>
                </div>
              </div>

              <div style={styles.principleItem}>
                <div style={styles.principleIcon}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L12 3L7 8V21H17V8Z" fill="#2d5a27" stroke="#2d5a27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V12H15V21" fill="#5cb85c" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={styles.principleContent}>
                  <h3 style={styles.principleContentH3}>Sustainable Bridge</h3>
                  <p style={styles.principleContentP}>
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
    </>
  );
};

export default OurMission;

import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import ContactBottomBar from "./components/ContactBottomBar";
import ExploreProducts from "./components/ExploreProducts";
import ProductTypes from "./components/ProductTypes";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import { productsData } from "./data/productsData";
import { Analytics } from "@vercel/analytics/react";

// Easing function

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Counter animation effect

  // Intersection Observer for About section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Trigger a bit before the section is fully visible
      }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Scroll to section if hash is present in URL, or scroll to top if navigating to home
  React.useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">
      <Analytics />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* Hero Section */}
              <section id="home" className="hero-section">
                {/* Video Background */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  {/* <iframe
                    src="https://www.youtube.com/embed/QNFJUjMVEwA?autoplay=1&mute=1&loop=1&playlist=QNFJUjMVEwA&controls=0&showinfo=0&modestbranding=1&vq=hd1080"
                    title="YouTube video player"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullS
                    creen
                  /> */}

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  >
                    <source
                      src="https://res.cloudinary.com/dfrlrzsnk/video/upload/v1760725423/7186189_Nut_Nuts_3840x2160_1_1_dl22v1.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.35)",
                      zIndex: 1,
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      color: "white",
                      textAlign: "left",
                      top: "45%",
                      transform: "translateY(-50%)",
                      fontFamily: "'Poppins', sans-serif",
                      paddingLeft: "2rem",
                    }}
                  >
                   <div className="hero-text" style={{marginTop:"2rem"}}>
                      <h1>
                        Pure
                        <br />
                        <span className="highlight">
                          Taste, Trusted Supply
                        </span>
                        <br />
                        <span style={{ fontSize: "5rem" }}>

                        Nutrinoix
                        </span>
                      </h1>
                      <p>
                        Your trusted partner for premium dried fruits and nuts,
                        sourced from the finest agricultural lands of Pakistan
                      </p>
                     
                    </div>
                  </div>
                </div>

                <div className="hero-overlay">
                  <div className="hero-content">
                  
                  </div>
                </div>
              </section>

              {/* Products Section */}
              <section id="products" className="products-section">
                <div
                  style={{
                    // maxWidth: "1600px",
                    // paddingLeft: "10rem",
                  }}
                >
                  <div className="products-content">
                    <div className="products-text">
                      <h2>Our products</h2>
                      <p>
                        We offer premium quality dry fruits and nuts sourced
                        directly from the finest regions of Pakistan. Our
                        extensive range includes almonds, raisins, pistachios,
                        walnuts, pine nuts, chickpea, peanuts, figs, and
                        apricots – all carefully selected and naturally
                        processed to deliver exceptional quality and authentic
                        taste.
                      </p>
                      <button
                        className="products-button"
                        onClick={() => navigate("/explore-products")}
                      >
                        Explore all products
                      </button>
                    </div>
                    <div className="products-grid">
                      {[
                        "KambriAlmondsShelled",
                        "KillaSaifullahPistachiosUnshelled",
                        "SwatdirWalnutsShelled",
                        "BanuChillasPineNutsUnshelled",
                        "ChakwaliPeanutsUnshelled",
                        "KishtaApricots",
                      ].map((key) => {
                        const product = productsData[key];
                        if (!product) return null;
                        return (
                          <div
                            className="product-item"
                            key={key}
                            onClick={() => navigate(`/product/${key}`)}
                          >
                            <div className="product-photo">
                              <img src={product.heroImage} alt={product.name} />
                            </div>
                            <h3
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              {product.type}
                            </h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
              {/* About Us Section */}
              <section id="about" className="about-section" ref={aboutRef}>
                <div className="container">
                  <div className="about-content">
                    <div
                      className={`about-text ${
                        isAboutVisible ? "animate" : ""
                      }`}
                    >
                      <h2>About us</h2>
                      <p>
                        A committed player in agri-food trade between Pakistan
                        and Europe, we source premium dried fruits and nuts
                        grown in the most fertile regions of Pakistan.
                      </p>
                      <p>
                        Based in Pakistan, we work hand-in-hand with local
                        producers to offer our clients premium quality, full
                        traceability, and ethical sourcing. Handpicked from
                        trusted farms and packed to international standards, our
                        range includes almonds, walnuts, pistachios, raisins,
                        apricots and figs ensuring premium quality and natural
                        freshness. With seamless global shipping and reliable
                        supply, we are your trusted partner in delivering
                        nature’s best.
                      </p>

                      {/* <div className="story-highlight">
                        <p>
                          With one of us connected to the best harvests of
                          Pakistan, and the other familiar with the European
                          market, our duo became our strength.
                        </p>
                      </div> */}
                      <button
                        className="about-button"
                        onClick={() => navigate("/about")}
                      >
                        Learn more about our journey
                      </button>
                    </div>
                    <div
                      className={`about-image ${
                        isAboutVisible ? "animate" : ""
                      }`}
                    >
                      <img
                        src="/assets/images/latestphotos/About Us on homepage.jpg"
                        alt="Two business partners - French and Pakistani friends working together"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Mission Section */}
              <section id="mission" className="mission-section">
                <div className="container">
                  <div className="mission-content">
                    <div className="mission-header">
                      <h2>Our Mission?</h2>
                      <div className="mission-intro">
                        <p>
                          Bridging the gap between Pakistan's unique terroirs
                          and the demands of European professionals, by offering
                          premium quality dried fruits and nuts, cultivated
                          using artisanal methods and selected with care.
                        </p>
                        <p>
                          Through a direct network of partner producers, we
                          ensure full traceability, optimal freshness, and
                          reliable service tailored to the needs of wholesalers,
                          distributors, and food industry professionals.
                        </p>
                        <p>
                          <strong>
                            Healthy, traceable, and above all, delicious.
                          </strong>
                        </p>
                        <p className="mission-tagline">
                          We're not just importers. We're ambassadors of
                          flavour.
                        </p>
                        <div
                      className="mission-cta"
                      style={{ marginBottom: "20px" }}
                    >
                      <button
                        className="about-button"
                        onClick={() => navigate("/mission")}
                      >
                        Learn more about our mission
                      </button>
                    </div>

                      </div>
                    </div>

               
                    <div className="mission-features">
                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 8L12 3L7 8V21H17V8Z"
                              fill="#2d5a27"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 21V12H15V21"
                              fill="#5cb85c"
                              stroke="#5cb85c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h3>Exceptional Origins</h3>
                        <p>
                          Our dried fruits come from the remote mountains of
                          northern Pakistan, near the Afghan border — wild,
                          unspoiled regions whose unique terroirs yield bold,
                          authentic flavors.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                              fill="#2d5a27"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h3>Premium Quality & Artisanal Methods</h3>
                        <p>
                          Hand-picked, sun-dried, and additive-free, our fruits
                          reflect generations of traditional craftsmanship. We
                          focus on rare, heritage varieties with true character
                          — far from industrial norms.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8M16 4V2M16 4V6M8 4V2M8 4V6"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 10H16M8 14H16M8 18H12"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h3>Ethical & Direct Sourcing</h3>
                        <p>
                          We partner directly with small-scale producers to
                          ensure fair pay, no child labor, and sustainable
                          practices. This direct model supports local
                          communities and allows us to offer competitive prices
                          through a fully transparent supply chain.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                              fill="#f8f9fa"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 2V8H20"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 13H8M16 17H8M10 9H8"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h3>Full Traceability & Certifications</h3>
                        <p>
                          Each batch is traceable from field to warehouse,
                          backed by phytosanitary certificates, certificates of
                          origin, and ISO 17025 lab testing.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                              stroke="#2d5a27"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="9" cy="20" r="1" fill="#2d5a27" />
                            <circle cx="20" cy="20" r="1" fill="#2d5a27" />
                          </svg>
                        </div>
                        <h3>Flexible & Reliable Logistics</h3>
                        <p>
                          Available in bulk or custom packaging, we offer
                          tailored Incoterms (FOB, CIF, DDP) and reliable
                          maritime or air freight — with consistent, on-time
                          delivery.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"
                              fill="#2d5a27"
                            />
                            <path
                              d="M12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14C6 10.6863 8.68629 8 12 8Z"
                              fill="#5cb85c"
                              stroke="#2d5a27"
                              strokeWidth="2"
                            />
                            <path
                              d="M12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11Z"
                              fill="#2d5a27"
                            />
                          </svg>
                        </div>
                        <h3>Unique Taste, Proven Quality</h3>
                        <p>
                          From aromatic pistachios to buttery pine nuts, our
                          dried fruits are naturally rich in flavor and
                          nutrients.
                        </p>
                        <div className="sample-offer">
                          <strong>
                            Want proof? Samples available on request.
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div className="mission-cta">
                      <button
                        className="sample-button"
                        onClick={() => navigate("/contact")}
                      >
                        Request Samples
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* History Section */}
              {/* <section id="history" className="history-section">
                <div className="container">
                  <h2>Our history</h2>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">1985</div>
                      <div className="timeline-content">
                        <h3>The family business DryFruit Co. is founded</h3>
                        <img
                          src="/api/placeholder/300/200"
                          alt="Company founding"
                        />
                        <p>
                          The family business was founded in 1985 as a modest
                          family business. In a modest villa business, created
                          from the desire of food crops that are wholesome and
                          fruits. From the very first years DryFruit Co. set
                          alongside the premium wholesale export market.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">1998</div>
                      <div className="timeline-content">
                        <h3>
                          DryFruit Co. sets up in the Premium Quality Division
                        </h3>
                        <img
                          src="/api/placeholder/300/200"
                          alt="Premium quality division"
                        />
                        <p>
                          Expansion of our business; setting new branches in
                          several countries. We decide to operate as a Premium
                          Quality supplier, expanding our reach to international
                          markets. Our commitment to quality never wavered.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">Today</div>
                      <div className="timeline-content">
                        <h3>
                          The third generation also emerges over the long term
                        </h3>
                        <img
                          src="/api/placeholder/300/200"
                          alt="Modern operations"
                        />
                        <p>
                          The third generation has entered over the long term.
                          The continuation of a unique concept. The new family
                          generation is now in charge of the business with
                          modern farming techniques and sustainable practices,
                          ensuring quality for decades to come.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              {/* Statistics Section */}
              {/* <section className="stats-section">
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
              </section> */}
              {/* Follow Us Section */}
              <section className="follow-section">
                <div className="container">
                  <h2>Follow us on the networks</h2>
                  <div className="social-grid">
                    <a href="https://www.facebook.com/people/Nutrinoix/61582638035255/" target="_blank" rel="noreferrer" className="social-card facebook">
                      <div className="social-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <span>Follow us on Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/nutri_noix/" target="_blank" rel="noreferrer" className="social-card instagram">
                      <div className="social-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span>Follow us on Instagram</span>
                    </a>
                    <a href="https://www.youtube.com/@Nutrinoix" target="_blank" rel="noreferrer" className="social-card youtube">
                      <div className="social-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <span>Follow us on YouTube</span>
                    </a>
                    <a href="https://www.linkedin.com/company/nutrinoix" target="_blank" rel="noreferrer" className="social-card linkedin">
                      <div className="social-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </section>
              <ContactBottomBar />
            </>
          }
        />
        <Route path="/explore-products" element={<ExploreProductsWrapper />} />
        <Route
          path="/product-types/:categoryName"
          element={<ProductTypesWrapper />}
        />
        <Route path="/product/:productId" element={<ProductPageWrapper />} />
        <Route path="/contact" element={<ContactUsWrapper />} />
        <Route path="/about" element={<AboutUsWrapper />} />
        <Route path="/mission" element={<OurMissionWrapper />} />
      </Routes>
    </div>
  );
}

// Wrapper to extract productId param and pass to ProductPage
import { useParams } from "react-router-dom";
const ProductPageWrapper = () => {
  const { productId } = useParams<{ productId: string }>();
  return <ProductPage productId={productId} />;
};

// Wrapper for ExploreProducts with Navbar and ContactBottomBar
const ExploreProductsWrapper = () => {
  return (
    <>
      <Navbar />
      <ExploreProducts />
      <ContactBottomBar />
    </>
  );
};

// Wrapper for ProductTypes with Navbar and ContactBottomBar
const ProductTypesWrapper = () => {
  return (
    <>
      <Navbar />
      <ProductTypes />
      <ContactBottomBar />
    </>
  );
};

// Wrapper for ContactUs with Navbar and ContactBottomBar
const ContactUsWrapper = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <ContactBottomBar />
    </>
  );
};

// Wrapper for AboutUs with Navbar and ContactBottomBar
const AboutUsWrapper = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <ContactBottomBar />
    </>
  );
};

// Wrapper for OurMission with Navbar and ContactBottomBar
const OurMissionWrapper = () => {
  return (
    <>
      <Navbar />
      <OurMission />
      <ContactBottomBar />
    </>
  );
};

export default App;

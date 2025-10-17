import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactBottomBar.css";

const ContactBottomBar: React.FC = () => {
  const navigate = useNavigate();

  const styles = {
    wrapper: {
      backgroundColor: "#1f3407",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      padding: "80px 0",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column" as const,
    },
    container: {
      width: "90%",
      maxWidth: "1300px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      margin: "0 auto",
    },
    columnLeft: {
      flex: 1,
      textAlign: "center" as const,
      borderRight: "1px solid rgba(255,255,255,0.4)",
      paddingRight: "40px",
    },
    logo: {
      width: "160px",
      height: "auto",
    },
    columnMiddle: {
      flex: 1,
      padding: "0 40px",
      textAlign: "justify" as const,
      lineHeight: "1.8",
      fontSize: "16px",
      borderRight: "1px solid rgba(255,255,255,0.4)",
    },
    columnRight: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: "8rem",
      display: "flex",
      flexDirection: "column" as const,
      gap: "1rem",
      fontSize: "16px",
      alignItems: "flex-start",
      borderRight: "1px solid rgba(255,255,255,0.4)",
    },
    socialIcons: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "15px",
      marginTop: "1rem",
      marginLeft: "12rem",
    },
    icon: {
      width: "28px",
      height: "28px",
      fill: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    facebookIcon: {
      width: "28px",
      height: "28px",
      fill: "#1877F2",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    youtubeIcon: {
      width: "28px",
      height: "28px",
      fill: "#FF0000",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    instagramIcon: {
      width: "28px",
      height: "28px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    linkedinIcon: {
      width: "28px",
      height: "28px",
      fill: "#0077B5",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    link: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
    },
    footerWrapper: {
      backgroundColor: "#040714",
      color: "#6ec62e",
      textAlign: "center" as const,
      padding: "15px 0",
      fontSize: "14px",
      fontWeight: 400,
    },
    footerLink: {
      color: "#6ec62e",
      textDecoration: "none",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.columnLeft}>
            <img
              src="/assets/images/latestphotos/Nutrinoix LOGO wb.png"
              alt="Logo"
              style={styles.logo}
            />
            <p
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              +33 780790330
            </p>
            <p style={{ color: "white", fontSize: "15px", margin: 0, lineHeight: "1.5" }}>
              ARYANA INDUS COMPANY PVT LTD Lahore, Pakistan
            </p>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>





          </div>

          <div style={styles.columnMiddle}>
            Our company, born in Lyon from the alliance between a French and a
            Pakistani entrepreneur, builds a direct bridge between Pakistan and
            European professionals. Specialized in the trade of premium dried
            fruits and nuts, we source our products directly to ensure quality
            and traceability.
            
          </div>

          <div style={styles.columnRight}>
            <a style={styles.link} onClick={() => navigate("/about")}>
              About us
            </a>
            <a
              style={styles.link}
              onClick={() => navigate("/explore-products")}
            >
              Our Products
            </a>
            <a style={styles.link} onClick={() => navigate("/mission")}>
              Our Mission
            </a>
            <a style={styles.link} onClick={() => navigate("/contact")}>
              Contact Form
            </a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
            <a style={styles.link}></a>
          </div>

          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg
                style={styles.facebookIcon}
                className="social-icon facebook-icon"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.324v21.352C0 23.406.596 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.92.001c-1.506 0-1.797.717-1.797 1.767v2.32h3.59l-.467 3.696h-3.123V24h6.127C23.405 24 24 23.406 24 22.676V1.324C24 .592 23.405 0 22.675 0z" />
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <svg
                style={styles.youtubeIcon}
                className="social-icon youtube-icon"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.122C19.551 3.5 12 3.5 12 3.5s-7.551 0-9.386.564A2.997 2.997 0 0 0 .502 6.186C0 8.02 0 12 0 12s0 3.98.502 5.814a2.997 2.997 0 0 0 2.112 2.122C4.449 20.5 12 20.5 12 20.5s7.551 0 9.386-.564a2.997 2.997 0 0 0 2.112-2.122C24 15.98 24 12 24 12s0-3.98-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
              </svg>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg
                style={styles.instagramIcon}
                className="social-icon instagram-icon"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="instagram-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instagram-gradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg
                style={styles.linkedinIcon}
                className="social-icon linkedin-icon"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.89v-5.412c0-1.291-.027-2.951-1.799-2.951-1.8 0-2.077 1.403-2.077 2.853v5.51h-3.556V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.27 2.372 4.27 5.455v6.286zM5.337 7.433A2.062 2.062 0 1 1 5.338 3.31a2.062 2.062 0 0 1-.001 4.123zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.footerWrapper}>
        <a style={styles.footerLink}>Legal notices</a> | Copyright © 2025{" "}
        <span style={styles.footerLink}>Nutrinoix</span> production,{" "}
        <span style={styles.footerLink}>Nutrinoix</span>
      </div>
    </>
  );
};

export default ContactBottomBar;

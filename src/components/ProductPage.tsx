import React, { useState, useEffect, useRef } from 'react';
import type { default as ImageGalleryType } from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import type { Product } from '../data/productsData';
import { getProductById, allProducts } from '../data/productsData';
import Navbar from './Navbar';
import ContactBottomBar from './ContactBottomBar';
import './ProductPage.css';
import ProductOriginMap from './ProductOriginMap';

interface ProductPageProps {
  productId?: string;
  onProductChange?: (productId: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId = 'almonds', onProductChange }) => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [selectedVariety, setSelectedVariety] = useState<string>('');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [fruitsSectionVisible, setFruitsSectionVisible] = useState<boolean>(false);
  const fruitsSectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<InstanceType<typeof ImageGalleryType> | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const product = getProductById(productId);
    setCurrentProduct(product || null);
    setSelectedVariety('');
  }, [productId]);

  // Intersection Observer for 'Even more fruits' section
  useEffect(() => {
    const section = fruitsSectionRef.current;
    if (!section) return;
    let observer: IntersectionObserver;
    if (!fruitsSectionVisible) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setFruitsSectionVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(section);
    }
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, [fruitsSectionVisible]);

  const handleProductChange = (newProductId: string) => {
    const product = getProductById(newProductId);
    setCurrentProduct(product || null);
    setSelectedVariety('');
    if (onProductChange) {
      onProductChange(newProductId);
    }
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavbarProductSelect = (productId: string) => {
    handleProductChange(productId);
  };

  const handleVarietyClick = (varietyId: string) => {
    setSelectedVariety(selectedVariety === varietyId ? '' : varietyId);
  };

  // Filter out current product from related products
  const relatedProducts = allProducts.filter(product => product.id !== currentProduct?.id);

  const handlePrevious = () => {
    setCarouselIndex(prevIndex =>
      prevIndex === 0 ? relatedProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCarouselIndex(prevIndex =>
      prevIndex === relatedProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get visible products (show 4 at a time)
  const getVisibleProducts = () => {
    const visibleCount = 4;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (carouselIndex + i) % relatedProducts.length;
      visible.push(relatedProducts[index]);
    }
    return visible;
  };

  // Get the selected variety object
  const selectedVarietyObj = currentProduct?.varieties.find(v => v.id === selectedVariety) || currentProduct?.varieties[0];

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const visibleProducts = getVisibleProducts();

  // Handler for gallery slide
  const handleGallerySlide = (index: number) => {
    setGalleryIndex(index);
  };

  return (
    <div className="product-page">
      <Navbar onProductSelect={handleNavbarProductSelect} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={currentProduct.heroImage} alt={currentProduct.name} className="hero-image" />
          <div className="hero-title-overlay">
            <h1 className="hero-title">Our {currentProduct.name}</h1>
          </div>
        </div>
      </section>

      {/* Main Product Section - Image Center, Info Card Right */}
      <section className="main-product-section">
        <div className="container">
          <div className="hero-product-layout">
            {/* Image Gallery - Center */}
            <div className="hero-image-gallery">
              {currentProduct.images && currentProduct.images.length > 0 ? (
                <div className="hero-gallery-container">
                  <ImageGallery
                    ref={galleryRef}
                    items={currentProduct.images.map((img) => ({
                      original: img,
                      thumbnail: img,
                      originalAlt: currentProduct.name,
                      thumbnailAlt: currentProduct.name
                    }))}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showNav={true}
                    showBullets={false}
                    lazyLoad={false}
                    onSlide={handleGallerySlide}
                  />
                  <div className="custom-gallery-indicators">
                    <div className="indicators-row">
                      {currentProduct.images.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          aria-label={`Go to image ${idx + 1}`}
                          className={`indicator-dot ${galleryIndex === idx ? 'active' : ''}`}
                          onClick={() => {
                            if (galleryRef.current) {
                              galleryRef.current.slideToIndex(idx);
                              setGalleryIndex(idx);
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hero-single-image">
                  <img src={currentProduct.heroImage} alt={currentProduct.name} />
                  <div className="hero-image-overlay">
                    <div className="premium-badge">Premium Quality</div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Info Card - Right Side */}
            <div className="hero-info-card">
              <div className="hero-card-header">
                <h2 className="hero-product-title">{currentProduct.name}</h2>
                <p className="hero-product-tagline">Premium selection for global kitchens</p>
              </div>

              {/* Quick Facts Grid */}
              <div className="quick-facts-grid">
                {currentProduct.details?.origin && (
                  <div className="quick-fact-item">
                    <div className="fact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="fact-content">
                      <h4>Origin</h4>
                      <p>{currentProduct.details.origin[0]}</p>
                    </div>
                  </div>
                )}

                {currentProduct.details?.calibre && (
                  <div className="quick-fact-item">
                    <div className="fact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="fact-content">
                      <h4>Grade</h4>
                      <p>{currentProduct.details.calibre[0]}</p>
                    </div>
                  </div>
                )}

                {currentProduct.details?.storage && (
                  <div className="quick-fact-item">
                    <div className="fact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="fact-content">
                      <h4>Storage</h4>
                      <p>Cool & dry place</p>
                    </div>
                  </div>
                )}

                <div className="quick-fact-item">
                  <div className="fact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="fact-content">
                    <h4>Quality</h4>
                    <p>Export standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Excellence Section - Icon-based One-liners */}
      {currentProduct.details && (
        <section className="product-excellence-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Product Excellence</h2>
              <p className="section-subtitle">What makes our products exceptional</p>
            </div>

            <div className="excellence-grid">
              {currentProduct.details.origin && (
                <div className="excellence-card">
                  <div className="excellence-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3>🌱 Premium Origins</h3>
                  <p>From the finest farms</p>
                </div>
              )}

              {currentProduct.details.calibre && (
                <div className="excellence-card">
                  <div className="excellence-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3>📦 Size & Grade</h3>
                  <p>Uniform, export quality</p>
                </div>
              )}

              {currentProduct.details.application && (
                <div className="excellence-card">
                  <div className="excellence-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3>🍲 Applications</h3>
                  <p>Snacks, flours, traditional dishes</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - Big Highlight Cards */}
      {currentProduct.details?.reasonToBelieve && (
        <section className="why-choose-us-section">
          <div className="container">
            <h2 className="section-title">Why Choose Our {currentProduct.name}</h2>
            <div className="highlight-cards-grid">
              {currentProduct.details.reasonToBelieve.slice(0, 3).map((item, idx) => (
                <div key={idx} className="highlight-card">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="highlight-text">✅ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications Section - Visual Icons */}
      {currentProduct.details?.application && (
        <section className="applications-section">
          <div className="container">
            <h2 className="section-title">Perfect For</h2>
            <div className="applications-grid">
              {currentProduct.details.application.map((app, idx) => (
                <div key={idx} className="application-item">
                  <div className="app-icon">
                    {/* Dynamic icons based on application type */}
                    {app.toLowerCase().includes('snack') && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2" />
                        <path d="M1 12h6m6 0h6" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                    {app.toLowerCase().includes('flour') && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" />
                        <path d="M16 21v-4a4 4 0 0 0-8 0v4" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                    {(app.toLowerCase().includes('curry') || app.toLowerCase().includes('dish')) && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {(!app.toLowerCase().includes('snack') && !app.toLowerCase().includes('flour') && !app.toLowerCase().includes('curry') && !app.toLowerCase().includes('dish')) && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <p className="app-text">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendar of Varieties and Origin Section */}
      <section className="varieties-origin-section">
        <div className="container">
          <div className="varieties-origin-content">

            {/* Calendar of Varieties */}
            <div className="varieties-calendar">
              <h3>Calendar of our varieties</h3>

              <div className="varieties-list">
                {currentProduct.varieties.map((variety) => (
                  <div
                    key={variety.id}
                    className={`variety-item ${selectedVariety === variety.id ? 'active' : ''}`}
                    onClick={() => handleVarietyClick(variety.id)}
                  >
                    <span className="variety-name">{variety.name}</span>
                    {selectedVariety === variety.id && (
                      <div className="variety-description">
                        <p>{variety.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability Bar Chart */}
              {selectedVarietyObj && selectedVarietyObj.availability ? (
                <div className="availability-chart">
                  <div className="chart-months">
                    {selectedVarietyObj.availability.map((month) => (
                      <div key={month.month} className="month-column">
                        <div className="month-label">{month.month}</div>
                        <div className={`availability-bar ${month.available ? 'available' : 'unavailable'}`}>
                          {month.available && <div className="bar-fill"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Origin Map */}
            <div className="origin-section">
              <h3>Origin</h3>
              <div className="origin-map">
                <ProductOriginMap origins={currentProduct.origins} />
                <div className="origin-list">
                  <h4>Our sources:</h4>
                  <ul>
                    {currentProduct.origins.map((origin) => (
                      <li key={origin.name}>{origin.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Even More Fruits Section */}
      <section
        className={`more-fruits-section${fruitsSectionVisible ? ' animate-bottom-to-top' : ''}`}
        ref={fruitsSectionRef}
      >
        <div className="container">
          <h2>Even more fruits</h2>
          <div className="fruits-carousel">
            <button className="carousel-btn prev-btn" onClick={handlePrevious} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="fruits-grid">
              {visibleProducts.map((product, index) => (
                <div
                  key={`${product.id}-${carouselIndex}-${index}`}
                  className="fruit-item"
                  onClick={() => handleProductChange(product.id)}
                >
                  <div className="fruit-image">
                    <img
                      src={product.heroImage}
                      alt={product.name}
                    />
                  </div>
                  <div className="fruit-name">{product.name}</div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <ContactBottomBar />
    </div>
  );
};

export default ProductPage;
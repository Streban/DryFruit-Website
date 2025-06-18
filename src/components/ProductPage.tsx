import React, { useState, useEffect, useRef } from 'react';
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

      {/* Product Description Section */}
      <section className="product-description-section">
        <div className="container">
          <div className="description-content">
            <h2 className="product-name">{currentProduct.name}</h2>
            
            <div className="description-layout">
              <div className="description-image">
                <img src={currentProduct.heroImage} alt={currentProduct.name} />
              </div>
              <div className="description-text">
                <p className="main-description">{currentProduct.description}</p>
                <p className="detailed-description">{currentProduct.detailedDescription}</p>
                {currentProduct.nutritionalInfo && (
                  <div className="nutritional-info">
                    <h4>Nutritional Benefits:</h4>
                    <p>{currentProduct.nutritionalInfo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <img src={product.heroImage} alt={product.name} />
                  </div>
                  <div className="fruit-name">{product.name}</div>
                </div>
              ))}
            </div>
            
            <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
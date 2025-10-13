import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import './ExploreProducts.css';

const ExploreProducts: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const navigate = useNavigate();

  // Get base product categories with representative images
  const getBaseCategories = () => {
    const baseCategories: { [key: string]: { image: string, count: number } } = {
      'Almonds': { image: '', count: 0 },
      'Pistachios': { image: '', count: 0 },
      'Figs': { image: '', count: 0 },
      'Pine Nuts': { image: '', count: 0 },
      'Peanuts': { image: '', count: 0 },
      'Chickpeas': { image: '', count: 0 },
      'Walnuts': { image: '', count: 0 },
      'Apricots': { image: '', count: 0 },
      'Raisins': { image: '', count: 0 },
      'Chickpea': { image: '', count: 0 }
    };

    Object.entries(productsData).forEach(([, product]) => {
      const type = product.type.toLowerCase();
      
      if (type.includes('almond')) {
        if (!baseCategories['Almonds'].image) baseCategories['Almonds'].image = product.heroImage;
        baseCategories['Almonds'].count++;
      } else if (type.includes('pista')) {
        if (!baseCategories['Pistachios'].image) baseCategories['Pistachios'].image = product.heroImage;
        baseCategories['Pistachios'].count++;
      } else if (type.includes('fig')) {
        if (!baseCategories['Figs'].image) baseCategories['Figs'].image = product.heroImage;
        baseCategories['Figs'].count++;
      } else if (type.includes('pine')) {
        if (!baseCategories['Pine Nuts'].image) baseCategories['Pine Nuts'].image = product.heroImage;
        baseCategories['Pine Nuts'].count++;
      } else if (type.includes('peanut') || type.includes('chakwali')) {
        if (!baseCategories['Peanuts'].image) baseCategories['Peanuts'].image = product.heroImage;
        baseCategories['Peanuts'].count++;
      } else if (type.includes('channa') || type.includes('chanay')) {
        if (!baseCategories['Chickpeas'].image) baseCategories['Chickpeas'].image = product.heroImage;
        baseCategories['Chickpeas'].count++;
      } else if (type.includes('walnut')) {
        if (!baseCategories['Walnuts'].image) baseCategories['Walnuts'].image = product.heroImage;
        baseCategories['Walnuts'].count++;
      } else if (type.includes('apricot')) {
        if (!baseCategories['Apricots'].image) baseCategories['Apricots'].image = product.heroImage;
        baseCategories['Apricots'].count++;
      } else if (type.includes('raisin')) {
        if (!baseCategories['Raisins'].image) baseCategories['Raisins'].image = product.heroImage;
        baseCategories['Raisins'].count++;
      } else if (type.includes('chickpea')) {
        if (!baseCategories['Chickpea'].image) baseCategories['Chickpea'].image = product.heroImage;
        baseCategories['Chickpea'].count++;
      }
    });

    // Filter out categories with no products
    return Object.fromEntries(
      Object.entries(baseCategories).filter(([, data]) => data.count > 0)
    );
  };

  const baseCategories = getBaseCategories();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/product-types/${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="explore-products">
      <div className="explore-products-container">
        {/* Header Section */}
        <div className="explore-header">
          <h1>Explore all products</h1>
          <p>Discover our premium collection of dry fruits and nuts sourced from the finest regions of Pakistan</p>
        </div>

        {/* Base Product Categories */}
        <div className="products-grid">
          {Object.entries(baseCategories).map(([categoryName, categoryData]) => (
            <div 
              key={categoryName}
              className="product-card"
              onClick={() => handleCategoryClick(categoryName)}
            >
              <div className="product-image-container">
                <img 
                  src={categoryData.image} 
                  alt={categoryName}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{categoryName}</h3>
                <button className="find-out-more-btn">
                  FIND OUT MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
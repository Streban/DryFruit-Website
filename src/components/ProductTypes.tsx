import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsData, type Product } from '../data/productsData';
import './ProductTypes.css';

const ProductTypes: React.FC = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const [selectedSubtype, setSelectedSubtype] = useState<'shelled' | 'unshelled'>('shelled');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); 
  // Convert URL parameter back to category name
  const getCategoryDisplayName = (urlName: string | undefined): string => {
    if (!urlName) return '';
    return urlName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const categoryDisplayName = getCategoryDisplayName(categoryName);

  // Get products for this category
  const getProductsForCategory = () => {
    if (!categoryName) return [];
    
    const products: Array<[string, Product]> = [];
    
    Object.entries(productsData).forEach(([key, product]) => {
      const type = product.type.toLowerCase();
      
      // Match based on category name
      if (categoryName.includes('almonds') && type.includes('almond')) {
        products.push([key, product]);
      } else if (categoryName.includes('pistachios') && type.includes('pista')) {
        products.push([key, product]);
      } else if (categoryName.includes('figs') && type.includes('fig')) {
        products.push([key, product]);
      } else if (categoryName.includes('pine-nuts') && type.includes('pine')) {
        products.push([key, product]);
      } else if (categoryName.includes('peanuts') && (type.includes('peanut') || type.includes('chakwali'))) {
        products.push([key, product]);
      } else if (categoryName.includes('chickpeas') && (type.includes('channa') || type.includes('chanay'))) {
        products.push([key, product]);
      } else if (categoryName.includes('walnuts') && type.includes('walnut')) {
        products.push([key, product]);
      } else if (categoryName.includes('apricots') && type.includes('apricot')) {
        products.push([key, product]);
      } else if (categoryName.includes('raisins') && type.includes('raisin')) {
        products.push([key, product]);
      } else if (categoryName.includes('chickpea') && type.includes('chickpea')) {
        products.push([key, product]);
      }
    });

    return products;
  };

  const allProducts = getProductsForCategory();

  // Check if this category has shelled/unshelled variants
  const hasShellVariants = () => {
    return allProducts.some(([key]) => {
      const keyLower = key.toLowerCase();
      return keyLower.includes('shelled') || keyLower.includes('unshelled') || keyLower.includes('w shell');
    });
  };

  // Filter products based on selected subtype (only for categories with shell variants)
  const getFilteredProducts = () => {
    // If category doesn't have shell variants, return all products
    if (!hasShellVariants()) {
      return allProducts;
    }

    return allProducts.filter(([key]) => {
      const keyLower = key.toLowerCase();
      console.log("Key is ",keyLower)
      if (selectedSubtype === 'shelled') {
        // Only show products that are explicitly shelled (not unshelled)
        return keyLower.includes('shelled') && !keyLower.includes('unshelled');
      } else if (selectedSubtype === 'unshelled') {
        // Show products that are unshelled or have "w shell" (with shell)
        return keyLower.includes('unshelled') || keyLower.includes('w shell');
      }
      
      return false;
    });
  };

  const products = getFilteredProducts();
console.log(products)
  const handleProductClick = (productKey: string) => {
    navigate(`/product/${productKey}`);
  };

  const handleBackClick = () => {
    navigate('/explore-products');
  };

  const handleSubtypeChange = (subtype: 'shelled' | 'unshelled') => {
    setSelectedSubtype(subtype);
  };

  if (allProducts.length === 0) {
    return (
      <div className="product-types">
        <div className="product-types-container">
          <div className="not-found">
            <h1>Category not found</h1>
            <button onClick={handleBackClick} className="back-button">
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-types">
      <div className="product-types-container">
        {/* Header Section */}
        <div className="types-header">
          <button onClick={handleBackClick} className="back-button">
            ← Back to Products
          </button>
          <h1>{categoryDisplayName}</h1>
          <p>Explore all varieties of {categoryDisplayName.toLowerCase()} we offer</p>
        </div>

        {/* Subtype Filter - Only show for categories with shell variants */}
        {hasShellVariants() && (
          <div className="subtype-filter">
            <button 
              className={`subtype-btn ${selectedSubtype === 'shelled' ? 'active' : ''}`}
              onClick={() => handleSubtypeChange('shelled')}
            >
              Shelled
            </button>
            <button 
              className={`subtype-btn ${selectedSubtype === 'unshelled' ? 'active' : ''}`}
              onClick={() => handleSubtypeChange('unshelled')}
            >
              Unshelled
            </button>
          </div>
        )}

        {/* Product Types Grid */}
        <div className="types-grid">
          {products.map(([productKey, product]) => (
            <div 
              key={productKey}
              className="type-card"
              onClick={() => handleProductClick(productKey)}
            >
              <div className="type-image-container">
                <img 
                  src={product.heroImage} 
                  alt={product.name}
                  className="type-image"
                />
              </div>
              <div className="type-info">
                <h3 className="type-name">{product.navName || product.type}</h3>
                <button className="view-details-btn">
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
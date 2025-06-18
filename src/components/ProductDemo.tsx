import React, { useState } from 'react';
import ProductPage from './ProductPage';
import { getAllProductNames } from '../data/productsData';
import './ProductDemo.css';

const ProductDemo: React.FC = () => {
  const [currentProductId, setCurrentProductId] = useState('almonds');
  const productNames = getAllProductNames();

  return (
    <div className="product-demo">
      {/* Product Selector for Demo */}
      <div className="product-selector">
        <div className="selector-container">
          <h3>Select Product to View:</h3>
          <div className="product-buttons">
            {productNames.map((productId) => (
              <button
                key={productId}
                className={`product-btn ${currentProductId === productId ? 'active' : ''}`}
                onClick={() => setCurrentProductId(productId)}
              >
                {productId.charAt(0).toUpperCase() + productId.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductPage productId={currentProductId} />
    </div>
  );
};

export default ProductDemo;

import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loader">
        <div className="spinner"></div>
        <h1 className="loading-title">DryFruitApp</h1>
        <p className="loading-subtitle">Loading the finest dry fruits...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

import React, { useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/productsData';

interface NavbarProps {
  onProductSelect?: (productId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProductSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsHover = () => {
    setIsProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    setIsProductsDropdownOpen(false);
  };

  const handleProductClick = (productId: string) => {
    if (onProductSelect) {
      onProductSelect(productId);
    }
    setIsProductsDropdownOpen(false);
    setIsMenuOpen(false);
    setSearchTerm('');
    setIsSearchFocused(false);
  };

  const handleDropdownToggle = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // Search logic
  const filteredProducts = searchTerm.trim()
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : [];

  // Handle click outside to close search dropdown
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    }
    if (isSearchFocused) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchFocused]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - Left Side */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)} style={{display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none'}}>
            <img src="/api/placeholder/120/60" alt="DryFruit Co." className="logo-img" />
            <span className="logo-text">DryFruit Co.</span>
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li 
            className="navbar-item dropdown"
            onMouseEnter={handleProductsHover}
            onMouseLeave={handleProductsLeave}
          >
            <Link to="/#products" onClick={() => setIsMenuOpen(false)}>

            <button 
              className="navbar-link dropdown-toggle"
              onClick={handleDropdownToggle}
              type="button"
              >
              Our Products
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`}
                >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            </Link>
            <div className={`dropdown-menu ${isProductsDropdownOpen ? 'show' : ''}`}>
              <Link to="/product/almonds" onClick={() => handleProductClick('almonds')} className="dropdown-item">Almonds</Link>
              <Link to="/product/raisin" onClick={() => handleProductClick('raisin')} className="dropdown-item">Raisin</Link>
              <Link to="/product/pistachio" onClick={() => handleProductClick('pistachio')} className="dropdown-item">Pistachio</Link>
              <Link to="/product/walnuts" onClick={() => handleProductClick('walnuts')} className="dropdown-item">Walnuts</Link>
              <Link to="/product/pinenuts" onClick={() => handleProductClick('pinenuts')} className="dropdown-item">Pine Nuts</Link>
              <Link to="/product/hazelnuts" onClick={() => handleProductClick('hazelnuts')} className="dropdown-item">Hazelnuts</Link>
              <Link to="/product/peanuts" onClick={() => handleProductClick('peanuts')} className="dropdown-item">Peanuts</Link>
              <Link to="/product/fig" onClick={() => handleProductClick('fig')} className="dropdown-item">Fig</Link>
              <Link to="/product/apricot" onClick={() => handleProductClick('apricot')} className="dropdown-item">Apricot</Link>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/#history" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Our History</Link>
          </li>
          <li className="navbar-item">
            <Link to="/#visit" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Search and Mobile Menu - Right Side */}
        <div className="navbar-right">
          <div className="search-container" style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              ref={searchInputRef}
            />
        
            {isSearchFocused && filteredProducts.length > 0 && (
              <div className="search-dropdown" style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                width: '100%',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                zIndex: 2000,
                maxHeight: '320px',
                overflowY: 'auto',
                padding: '8px 0',
              }}>
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="search-result-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #f0f0f0',
                      color: '#2d6a4f',
                    }}
                    onMouseDown={() => handleProductClick(product.id)}
                  >
                    <img src={product.heroImage} alt={product.name} style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
                    <span style={{ fontWeight: 500 }}>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
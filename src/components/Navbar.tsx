import React, { useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

interface NavbarProps {
  onProductSelect?: (productId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProductSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  // Track which top-level product category is active in the mega dropdown
  const [activeCategory, setActiveCategory] = useState<'dry' | 'whole' | 'shelled' | ''>('');
  const [activeSubsection, setActiveSubsection] = useState<string>('');
  const [submenuFlip, setSubmenuFlip] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsHover = () => {
    setIsProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    setIsProductsDropdownOpen(false);
    setActiveSubsection('');
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

  // Responsive detection and dynamic flip for third panel
  React.useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Recalculate flip when resizing
      if (dropdownMenuRef.current) {
        const rect = dropdownMenuRef.current.getBoundingClientRect();
        const estimatedWidth = 560; // approx width for middle+right panels
        const willOverflow = rect.right + estimatedWidth > (window.innerWidth - 16);
        setSubmenuFlip(willOverflow);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isProductsDropdownOpen, activeCategory]);

  // Build entries for precise selection using productsData keys
  const productEntries = Object.entries(productsData);
  
  // Search logic over entries so we can send the correct key to onProductSelect
  const filteredProducts = searchTerm.trim()
    ? productEntries.filter(([, product]) =>
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : [];

  // Predefined groupings for the multi-level dropdown. Keys must match productsData keys.
  const dryFruitMap: Record<string, string[]> = {
    Raisins: ['PeelaKandhariRaisin', 'SultanaRaisins', 'KalaPishin'],
    Apricot: ['KishtaApricots', 'GolApricots', 'NaagApricots'],
    Fig: ['RegularFigs', 'PremiumFigs'],
  };

  const wholeNutsMap: Record<string, string[]> = {
    Almonds: ['KambriAlmondsUnshelled', 'KalamDanaAlmondsUnshelled', 'KattaJumboAlmondsUnshelled'],
    Pistachio: ['KillaSaifullahPistachiosUnshelled', 'ZiaratPistachiosUnshelled'],
    Pinenuts: ['BanuChillasPineNutsUnshelled', 'WaziriPineNutsUnshelled'],
    Walnut: ['SwatdirWalnutsUnshelled', 'KaghziWalnutsUnshelled'],
    'Kala Channa': ['FaraKaKalaChannaUnshelled', 'KhilayKalaChannaUnshelled'],
    Peanuts: ['ParaChinarPeanutsUnshelled', 'ChakwaliPeanutsUnshelled'],
  };

  const shelledNutsMap: Record<string, string[]> = {
    Almonds: ['KambriAlmondsShelled', 'KalamDanaAlmondsShelled', 'KattaJumboAlmondsShelled'],
    Pistachio: ['KillaSaifullahPistachiosShelled', 'ZiaratPistachiosShelled'],
    Pinenuts: ['BanuChillasPineNutsShelled', 'WaziriPineNutsShelled'],
    Walnut: ['SwatdirWalnutsShelled', 'KaghziWalnutsShelled'],
    'Kala Channa': ['FaraKaKalaChannaShelled', 'KhilayKalaChannaShelled'],
    Peanuts: ['ParaChinarPeanutsShelled', 'ChakwaliPeanutsShelled'],
  };

  const categoryToMap = (category: 'dry' | 'whole' | 'shelled'): Record<string, string[]> => {
    if (category === 'dry') return dryFruitMap;
    if (category === 'whole') return wholeNutsMap;
    return shelledNutsMap;
  };

  const renderSubmenu = (category: 'dry' | 'whole' | 'shelled') => {
    const map = categoryToMap(category);
    const subsections = Object.keys(map);
    const ensureSubsection = () => {
      if (!activeSubsection || !subsections.includes(activeSubsection)) {
        setActiveSubsection(subsections[0] || '');
      }
    };
    ensureSubsection();
    const productsKeys = activeSubsection ? map[activeSubsection] : [];
    return (
      <div
        className="submenu-panel"
        onMouseEnter={() => setActiveCategory(category)}
        style={{
          display: 'flex',
          gap: 16,
          padding: '12px 8px',
          minWidth: isMobile ? undefined : 520,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {(!submenuFlip || isMobile) ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 200, borderRight: isMobile ? undefined : '1px solid #eaeaea', paddingRight: isMobile ? 0 : 8 }}>
              {subsections.map((section) => (
                <div
                  key={section}
                  className={`dropdown-item${activeSubsection === section ? ' active' : ''}`}
                  onMouseEnter={() => setActiveSubsection(section)}
                  style={{ fontWeight: activeSubsection === section ? 600 : 400 }}
                >
                  {section}
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 4, minWidth: isMobile ? undefined : 300 }}>
              {productsKeys && productsKeys.map((key) => {
                const product = productsData[key];
                if (!product) return null;
                return (
                  <div
                    key={key}
                    className="dropdown-item"
                    onMouseDown={() => handleProductClick(key)}
                    style={{ display: 'block', padding: '6px 8px', margin: 0 }}
                  >
                    <span>{product.name}</span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 4, minWidth: 300 }}>
              {productsKeys && productsKeys.map((key) => {
                const product = productsData[key];
                if (!product) return null;
                return (
                  <div
                    key={key}
                    className="dropdown-item"
                    onMouseDown={() => handleProductClick(key)}
                    style={{ display: 'block', padding: '6px 8px', margin: 0 }}
                  >
                    <span>{product.name}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 200, borderLeft: '1px solid #eaeaea', paddingLeft: 8 }}>
              {subsections.map((section) => (
                <div
                  key={section}
                  className={`dropdown-item${activeSubsection === section ? ' active' : ''}`}
                  onMouseEnter={() => setActiveSubsection(section)}
                  style={{ fontWeight: activeSubsection === section ? 600 : 400 }}
                >
                  {section}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

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
            <img src="/assets/images/latestphotos/Nutrinoix LOGO wb.png" alt="DryFruit Co." className="logo-img" />
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
            onMouseLeave={() => { handleProductsLeave(); setActiveCategory(''); }}
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
            <div className={`dropdown-menu ${isProductsDropdownOpen ? 'show' : ''}`} style={{ display: 'flex', gap: 16 }}>
              {/* Left rail: top-level categories */}
              <div className="top-level-categories" style={{ display: 'flex', flexDirection: 'column', minWidth: 200 }}>
                <div
                  className={`dropdown-item${activeCategory === 'dry' ? ' active' : ''}`}
                  onMouseEnter={() => setActiveCategory('dry')}
                >
                  Dry Fruits
                </div>
                <div
                  className={`dropdown-item${activeCategory === 'whole' ? ' active' : ''}`}
                  onMouseEnter={() => setActiveCategory('whole')}
                >
                  Whole Nuts
                </div>
                <div
                  className={`dropdown-item${activeCategory === 'shelled' ? ' active' : ''}`}
                  onMouseEnter={() => setActiveCategory('shelled')}
                >
                  Shelled Nuts
                </div>
              </div>

              {/* Right panel: sub menu for active category */}
              {activeCategory && (
                <div style={{ borderLeft: '1px solid #eaeaea', }}>
                  {renderSubmenu(activeCategory)}
                </div>
              )}
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
                {filteredProducts.map(([key, product]) => (
                  <div
                    key={key}
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
                    onMouseDown={() => handleProductClick(key)}
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
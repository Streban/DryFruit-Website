import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsData } from '../data/productsData'
import './Navbar.css'

const Navbar = () => {
  // Desktop hover states
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null)
  const [hoveredThirdMenu, setHoveredThirdMenu] = useState<string | null>(null)
  
  // Mobile menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null)
  const [mobileExpandedSubMenu, setMobileExpandedSubMenu] = useState<string | null>(null)
  const [mobileExpandedThirdMenu, setMobileExpandedThirdMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const navigate = useNavigate()

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileExpandedMenu(null)
    setMobileExpandedSubMenu(null)
    setMobileExpandedThirdMenu(null)
  }, [navigate])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      // Reset all expanded states when closing
      setMobileExpandedMenu(null)
      setMobileExpandedSubMenu(null)
      setMobileExpandedThirdMenu(null)
    }
  }

  // Handle navigation to product page
  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`)
    // Close all menus
    setHoveredMenu(null)
    setHoveredSubMenu(null)
    setHoveredThirdMenu(null)
    setIsMobileMenuOpen(false)
    setMobileExpandedMenu(null)
    setMobileExpandedSubMenu(null)
    setMobileExpandedThirdMenu(null)
  }

  // Map category names to URL-friendly types that ProductTypes expects
  const getCategoryType = (categoryName: string): string => {
    const typeMap: Record<string, string> = {
      'Almonds': 'almonds',
      'Pistachio': 'pistachios', 
      'Pinenuts': 'pine-nuts',
      'Walnut': 'walnuts',
      'Kala Channa': 'chickpeas',
      'Peanuts': 'peanuts',
      'Raisins': 'raisins',
      'Apricot': 'apricots',
      'Fig': 'figs'
    }
    return typeMap[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-')
  }

  // Handle navigation to product types page
  const handleCategoryClick = (categoryName: string, sectionType?: string) => {
    const categoryType = getCategoryType(categoryName)
    let url = `/product-types/${categoryType}`
    
    // Add query parameter based on section type
    if (sectionType === 'shelled') {
      url += '?type=shelled'
    } else if (sectionType === 'whole') {
      url += '?type=unshelled'
    }
    
    navigate(url)
    // Close all menus
    setHoveredMenu(null)
    setHoveredSubMenu(null)
    setHoveredThirdMenu(null)
    setIsMobileMenuOpen(false)
    setMobileExpandedMenu(null)
    setMobileExpandedSubMenu(null)
    setMobileExpandedThirdMenu(null)
  }

  // Mobile menu toggle handlers
  const toggleMobileMainMenu = () => {
    setMobileExpandedMenu(mobileExpandedMenu === 'products' ? null : 'products')
    setMobileExpandedSubMenu(null)
    setMobileExpandedThirdMenu(null)
  }

  const toggleMobileSubMenu = (key: string) => {
    setMobileExpandedSubMenu(mobileExpandedSubMenu === key ? null : key)
    setMobileExpandedThirdMenu(null)
  }

  const toggleMobileThirdMenu = (itemName: string) => {
    setMobileExpandedThirdMenu(mobileExpandedThirdMenu === itemName ? null : itemName)
  }

  const dryFruitMap: Record<string, string[]> = {
    Raisins: ['PeelaKandhariRaisin', 'SultanaRaisins', 'KalaPishin'],
    Apricot: ['KishtaApricots', 'GolApricots', 'NaagApricots'],
    Fig: ['RegularFigs', 'PremiumFigs'],
  }

  const wholeNutsMap: Record<string, string[]> = {
    Almonds: ['KambriAlmondsUnshelled', 'KalamDanaAlmondsUnshelled', 'KattaJumboAlmondsUnshelled'],
    Pistachio: ['KillaSaifullahPistachiosUnshelled', 'ZiaratPistachiosUnshelled'],
    Pinenuts: ['BanuChillasPineNutsUnshelled', 'WaziriPineNutsUnshelled'],
    Walnut: ['SwatdirWalnutsUnshelled', 'KaghziWalnutsUnshelled'],
    'Kala Channa': ['FaraKaKalaChannaUnshelled', 'KhilayKalaChannaUnshelled'],
    Peanuts: ['ParaChinarPeanutsUnshelled', 'ChakwaliPeanutsUnshelled'],
  }

  const shelledNutsMap: Record<string, string[]> = {
    Almonds: ['KambriAlmondsShelled', 'KalamDanaAlmondsShelled', 'KattaJumboAlmondsShelled'],
    Pistachio: ['KillaSaifullahPistachiosShelled', 'ZiaratPistachiosShelled'],
    Pinenuts: ['BanuChillasPineNutsShelled', 'WaziriPineNutsShelled'],
    Walnut: ['SwatdirWalnutsShelled', 'KaghziWalnutsShelled'],
    'Kala Channa': ['FaraKaKalaChannaShelled', 'KhilayKalaChannaShelled'],
    Peanuts: ['ParaChinarPeanutsShelled', 'ChakwaliPeanutsShelled'],
  }

  const categoryToMap = (category: 'dry' | 'whole' | 'shelled'): Record<string, string[]> => {
    if (category === 'dry') return dryFruitMap
    if (category === 'whole') return wholeNutsMap
    return shelledNutsMap
  }

  const menuData = [
    { title: 'Dry Fruits', key: 'dry' },
    { title: 'Whole Nuts', key: 'whole' },
    { title: 'Shelled Nuts', key: 'shelled' },
  ]

  return (
    <nav className="navbar">
      {/* Mobile menu backdrop overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      <div className="navbar-container">
        <Link 
          to="/" 
          className="logo-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="/assets/images/latestphotos/Nutrinoix LOGO wb.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Nutrinoix</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li className="navbar-item">
            <Link 
              to="/mission" 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Mission
            </Link>
          </li>

          <li
            className="navbar-item dropdown"
            onMouseEnter={() => !isMobile && setHoveredMenu('products')}
            onMouseLeave={() => {
              if (!isMobile) {
                setHoveredMenu(null)
                setHoveredSubMenu(null)
                setHoveredThirdMenu(null)
              }
            }}
          >
            <button 
              className="navbar-link dropdown-toggle"
              onClick={() => {
                if (isMobile) {
                  toggleMobileMainMenu()
                } else {
                  navigate('/explore-products')
                }
              }}
            >
              Our Products
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={isMobile && mobileExpandedMenu === 'products' ? { transform: 'rotate(180deg)' } : {}}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Desktop Dropdown (hover-based) */}
            {!isMobile && hoveredMenu === 'products' && (
              <div className="dropdown-menu main-dropdown">
                {menuData.map((menu) => (
                  <div
                    key={menu.key}
                    className="dropdown-item parent-item"
                    onMouseEnter={() => setHoveredSubMenu(menu.key)}
                    onMouseLeave={() => {
                      setHoveredSubMenu(null)
                      setHoveredThirdMenu(null)
                    }}
                  >
                    <div className="dropdown-item-content">
                      {menu.title}
                      <span className="arrow-right">‹</span>
                    </div>

                    {hoveredSubMenu === menu.key && (
                      <div className="dropdown-submenu left-flyout">
                        {Object.entries(categoryToMap(menu.key as 'dry' | 'whole' | 'shelled')).map(
                          ([itemName, subItems]) => (
                            <div
                              key={itemName}
                              className="dropdown-item parent-item"
                              onMouseEnter={() => setHoveredThirdMenu(itemName)}
                              onMouseLeave={() => setHoveredThirdMenu(null)}
                            >
                              <div 
                                className="dropdown-item-content clickable"
                                onClick={() => handleCategoryClick(itemName, menu.key)}
                              >
                                {itemName}
                                {subItems.length > 0 && <span className="arrow-right">‹</span>}
                              </div>

                              {hoveredThirdMenu === itemName && subItems.length > 0 && (
                                <div className="dropdown-submenu left-flyout">
                                  {subItems.map((sub) => (
                                    <div 
                                      key={sub} 
                                      className="dropdown-item clickable"
                                      onClick={() => handleProductClick(sub)}
                                    >
                                      {productsData[sub]?.navName || sub}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Mobile Dropdown (click-based) */}
            {isMobile && mobileExpandedMenu === 'products' && (
              <div className="mobile-dropdown-menu">
                {menuData.map((menu) => (
                  <div key={menu.key} className="mobile-dropdown-section">
                    <div 
                      className="mobile-dropdown-item parent-item"
                      onClick={() => toggleMobileSubMenu(menu.key)}
                    >
                      <span>{menu.title}</span>
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={mobileExpandedSubMenu === menu.key ? { transform: 'rotate(180deg)' } : {}}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>

                    {mobileExpandedSubMenu === menu.key && (
                      <div className="mobile-dropdown-submenu">
                        {Object.entries(categoryToMap(menu.key as 'dry' | 'whole' | 'shelled')).map(
                          ([itemName, subItems]) => (
                            <div key={itemName} className="mobile-dropdown-subsection">
                              <div 
                                className="mobile-dropdown-item category-item"
                                onClick={(e) => {
                                  if (subItems.length === 0) {
                                    handleCategoryClick(itemName, menu.key)
                                  } else {
                                    e.stopPropagation()
                                    toggleMobileThirdMenu(itemName)
                                  }
                                }}
                              >
                                <span>{itemName}</span>
                                {subItems.length > 0 && (
                                  <svg 
                                    width="12" 
                                    height="12" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    style={mobileExpandedThirdMenu === itemName ? { transform: 'rotate(180deg)' } : {}}
                                  >
                                    <path d="M6 9l6 6 6-6" />
                                  </svg>
                                )}
                              </div>

                              {mobileExpandedThirdMenu === itemName && subItems.length > 0 && (
                                <div className="mobile-dropdown-products">
                                  {subItems.map((sub) => (
                                    <div 
                                      key={sub} 
                                      className="mobile-dropdown-item product-item"
                                      onClick={() => handleProductClick(sub)}
                                    >
                                      {productsData[sub]?.navName || sub}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li className="navbar-item">
            <Link 
              to="/contact" 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

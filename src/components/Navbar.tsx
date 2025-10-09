import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsData } from '../data/productsData'
import './Navbar.css'

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null)
  const [hoveredThirdMenu, setHoveredThirdMenu] = useState<string | null>(null)
  const navigate = useNavigate()

  // Handle navigation to product page
  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`)
    // Close the dropdown menus
    setHoveredMenu(null)
    setHoveredSubMenu(null)
    setHoveredThirdMenu(null)
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
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src="/assets/images/latestphotos/Nutrinoix LOGO wb.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Nutrinoix</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/#about" className="navbar-link">About Us</Link>
          </li>

          <li
            className="navbar-item dropdown"
            onMouseEnter={() => setHoveredMenu('products')}
            onMouseLeave={() => {
              setHoveredMenu(null)
              setHoveredSubMenu(null)
              setHoveredThirdMenu(null)
            }}
          >
            <button className="navbar-link dropdown-toggle">
              Our Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {hoveredMenu === 'products' && (
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
                      <span className="arrow-right">›</span>
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
                              <div className="dropdown-item-content">
                                {itemName}
                                {subItems.length > 0 && <span className="arrow-right">›</span>}
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
          </li>

          <li className="navbar-item">
            <Link to="/#mission" className="navbar-link">Our Mission</Link>
          </li>

          <li className="navbar-item">
            <Link to="/#visit" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

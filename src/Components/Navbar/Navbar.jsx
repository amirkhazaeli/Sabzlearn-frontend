import {React , useState} from 'react'
import logo from '../../Assets/images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import menuList from '../../Assets/Data/menuList'
import { Link } from 'react-router-dom';
import ResponsiveNavbarComponent from '../ResponsiveNavbar/ResponsiveNavbarComponent';
import Cart from '../Cart/Cart';
import NavbarSubMenu from '../NavbarSubMenu/NavbarSubMenu';

export default function NavbarComponent() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const [isActiveCart, setIsActiveCart] = useState(false)

  const handleShowCart = () =>  setIsActiveCart(true)
  
  const handleCloseCart = () => setIsActiveCart(false)
  
  const handleMouseOver = (index) =>  setSelectedMenuIndex(index);
  

  const handleMouseLeave = () => setSelectedMenuIndex(null)
  

  return (
    <div className='navbar-section'>
      <Container fluid="lg">
        <div className='navbar-wrapper'>
          <div className='navbar-right'>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>

            <ul>
              {
                menuList.map((menu, index) => (
                  <li key={menu.id}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave} >
                    <Link to={menu.href}>
                      {menu.menuName}
                    </Link>
                    {
                      menu.subMenus.length ? (
                        <>
                          <FontAwesomeIcon icon={faCaretDown} />
                          <NavbarSubMenu index={index} subMenus={menu.subMenus} selectedMenuIndex={selectedMenuIndex} />
                        </>
                      ) : null
                    }
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='navbar-left'>
            <div className='navbar-input'>
              <input type="text" placeholder='جستجو...' />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <button>
              <Link to='/login'>
                ورود / عضویت
                <FontAwesomeIcon icon={faUser} />
              </Link>

            </button>
            <div className='navbar-basket-icon' onMouseOver={handleShowCart}
              onMouseLeave={handleCloseCart} >
              <FontAwesomeIcon icon={faBasketShopping} />
              <Cart isActiveCart={isActiveCart} />
            </div>

          </div>
        </div>
      </Container>
      <ResponsiveNavbarComponent />
    </div>
  )
}

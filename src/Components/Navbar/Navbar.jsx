import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faUser, faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import menuList from '../../Assets/Data/menuList'
import { Link } from 'react-router-dom';
import ResponsiveNavbarComponent from '../ResponsiveNavbar/ResponsiveNavbarComponent';



export default function NavbarComponent() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
 
  
  function handleMouseOver(index) {
    setSelectedMenuIndex(index);
  }

  function handleMouseLeave() {
    setSelectedMenuIndex(null);
  }

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
                  <li key={menu.id} onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave} >
                    <Link to={menu.href}>
                      {menu.menuName}
                    </Link>
                    {
                      menu.subMenus.length ? (
                        <>
                          <FontAwesomeIcon icon={faCaretDown} />
                          <div className={`sub-menu ${selectedMenuIndex === index ? 'active' : ''}`}>
                            <ul>
                              {menu.subMenus.map((subMenu) => (
                                <li key={subMenu.id}>
                                  <Link to={subMenu.href}>
                                    {subMenu.courseName}
                                  </Link>

                                </li>
                              ))}
                            </ul>
                          </div>
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
            <FontAwesomeIcon icon={faBasketShopping} />
            <div className='cart'>

            </div>
          </div>
        </div>
      </Container>
      <ResponsiveNavbarComponent />
    </div>
  )
}

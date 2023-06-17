import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faUser, faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
export default function NavbarComponent() {
  const [showMenu, setShowMenu] = useState(false)
  const [showResponsiveSidebar,setShowResponsiveSidebar] = useState(false)

  function handleMouseOver() {
    setShowMenu(true);
  }

  function handleMouseLeave() {
    setShowMenu(false);
  }
  function handleShowSidebar(){
    setShowResponsiveSidebar(!showResponsiveSidebar)
  }
  return (
    <div className='navbar-section'>
      <Container fluid="lg">
        <div className='navbar-wrapper'>
          <div className='navbar-right'>
            <img src={logo} alt="" />
            <ul>
              <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
                فرانت اند
                <FontAwesomeIcon icon={faCaretDown} />

                <div className={`sub-menu ${showMenu && 'active'}`}>
                  <ul>
                    <li>html</li>
                    <li>js</li>
                    <li>front</li>
                    <li>react</li>
                  </ul>
                </div>


              </li>
              <li>
                امنیت
                <FontAwesomeIcon icon={faCaretDown} />

              </li>
              <li>
                پایتون
                <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <li>
                مهارت های نرم
              </li>
              <li>
                مقالات
                <FontAwesomeIcon icon={faCaretDown} />
              </li>
            </ul>
          </div>
          <div className='navbar-left'>
            <div className='navbar-input'>
              <input type="text" placeholder='جستجو...' />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <button>
              امیر محمد عرب خزایلی
              <FontAwesomeIcon icon={faUser} />
            </button>
            <FontAwesomeIcon icon={faBasketShopping} />
          </div>
        </div>
      </Container>

      {/*Responsive element*/}
      <Container fluid>
        <div className='navbar-responsive'>
          <div className='navbar-menu-icon'>
            <FontAwesomeIcon icon={faBars} onClick={handleShowSidebar}/>
            <div className={`sidebar ${showResponsiveSidebar && 'active'}`} >
               <div>
                <div className='sidebar-close-icon'>
                  
                </div>
                <input type="" name="" value=""/>
                <ul>
                  <li>فرانت اند</li>
                  <li>امنیت</li>
                  <li>پایتون</li>
                  <li>مهارت های نرم</li>
                  <li>مقالات</li>
                </ul>
               </div>
            </div>
          </div>
          <div className='navbar-responsive-logo'>
            <img src={logo} alt="" />
          </div>
          <div className='icons'>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <FontAwesomeIcon icon={faBasketShopping} />
          </div>
        </div>
      </Container>

    </div>
  )
}

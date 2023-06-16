import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faUser, faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
export default function NavbarComponent() {
  return (
    <div className='navbar-section'>
      <Container fluid="lg">
        <div className='navbar-wrapper'>
          <div className='navbar-right'>
            <img src={logo} alt="" />
            <ul>
              <li>
                فرانت اند
                <FontAwesomeIcon icon={faCaretDown} />
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
            <FontAwesomeIcon icon={faBars} />
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

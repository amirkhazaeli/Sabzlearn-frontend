import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,faBars,faUser,faBasketShopping } from '@fortawesome/free-solid-svg-icons'
export default function NavbarComponent() {
  return (
    <div className='navbar-section'>

      <div className='navbar-wrapper container'>
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
          <div >
            <input type="text" placeholder='جستجو...'/>
          </div>
          <button>
            امیر محمد عرب خزایلی
          <FontAwesomeIcon icon={faUser} />
          </button>
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
      </div>

      {/*Responsive element*/}
      <div className='navbar-responsive container'>
        <FontAwesomeIcon icon={faBars} />
        <img src={logo} alt="" />
        <div className='icons'>
          <button>
          <FontAwesomeIcon icon={faUser} />
          </button>
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
      </div>
    </div>
  )
}

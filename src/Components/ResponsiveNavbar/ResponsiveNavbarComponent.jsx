import {React,useState} from 'react'
import './ResponsiveNavbarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faUser, faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Assets/images/logo.png'
import { Container } from 'react-bootstrap';
export default function ResponsiveNavbarComponent({}) {
    const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false)

    function handleShowSidebar() {
        setShowResponsiveSidebar(!showResponsiveSidebar)
      }

    return (
        <Container fluid>
            <div className='navbar-responsive'>
                <div className='navbar-menu-icon'>
                    <FontAwesomeIcon icon={faBars} onClick={handleShowSidebar}/>
                    <div className={`sidebar ${showResponsiveSidebar && 'active'}`} >
                        <div>
                            <div className='sidebar-close-icon'>

                            </div>
                            <input type="" name="" value="" />
                            <ul>
                                <li>فرانت اند</li>
                                <li>امنیت</li>
                                <li>پایتون</li>
                                <li>مهارت های نرم</li>
                                <li>مقالات</li>
                            </ul>
                        </div>
                        <div>

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
    )
}

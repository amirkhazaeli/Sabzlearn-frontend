import React from 'react'
import './NavbarSubMenu.css'
import { Link } from 'react-router-dom';
export default function NavbarSubMenu({subMenus , selectedMenuIndex , index}) {

    return (
    <div className={`sub-menu ${selectedMenuIndex === index ? 'active' : ''}`}>
        <ul>
            {subMenus.map((subMenu) => (
                <li key={subMenu.id}>
                    <Link to={subMenu.href}>
                        {subMenu.courseName}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}

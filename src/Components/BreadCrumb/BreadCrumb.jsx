import React from 'react'
import { Link } from 'react-router-dom'
import './BreadCrumb.css'
export default function BreadCrumb() {
  return (
    <div className='BreadCrumb'>
          <ul>
            <li>
              <Link to='/'>
              خانه /
              </Link>
           
            </li>
            <li>
              فرانت اند /
            </li>
            <li>
              اطلاعات دوره 
            </li>
          </ul>
    </div>
  )
}

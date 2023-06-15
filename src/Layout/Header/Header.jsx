import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../../Components/Navbar/Navbar'
import TopHeader from '../../Components/TopHeader/TopHeader'
import './Header.css'
export default function Header() {
  return (
    <div className='header-section'>
        <TopHeader />
        <Navbar />
    </div>

  )
}

import React from 'react'
import { Container } from 'react-bootstrap'
import TopHeader from '../../Components/TopHeader/TopHeader'
import './Header.css'
export default function Header() {
  return (
    <div className='header-section'>
      <Container className='header-wrapper' fluid>
        <TopHeader />
      </Container>
    </div>

  )
}

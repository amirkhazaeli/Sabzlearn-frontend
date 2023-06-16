import React from 'react'
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar } from 'react-bootstrap'
import TopHeader from '../TopHeader/TopHeader'
import NavbarComponent from '../Navbar/Navbar'
export default function SearchBox() {
  return (
    <>
      <div className="search-Box">
        <TopHeader />
        <NavbarComponent />
        <Container className='search-box' fluid='lg'>
          <h1>به آکادمی سبزلرن خوش آمدید</h1>
          <div className='search-box-input'>
            <input type="text" placeholder='جستجو..' />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </Container>
      </div>
    </>

  )
}
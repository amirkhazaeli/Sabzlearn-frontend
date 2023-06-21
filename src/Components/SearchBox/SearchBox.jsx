import React from 'react'
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import TopHeader from '../TopHeader/TopHeader'
import NavbarComponent from '../Navbar/Navbar'
import TypewriterComponent from 'typewriter-effect'
export default function SearchBox({ onSearch }) {
  return (
    <>
      <div className="search-Box">
        <TopHeader />
        <NavbarComponent />
        <Container className='search-box-container' fluid='lg'>
          <h1>
            <TypewriterComponent 
            onInit={(typeWriter)=> {
              typeWriter
              .typeString("ما به هر قیمتی دوره اموزشی تولید نمیکنیم!")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString('به آکادمی سبزلرن خوش آمدید')
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString('طراحی شده توسط امیر خزایلی')
              .start()
              .pauseFor(2000)
              .deleteAll()
            }}
            options={{
              loop: true
            }
            }
            />

          </h1>
          <h2>آموزش برنامه نویسی در سایت سبزلرن</h2>
          <div className='search-box-input'>
            <input onChange={(e) => onSearch(e)} type="text" placeholder='جستجو..' />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </Container>
      </div>
    </>

  )
}

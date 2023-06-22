import { React, useState } from 'react'
import './PaginationComponent.css'

import Pagination from 'react-bootstrap/Pagination';
export default function PaginationComponent({ data, currentPageHandler }) {
  const [selectPage, setSelectPage] = useState(null)

  const pagesNumber = Array.from({ length: Math.ceil(data.length / 8) }, (_, index) => index + 1);

  const scrollToTop = () => {
    window.scrollTo(0, 150)
  }
  console.log(pagesNumber);
  return (
    <>
      {
        pagesNumber.length > 1 &&
        (
          <Pagination className='pagination-wrapper'>
            <Pagination.Prev className='pagination-arrow' />
            {
              pagesNumber.map((number, index) => (
                <Pagination.Item className='pagination-item' active={selectPage === index} onClick={() => {
                  setSelectPage(index)
                  currentPageHandler(number)
                  scrollToTop()
                }}>{number}
                </Pagination.Item>
              )
              )
            }
            <Pagination.Next className='pagination-arrow'/>
          </Pagination>
        )
      }
    </>
  )
}
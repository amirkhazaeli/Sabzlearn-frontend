import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'
import './ProductComponent.css'
import { Link, useLocation } from 'react-router-dom'
import AlertBox from '../AlertBox/AlertBox'
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import usePagination from '../../Hooks/usePagination'

export default function ProductComponent({ courses }) {
  const [showBtn, setShowBtn] = useState(true)
  const [showData, currentPageHandler] = usePagination(courses)
  const location = useLocation()
  
  useEffect(() => {
    if (location.pathname == '/') {
      setShowBtn(false)
    }
  }, [])

  return (
    <div className='product-section' >
      <Container fluid='lg'>

        <Row>
          {showData && showData.length ? (
            showData.map((course) => (
              <Col key={course.id} xs={6} md={4} lg={3}>
                <Link to={`/productInfo/${course.id}`}>
                  <ProductItem data={course} />
                </Link>
              </Col>
            ))
          ) : (
            <AlertBox title='دوره‌ای وجود ندارد' showBtn={showBtn} />
          )}

        </Row>

        <PaginationComponent data={courses} currentPageHandler={currentPageHandler} pageSize={8}/>





      </Container>
    </div>
  )
}

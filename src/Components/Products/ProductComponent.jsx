import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'
import './ProductComponent.css'
import { Link } from 'react-router-dom'
export default function ProductComponent({courses}) {
  
  return (
    <div className='product-section' >
      <Container fluid='lg'>

        <Row className='className="d-flex flex-wrap align-items-stretch"'>
          {
            courses.map((course) => (
              <Col xs={6} md={4} lg={3}>
                <Link to={`/productInfo/${course.id}`}>
                  <ProductItem data={course} />
                </Link>
              </Col>
            ))
          }

        </Row>


      </Container>
    </div>
  )
}

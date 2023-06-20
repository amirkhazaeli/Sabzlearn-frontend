import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'
import './ProductComponent.css'
import courses from '../../Assets/Data/courses'
export default function ProductComponent() {
  return (
    <div className='product-section' >
      <Container fluid='lg'>

        <Row className='className="d-flex flex-wrap align-items-stretch"'>
          {
            courses.map((course) => (
              <Col xs={6} md={4} lg={3}>
                <ProductItem data={course} />
              </Col>
            ))
          }

        </Row>


      </Container>
    </div>
  )
}

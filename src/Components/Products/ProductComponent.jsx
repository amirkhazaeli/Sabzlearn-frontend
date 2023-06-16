import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'
import './ProductComponent.css'
export default function ProductComponent() {
  return (
    <div className='product-section' >
      <Container fluid='lg'>
        <div className='product-wrapper'>
          <Row>
            <Col xs={6} md={4} lg={3}>
              <ProductItem />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <ProductItem />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <ProductItem />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <ProductItem />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <ProductItem />
            </Col>
          </Row>

        </div>
      </Container>
    </div>
  )
}

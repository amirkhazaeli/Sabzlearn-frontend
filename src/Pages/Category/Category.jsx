import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import ProductComponent from '../../Components/Products/ProductComponent'
import Header from '../../Layout/Header/Header'

export default function Category() {
  return (
   <>
   <Header />
   <Container fluid='lg'>
   <CategoryHeader />
   <ProductComponent />
   </Container>

   </>
  )
}

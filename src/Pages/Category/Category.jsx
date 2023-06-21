import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import ProductComponent from '../../Components/Products/ProductComponent'
import Header from '../../Layout/Header/Header'
import courses from '../../Assets/Data/courses'
import { useParams } from 'react-router-dom'
export default function Category() {
  const [categoryFilterData, setCategoryFilterData] = useState([])

  const param = useParams()


  useEffect(() => {
    let courseFilter = courses.filter((course) => {
       if(param.categoryName == 'front') {
         return course.category == 'فرانت اند'
      }else if(param.categoryName == 'security'){
        return course.category == 'امنیت'
      }else if(param.categoryName == 'backend'){
        return course.category == 'بک اند'
      }
    })
    setCategoryFilterData(courseFilter)
    console.log(categoryFilterData);

  },[param.categoryName, courses])
  return (
    <>
      <Header />
      <Container fluid='lg'>
        <BreadCrumb />
        <CategoryHeader />
        <ProductComponent courses={categoryFilterData} />
      </Container>

    </>
  )
}

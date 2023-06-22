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
    setCategoryFilterData(handleCategoryFilter()) 
  }, [param.categoryName, courses])

  const handleCategoryFilter = () => {
    const courseFilter = courses.filter((course) => {
      if (param.categoryName == 'front') {
        return course.category == 'فرانت اند'
      } else if (param.categoryName == 'security') {
        return course.category == 'امنیت'
      } else if (param.categoryName == 'backend') {
        return course.category == 'بک اند'
      }
    })
    return courseFilter
  }


  const handleSearchFilter = (event) => {
    const searchValue = event.target.value;
    if (!searchValue) {
      setCategoryFilterData(handleCategoryFilter());
    } else {
      const filtered = handleCategoryFilter().filter((course) => {
        return (
          course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          course.category.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setCategoryFilterData(filtered);
    }
  }

  const handleSelectedFilter = (event) => {
    let searchValue = event.target.value;
    if(searchValue === 'expensive'){
      const sortedDataAscending = handleCategoryFilter().slice().sort((a, b) => a.price - b.price);
      setCategoryFilterData(sortedDataAscending.reverse());
    }else if(searchValue === 'cheap'){
      const sortedDataAscending = handleCategoryFilter().slice().sort((a, b) => a.price - b.price);
      setCategoryFilterData(sortedDataAscending);
    }else{
      setCategoryFilterData(handleCategoryFilter());
    }
  }
  return (
    <>
      <Header />
      <Container fluid='lg'>
        <BreadCrumb />
        <CategoryHeader handleSearchFilter={handleSearchFilter} handleSelectedFilter={handleSelectedFilter}/>
        <ProductComponent courses={categoryFilterData} />
      </Container>

    </>
  )
}

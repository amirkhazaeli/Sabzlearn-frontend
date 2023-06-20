import React, { useEffect, useState } from 'react'
import ArticleSlider from '../../Components/ArticleSlider/ArticleSlider'
import ProductComponent from '../../Components/Products/ProductComponent'
import SearchBox from '../../Components/SearchBox/SearchBox'
import courses from '../../Assets/Data/courses'
export default function Home() {
  const [courseData, setCourseData] = useState(courses);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filtered = courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        course.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setCourseData(filtered);
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <ProductComponent courses={courseData} />
      <ArticleSlider />
    </>
  )
}

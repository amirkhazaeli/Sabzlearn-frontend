import React, { useEffect, useState } from 'react'
import ArticleSlider from '../../Components/ArticleSlider/ArticleSlider'
import ProductComponent from '../../Components/Products/ProductComponent'
import SearchBox from '../../Components/SearchBox/SearchBox'
import courses from '../../Assets/Data/courses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import './Home.css'
export default function Home() {
  const [courseData, setCourseData] = useState(courses);
  const [isVisibleScrollTopIcon, setIsVisibleScrollTopIcon] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

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

  const handleScroll = () => {
    const halfPageHeight = window.innerHeight / 2;
    const currentPosition = window.scrollY;

    if (currentPosition > halfPageHeight) {
      setIsVisibleScrollTopIcon(true);
    } else {
      setIsVisibleScrollTopIcon(false);
    }
  }

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <ProductComponent courses={courseData} />
      <ArticleSlider />
      {
        isVisibleScrollTopIcon ? (
          <div className='scroll-top-icon'  onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          <FontAwesomeIcon icon={faCircleChevronDown} rotation={180} />
          </div>
        ) : null
      }
    
    </>
  )
}

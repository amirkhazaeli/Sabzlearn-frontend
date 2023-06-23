import React, { useEffect, useState  } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import CourseIntroduction from '../../Components/CourseIntroduction/CourseIntroduction'
import CourseTopic from '../../Components/CourseTopic/CourseTopic'
import Header from '../../Layout/Header/Header'
import courses from '../../Assets/Data/courses'

export default function ProductInfo() {
  
    const [courseData,setCourseData] = useState(courses)
    const param = useParams() 
 
    useEffect(()=>{
    const courseFilter = courseData.filter((course)=>{
        return course.id == param.id
     })
     setCourseData(courseFilter)
    }, [])

    return (
        <>
         
            <Header />
            <Container fluid='lg'>
                <BreadCrumb />
                <CourseIntroduction courseData={courseData[0]}/>
            </Container>
            <CourseTopic courseData={courseData[0]}/>

        </>
    )
}

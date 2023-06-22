import React, { useEffect, useState } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import ArticlesComponent from '../../Components/ArticlesComponent/ArticlesComponent'
import ArticleSideBar from '../../Components/ArticleSideBar/ArticleSideBar'
import Header from '../../Layout/Header/Header'
import courses from '../../Assets/Data/courses'
export default function Article() {
    const [coursesScoreFilter,setCoursesScoreFilter] = useState([])
    useEffect(()=>{
        handleCoursesScoreFilter()
    },[])
    const handleCoursesScoreFilter = () => {
        const sortCoursesByScore= courses.sort((a,b)=> a.score - b.score)
        const firstFourItems = sortCoursesByScore.slice(0, 4);
        setCoursesScoreFilter(firstFourItems)
    }
    return (
        <>
            <Header />
            <Container fluid='lg' style={{marginTop: '2rem'}}>
                <Row>
                    <Col lg={8}>
                        <ArticlesComponent />
                    </Col>
                    <Col lg={4}>
                        <ArticleSideBar CoursesFilter={coursesScoreFilter}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

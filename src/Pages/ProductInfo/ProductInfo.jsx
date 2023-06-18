import React from 'react'
import { Container } from 'react-bootstrap'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import CourseIntroduction from '../../Components/CourseIntroduction/CourseIntroduction'
import CourseTopic from '../../Components/CourseTopic/CourseTopic'
import Header from '../../Layout/Header/Header'

export default function ProductInfo() {
    return (
        <>
            <Header />
            <Container fluid='lg'>
                <BreadCrumb />
                <CourseIntroduction />
            </Container>
            <CourseTopic />

        </>
    )
}

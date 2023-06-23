import React from 'react'
import { Container } from 'react-bootstrap'
import CourseTopicItem from '../CourseTopicItems/CourseTopicItem'
import './CourseTopic.css'
export default function CourseTopic({courseData}) {
    return (
        <div className='course-topic'>
            <Container fluid='lg'>
                <div className='course-topic-wrapper'>
                <div className='course-topic-header'>
                    <div className='course-topic-title'>
                        مباحث این دوره
                    </div>
                    <div className='course-topic-info'>
                        <span>40 درس</span>
                        <span>7:37:9</span>
                    </div>
                </div>
                <div className='course-topic-content'>
                    {
                        courseData.CourseParts.map((coursePart)=>(
                            <CourseTopicItem key={coursePart.id} coursePart={coursePart}/>
                        ))
                    }
                          
                   
                </div>
                </div>
              
            </Container>

        </div>
    )
}

import React from 'react'
import './CourseTopicItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function CourseTopicItem({ coursePart }) {
    const [activeClass, setActiveClass] = useState(false)
    return (
        <div className='course-topic-item'>
            <div className='course-topic-item-title' onClick={() => setActiveClass(!activeClass)}>
                <h3>{coursePart.title}</h3>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={`course-videos ${activeClass ? 'active' : ''}`}>
                <ul>
                    {
                        coursePart.lessons.map((lesson) => (
                            <li>
                                <div className='course-video-right'>
                                    <span>1</span>
                                    <FontAwesomeIcon icon={faVideo} />
                                    <h3>{lesson.name}</h3>
                                </div>
                                <div className='course-video-left'>
                                   {lesson.time}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

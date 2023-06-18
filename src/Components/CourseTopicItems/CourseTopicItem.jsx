import React from 'react'
import './CourseTopicItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function CourseTopicItem() {
    const [activeClass,setActiveClass] = useState(false)
    return (
        <div className='course-topic-item'>
            <div className='course-topic-item-title' onClick={()=> setActiveClass(!activeClass)}>
                <h3>سرفصل ها</h3>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={`course-videos ${activeClass ? 'active' : ''}`}>
                <ul>
                    <li>
                        <div className='course-video-right'>
                            <span>1</span>
                            <FontAwesomeIcon icon={faVideo} />
                            <h3>ویدیو اول</h3>
                        </div>
                        <div className='course-video-left'>
                            00:01:05
                        </div>
                    </li>
                    <li>
                        <div className='course-video-right'>
                            <span>1</span>
                            <FontAwesomeIcon icon={faVideo} />
                            <h3>ویدیو اول</h3>
                        </div>
                        <div className='course-video-left'>
                            00:01:05
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import poster from '../../Assets/images/productImage.png';
import './CourseIntroduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
export default function CourseIntroduction() {
    return (
        <div className='course-introduction'>
            <h1 className='course-introduction-title'>بررسی تخصصی سوالات مصاحبه‌ای JS
            </h1>
            <Row>
                <Col md={7}>
                    <div className='course-introduction-video'>
                        <video
                            src=''
                            poster={poster}
                            controls />
                        <div className='course-point'>
                            پس از خرید، بلافاصله به محتوای دوره دسترسی خواهید داشت و میتوانید دوره را مشاهده و یا دانلود کنید.
                        </div>

                    </div>

                </Col>
                <Col md={5} >
                    <div className='course-introduction-left'>
                         <Row>
                            <Col lg={8}>
                            <div className='course-tags'> 
                                <span>آموزش برنامه نویسی فرانت اند</span>
                                <span>کسب درامد از برنامه نویسی فرانت اند</span>
                                <span>مهارت نرم برنامه نویسی فرانت اند</span>
                            </div>
                            </Col>
                            <Col lg={4}>
                            <div className='course-score'>
                            </div>
                            </Col>
                         </Row>
                         <div className='course-introduction-price'>
                            <h1>675,000 تومان</h1>
                         </div>
                         <div className='Course-feature'>
                            <span>  پــروژه مــحور بودن دوره هــــا</span>
                            <span> پشتیبـــانی دائــــمی محصولات</span>
                            <span>تضمین کیــفیت کلیـه محصولات</span>
                         </div>
                         <div className='course-introduction-btns'>
                            <button className='course-btn Watch-videos-btn'>
                                   دیدن ویدیوها
                            </button>
                            <button className='course-btn status-btn'>
                                    شما دانشجوی دوره هستید
                            </button>
                         </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                    <FontAwesomeIcon icon={faUser} />
                       <span>مدرس : محمد امین سعیدی راد</span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                    <FontAwesomeIcon icon={faUser} />
                       <span>مدرس : محمد امین سعیدی راد</span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                    <FontAwesomeIcon icon={faUser} />
                       <span>مدرس : محمد امین سعیدی راد</span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                    <FontAwesomeIcon icon={faUser} />
                       <span>مدرس : محمد امین سعیدی راد</span>
                    </div>
                </Col>

            </Row>
            <Row>
                <div className='course-introduction-desc'>
                    <p>
                        تو این دوره انواع مصاحبه، سوالات پرتکرار هر نوع مصاحبه، نحوه آماده شدن برای مصاحبه و … برای شما عزیزان آموزش داده میشه تا بعد از گذروندن این دوره کاملا آماده هر نوع مصاحبه در زمینه جاوا اسکریپت باشین و هیچ نوع استرسی برای حاضر شدن در جلسه مصاحبه نداشته باشین.
                    </p>
                </div>
            </Row>
        </div>
    )
}

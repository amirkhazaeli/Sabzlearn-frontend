import { React, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArticleSliderItem from '../ArticleSliderItem/ArticleSliderItem'
// import css file
import './ArticleSlider.css'
export default function ArticleSlider() {
    return (
        <div className='article-slider-section'>
            <Container fluid='lg'>
                <div className='article-title'>
                    <div className='article-title-line'>
                    </div>
                    <div className='article-title-center'>
                        آخرین مقالات سایت
                    </div>
                    <div className='article-title-line'>
                    </div>
                </div>
                <div className='article-slider'>
                    <Row>
                        <Col xs={6} md={4} lg={3}>
                            <ArticleSliderItem />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <ArticleSliderItem />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <ArticleSliderItem />
                        </Col>
                    </Row>




                </div>
            </Container>

        </div>
    )
}

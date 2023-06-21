import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArticleSliderItem from '../ArticleSliderItem/ArticleSliderItem'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import css file
import './ArticleSlider.css'
// import data
import articles from '../../Assets/Data/article'
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

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination,Navigation,Autoplay]}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                        className="mySwiper"
                    >
                        {
                            articles.map((article) => (
                                <SwiperSlide>

                                    <ArticleSliderItem article={article} />

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>



                </div>
            </Container>

        </div>
    )
}

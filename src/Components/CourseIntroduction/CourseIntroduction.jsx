import {React , useContext} from 'react'
import { Col, Row } from 'react-bootstrap'
import './CourseIntroduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import formatNumber from '../../Assets/Utils/formatNumber';
import CartContext from '../../Context/CartContext';
import Swal from 'sweetalert';
export default function CourseIntroduction({ courseData }) {
    const {CartItems,setCartItems} = useContext(CartContext)
    const addCourseToCartItems = () => {
        const checkCartItems = CartItems.includes(courseData)
        if(!checkCartItems){
            setCartItems([...CartItems,courseData])
            Swal({
                title: "محصول با موفقیت اضافه شد",
                icon: "success",
                buttons: {
                  confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                  }
                }
              });
        }else{
            alert('این محصول قبلا اضافه شده است')
        }
    
    }

    return (
        <div className='course-introduction'>
            <h1 className='course-introduction-title'>
                {courseData.title}
            </h1>
            <Row>
                <Col md={7}>
                    <div className='course-introduction-video'>
                        <video
                            src=''
                            poster={courseData.image}
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
                                    <span>{courseData.category}</span>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='course-score'>
                                </div>
                            </Col>
                        </Row>
                        <div className='course-introduction-price'>
                            <h1>{formatNumber(courseData.price)}</h1>
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
                            <button className='course-btn status-btn' onClick={() => addCourseToCartItems()}>
                                افزودن به سبد خرید
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>مدرس : {courseData.teacherName}   </span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>وضعیت : {courseData.status}</span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>تایم درس : {courseData.courseTime}</span>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                    <div className='course-info-item'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>داشنجو : {courseData.student} </span>
                    </div>
                </Col>

            </Row>
            <Row>
                <div className='course-introduction-desc'>
                    <p>
                        {courseData.desc}
                    </p>
                </div>
            </Row>
        </div>
    )
}

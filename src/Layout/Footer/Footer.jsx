import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import footerLogo from '../../Assets/images/footer.png'
export default function Footer() {
    return (
        <footer className='footer-section'>
            <Container fluid='lg'>
                <div className='footer-Description'>
                    <h1>ضمانت سبزلرن برای کلیه محصولات آموزشی</h1>
                    <p>
                        وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم مثل آموزش جاوا اسکریپت هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند
                    </p>
                </div>
                <div className='footer-information'>
                    <Row>
                        <Col  md={4} lg={4}>
                            <div className='footer-link'>
                                <div className='footer-link-right'>
                                    <ul>
                                        <li>فروشگاه</li>
                                        <li>ارتیاط با ما</li>
                                        <li>درباره ما</li>
                                    </ul>
                                </div>
                                <div className='footer-link-left'>
                                    <ul>
                                        <li>مقالات</li>
                                        <li>قوانین و مقررات</li>
                                        <li>آموزش جاوااسکریپت</li>
                                        <li>آموزش پایتون</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col  md={4} lg={3}>
                            <div className='footer-work-time'>
                                <h3>ساعت کاری :</h3>
                                <p>
                                    شنبه تا چهارشنبه 8 صبح تا 18 عصر پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر
                                </p>
                            </div>
                        </Col>
                        <Col  md={4} lg={3}>
                            <div className='footer-Contact-us'>
                                <h3>ارتباط با ما</h3>
                                <h3>ایمیل : sabzlearn@gmail.com</h3>
                                <h3>شماره تماس : 09334008385</h3>
                            </div>
                        </Col>
                        <Col md={4} lg={2}>
                            <div className='footer-image'>
                                <img src={footerLogo} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='footer-copyright'>
                    طراحی شده توسط امیر محمد عرب خزایلی
                </div>
            </Container>

        </footer>
    )
}

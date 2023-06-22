import React from 'react'
import { Col,Row } from 'react-bootstrap'
import article from '../../Assets/images/article.jpg'
import './ArticleSideBarItem.css'
import formatNumber from '../../Assets/Utils/formatNumber'
export default function ArticleSideBarItems({course}) {
  return (
    <div className='Article-SideBar-Item'>
      <Row className='Article-SideBar-Item-row'>
        <Col>
        <img src={course.image} alt="" />
        </Col>
        <Col>
        <div className='Article-SideBar-Item-left'>
          <h1>{course.title}</h1>
          <h3>{formatNumber(course.price)}</h3>
        </div>
        </Col>
      </Row>
    </div>
  )
}

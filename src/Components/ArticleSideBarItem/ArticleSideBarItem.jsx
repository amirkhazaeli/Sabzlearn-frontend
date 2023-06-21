import React from 'react'
import { Col,Row } from 'react-bootstrap'
import article from '../../Assets/images/article.jpg'
import './ArticleSideBarItem.css'
export default function ArticleSideBarItems() {
  return (
    <div className='Article-SideBar-Item'>
      <Row className='Article-SideBar-Item-row'>
        <Col>
        <img src={article} alt="" />
        </Col>
        <Col>
        <div className='Article-SideBar-Item-left'>
          <h1>نام محص.ل</h1>
          <h3>80000</h3>
        </div>
        </Col>
      </Row>
    </div>
  )
}

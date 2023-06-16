import React from 'react'
import './ArticleSliderItem.css'
import Article from '../../Assets/images/article.jpg'
export default function ArticleSliderItem() {
  return (
    <div className='article-slider-item'>
       <img src={Article} alt="" />
       <h3>کسب درآمد از برنامه نویسی</h3>
       <h2>بک اند چیست</h2>
    </div>
  )
}

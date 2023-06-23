import React from 'react'
import './ArticleSliderItem.css'
export default function ArticleSliderItem({article}) {
  return (
    <div className='article-slider-item'>
       <img src={article.image} alt="" />
       <h3>کسب درآمد از برنامه نویسی</h3>
       <h2>{article.title}</h2>
    </div>
  )
}

import React from 'react'
import ArticleItem from '../ArticleItem/ArticleItem'
import './ArticlesComponent.css'
import articles from '../../Assets/Data/article'
export default function ArticlesComponent() {
  return (
    <div className='Articles-wrapper'>
        {
            articles.map((article)=>(
                <ArticleItem article={article} />
            ))
        }
    
       
    </div>
  )
}

import React from 'react'
import ArticleItem from '../ArticleItem/ArticleItem'
import './ArticlesComponent.css'
import articles from '../../Assets/Data/article'
import PaginatioComponent from '../PaginationComponent/PaginationComponent'
import AlertBox from '../AlertBox/AlertBox'
import usePagination from '../../Hooks/usePagination'
export default function ArticlesComponent() {
  const [showData, currentPageHandler] = usePagination(articles, 5)
  return (
    <div className='Articles-wrapper'>
      {showData && showData.length ? (
        showData.map((article) => (
          <ArticleItem article={article} />
        ))
      ) : (
        <AlertBox title='مقاله ای وجود ندارد' />
      )

      }
      <PaginatioComponent currentPageHandler={currentPageHandler} data={articles} pageSize={5} />



    </div>
  )
}

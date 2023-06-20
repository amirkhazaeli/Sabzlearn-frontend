import React from 'react'
import './ProductItem.css'
import formatNumber from '../../Assets/Utils/formatNumber'
export default function ProductItem({data}) {
  return (
    <div className='product-item'>
        <img src={data.image} alt="" />
        <div className='product-information'>
            <span className='product-category'>{data.category}</span>
             <h1 className='product-title'>{data.title}</h1>
             <div className='product-price'>
                <h3>{
                  formatNumber(data.price)
                  }</h3>
                <div className='course-student'>
                    <span className='student-count'>{data.student}</span>
                    <span>دانشجو</span>
                </div>
             </div>
        </div>
        {
          data.off ? (
            <span className='product-off'>100%</span>
          ) : null
        }
       
    </div>
  )
}

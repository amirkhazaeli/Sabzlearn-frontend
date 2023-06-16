import React from 'react'
import productImage from '../../Assets/images/productImage.png'
import './ProductItem.css'
export default function ProductItem() {
  return (
    <div className='product-item'>
        <img src={productImage} alt="" />
        <div className='product-information'>
            <span className='product-category'>هوش مصنوعی</span>
             <h1 className='product-title'>دوره کاربردی هوش مصنوعی</h1>
             <div className='product-price'>
                <h3>480,000 تومان</h3>
                <div className='course-student'>
                    <span className='student-count'>1090</span>
                    <span>دانشجو</span>
                </div>
             </div>
        </div>
        <span className='product-off'>100%</span>
    </div>
  )
}

import React from 'react'
import ArticleSlider from '../../Components/ArticleSlider/ArticleSlider'
import ProductComponent from '../../Components/Products/ProductComponent'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
    <SearchBox />
    <ProductComponent />
    <ArticleSlider />
    <Footer />
    </>
  )
}

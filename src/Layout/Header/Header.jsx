import React, { memo } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TopHeader from '../../Components/TopHeader/TopHeader'

function Header() {
  return (
    <div className='header-section'>
        <TopHeader />
        <Navbar />
    </div>

  )
}
export default memo(Header)

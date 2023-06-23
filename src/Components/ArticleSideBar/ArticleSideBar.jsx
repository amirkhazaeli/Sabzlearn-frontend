import React from 'react'
import { motion } from 'framer-motion';
import './ArticleSideBar.css'
import ArticleSideBarItem from '../ArticleSideBarItem/ArticleSideBarItem';
import { Link } from 'react-router-dom';
export default function ArticleSideBar({CoursesFilter}) {
    return (
        <motion.div
            className='Article-Item'
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className='article-sidebar-title'>محصولات محبوب</h1>
            <div className='article-sidebar-items'>
                {
                    CoursesFilter.map((course)=>(
                        <Link to={`/productInfo/${course.id}`}>
                          <ArticleSideBarItem course={course}/>
                        </Link>
                      
                    ))
                }
           
    
            </div>
        </motion.div>

    )
}

import React from 'react'
import { motion } from 'framer-motion';
import './ArticleSideBar.css'
import ArticleSideBarItem from '../ArticleSideBarItem/ArticleSideBarItem';
import courses from '../../Assets/Data/courses'
export default function ArticleSideBar() {
    return (
        <motion.div
            className='Article-Item'
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className='article-sidebar-title'>محصولات پرفروش</h1>
            <div className='article-sidebar-items'>
                <ArticleSideBarItem />
                <ArticleSideBarItem />
                <ArticleSideBarItem />
            </div>
        </motion.div>

    )
}

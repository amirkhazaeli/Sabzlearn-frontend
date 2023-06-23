import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './ArticleItem.css'
import { motion } from 'framer-motion';
export default function ArticleItem({ article }) {
    return (
        <motion.div
            className='Article-Item'
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <Row className='article-item-row'>
                <Col lg={3}>
                    <div className='article-item-image'>
                        <img src={article.image} alt="" />
                    </div>
                </Col>
                <Col lg={9}>
                    <div className='Article-Item-left'>
                        <h1>{article.title}</h1>
                        <p>
                            {
                                article.desc
                            }
                        </p>
                        <span>{article.comment} دیدگاه</span>
                    </div>
                </Col>
            </Row>
        </motion.div>
    )
}

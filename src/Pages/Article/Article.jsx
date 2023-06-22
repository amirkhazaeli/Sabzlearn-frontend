import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import ArticlesComponent from '../../Components/ArticlesComponent/ArticlesComponent'
import ArticleSideBar from '../../Components/ArticleSideBar/ArticleSideBar'
import Header from '../../Layout/Header/Header'

export default function Article() {
    return (
        <>
            <Header />
            <Container fluid='lg' style={{marginTop: '2rem'}}>
                <Row>
                    <Col lg={8}>
                        <ArticlesComponent />
                    </Col>
                    <Col lg={4}>
                        <ArticleSideBar />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

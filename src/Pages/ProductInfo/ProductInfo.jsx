import React from 'react'
import { Container } from 'react-bootstrap'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Header from '../../Layout/Header/Header'

export default function ProductInfo() {
    return (
        <>
            <Header />
            <Container fluid='lg'>
                <BreadCrumb />
            </Container>

        </>
    )
}

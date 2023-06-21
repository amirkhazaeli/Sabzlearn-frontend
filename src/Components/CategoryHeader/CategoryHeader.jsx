import React from 'react';
import './CategoryHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

export default function CategoryHeader() {
    return (
        <div className='category-header'>
            <Row>
                <Col  md={4} lg={6}>
                    <div className='category-header-right'>
                        <select>
                            <option value="">
                                مرتب سازی پیش فرض
                            </option>
                            <option value="">
                                گران ترین
                            </option>
                            <option value="">
                                ارزان ترین
                            </option>
                        </select>

                    </div>
                </Col>
                <Col md={4}  lg={6}>
                    <div className='category-header-left'>
                        <input type="text" placeholder='جستجوی دوره...' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </Col>
            </Row>


        </div>
    )
}

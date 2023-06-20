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
                        </select>

                    </div>
                </Col>
                <Col md={4}  lg={6}>
                    <div className='category-header-left'>
                        <input type="text" value='جستجوی دوره...' />
                        <button className='category-search-btn'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import './TopHeader.css'
import { Container } from 'react-bootstrap';
export default function TopHeader() {
    return (
        <div className='top-header'>
            <Container fluid='lg'>
            <div className='top-header-wrapper '>
                <div className='top-header-right'>
                    <ul>
                        <li className='Cooperation'>
                            <FontAwesomeIcon icon={faCommentsDollar} />
                            همکاری با سبزلرن
                        </li>
                        <li>همه دوره ها</li>
                    </ul>
                </div>
                <div className='top-header-left'>
                    <span>sabzlearn@gmail.com</span>
                    <div className='top-header-icons'>
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

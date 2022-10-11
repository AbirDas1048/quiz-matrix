import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Header.css';
import background from '../../images/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeftAlt, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Container className='my-3'>
            <Row className='align-items-center'>
                <Col sm={8}><Image src={background} className="img-fluid"></Image></Col>
                <Col sm={4}>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeftAlt}></FontAwesomeIcon>
                        <span className='quote-text'>Programming is the art of telling another human being what one wants the computer to do.</span>
                        <FontAwesomeIcon icon={faQuoteRightAlt}></FontAwesomeIcon>
                        <span className='quote-by'> ― Donald Ervin Knuth</span>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
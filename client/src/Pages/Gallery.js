import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import galImg1 from '../Assets/Images/gal_1.png';
import galImg2 from '../Assets/Images/gal_2.png';
import galImg3 from '../Assets/Images/gal_3.png';
import galImg4 from '../Assets/Images/gal_4.png';
import galImg5 from '../Assets/Images/gal_5.png';
import galImg6 from '../Assets/Images/gal_6.png';
import galImg7 from '../Assets/Images/gal_7.png';
import galImg8 from '../Assets/Images/gal_8.png';
import galImg9 from '../Assets/Images/gal_9.png';
import galImg10 from '../Assets/Images/gal_10.png';
import galImg11 from '../Assets/Images/gal_11.png';
import galImg12 from '../Assets/Images/gal_12.png';
import galImg13 from '../Assets/Images/gal_13.png';

function Gallery() {
    return (
        <Container className="gallery-container">
            <Row className="image-row vertical">
                <Col xs={12} md={3}>
                    <img src={galImg1} alt="sitting in park" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg4} alt="skateboards and merch" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg6} alt="flexing grayscale" />
                </Col>

                <Col xs={12} md={2}>
                    <img src={galImg3} alt="pink bg with flowers" />
                </Col>

            </Row>
            <Row className="image-row horizontal" >
                <Col xs={12} md={4}>
                    <img src={galImg2} alt="teal bg with couch" />
                </Col>

                <Col xs={12} md={4}>
                    <img src={galImg5} alt="studio on piano" />
                </Col>
                <Col xs={12} md={4}>
                    <img src={galImg12} alt="studio organizing" />
                </Col>
            </Row>
            <Row className="image-row vertical">
                <Col xs={12} md={3}>
                    <img src={galImg7} alt="recording studio with mic" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg8} alt="on stage with mic" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg9} alt="in studio" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg10} alt="street with basketball" />
                </Col>
            </Row>
            <Row className="image-row vertical">
                <Col xs={12} md={3}>
                    <img src={galImg11} alt="airplane" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg13} alt="guitar" />
                </Col>


            </Row>
            <h4 className="reg-text">Have cool pics to add? Email vanthemanofficial@gmail.com</h4>
        </Container>
    );
}

export default Gallery;
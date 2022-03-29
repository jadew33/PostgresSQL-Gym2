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

function Gallery(){
    return (
        <>
            <Container>
                <Row className="image-row">
                    <Col xs={3} md={1} />
                    <Col xs={9} md={3}>
                        <img src={ galImg1 } alt="image_1" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={ galImg2 } alt="image_2" />
                    </Col>
                    <Col xs={3} md={1} />
                    <Col xs={9} md={2}>
                        <img src={ galImg3 } alt="image_3" />
                    </Col>
                
                </Row>
                <Row className="image-row">
                    <Col xs={3} md={1} />
                    <Col xs={9} md={3}>
                        <img src={ galImg4 } alt="image_4" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={ galImg5 } alt="image_5" />
                    </Col>
                    <Col xs={3} md={1} />
                    <Col xs={9} md={2}>
                        <img src={ galImg6 } alt="image_6" />
                    </Col>
                </Row>
                <Row className="image-row">
                    <Col xs={3} md={1}/>
                    <Col xs={9} md={2}>
                        <img src={ galImg7 } alt="image_7" />
                    </Col>
                    <Col xs={3} md={1}/>
                    <Col xs={9} md={2}>
                        <img src={ galImg8 } alt="image_8" />
                    </Col>
                    <Col xs={3} md={1} />
                    <Col xs={9} md={2}>
                        <img src={ galImg9 } alt="image_9" />
                    </Col>
                    <Col xs={3} md={1} />
                    <Col xs={9} md={2}>
                        <img src={ galImg10 } alt="image_10" />
                    </Col>
                    <Col xs={2} />
                </Row>
                <Row className="image-row">
                    <Col xs={2} md={1} />
                    <Col xs={10} md={4}>
                        <img src={ galImg11 } alt="image_11" />
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={ galImg12 } alt="image_12" />
                    </Col>
                    <Col xs={3} md={2} />
                    <Col xs={6} md={1}>
                        <img src={ galImg13 } alt="image_13" />
                    </Col>
                </Row>
                <Row className="separate-row">
                    <Col xs={{ offset: 4}}>
                        <h4 className="reg-text">Have cool pics to add? Email vanthemanofficial@gmail.com</h4>
                    </Col>
                    
                </Row>
            </Container>
        </>
        );
}

export default Gallery;
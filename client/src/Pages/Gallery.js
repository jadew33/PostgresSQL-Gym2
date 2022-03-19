import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

// I know this is super inefficient but mainly wanted to have it done before
// optimising - will replace it with a list read from the folder and then have 
// a map function to generate "photoPiece" components

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
                    <Col xs={2} />
                    <Col xs={2}>
                        <img src={ galImg1 } />
                    </Col>
                    <Col xs={4}>
                        <img src={ galImg2 } />
                    </Col>
                    <Col xs={2}>
                        <img src={ galImg3 } />
                    </Col>
                
                </Row>
                <Row className="image-row">
                    <Col xs={2} />
                    <Col xs={2}>
                        <img src={ galImg4 } />
                    </Col>
                    <Col xs={4}>
                        <img src={ galImg5 } />
                    </Col>
                    <Col xs={2}>
                        <img src={ galImg6 } />
                    </Col>
                </Row>
                <Row className="image-row">
                    <Col xs={2} />
                    <Col>
                        <img src={ galImg7 } />
                    </Col>
                    <Col>
                        <img src={ galImg8 } />
                    </Col>
                    <Col>
                        <img src={ galImg9 } />
                    </Col>
                    <Col>
                        <img src={ galImg10 } />
                    </Col>
                    <Col xs={2} />
                </Row>
                <Row className="image-row">
                    <Col xs={2} />
                    <Col xs={2}>
                        <img src={ galImg11 } />
                    </Col>
                    <Col xs={4}>
                        <img src={ galImg12 } />
                    </Col>
                    <Col xs={2}>
                        <img src={ galImg13 } />
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
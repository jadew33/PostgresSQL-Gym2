import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import tourImg from '../Assets/Images/tour_page.png';

function Tour() {
    return (
        <>
            <Container fluid="sm" className="tour-contain">
                <Row>
                    <Col>
                        <Image src={tourImg} className="tour-image" />
                    </Col>
                    <Col >
                        <p className="subtext">Past Tours</p>
                        <hr className=""/>
                        <div className="tour-text">
                            <p>
                                Saturday, Sept. 11, 2021
                                <br />
                                Spanky's Downtown
                                <br />
                                Peterborough, ON
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="top-buffer">
                    <Col>
                        <p className="subtext current">Current Tours</p>
                        <hr className="current-hr"/>
                        <p className="check-back">
                            Check Back Soon!
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Tour;
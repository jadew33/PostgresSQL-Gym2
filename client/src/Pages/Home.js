import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import homePageImage from "../Assets/Images/home_page.png";

function Home() {
    return (
        <>
            <Container fluid='md'>
                <Row>
                    <Col>
                        <img src={homePageImage} className='home-image'alt='Van The Man'/>
                    </Col>
                    <Col>
                        <YoutubeEmbed embedId="5GrAPrapSqs" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home; 
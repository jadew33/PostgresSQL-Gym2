import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Footer(){
    return (
        <Container className='footer-contain footer fixed-bottom no-horizontal-padding'>
            <Row className='align-items-center no-horizontal-padding'>
                <Col xs={5}>
                    <p className='subtext'>Join The Mailing Squad!!</p>
                </Col>
                <Col xs={5}>
                    <Form>
                        <Form.Control type='email' placeholder='EMAIL ADDRESS' />
                    </Form>
                </Col>
                <Col className='justify-content-end'>
                    <Button variant='secondary' className='small-salt' type='submit'>Submit</Button>
                </Col>
            </Row>
        </Container>
        );
}

export default Footer;
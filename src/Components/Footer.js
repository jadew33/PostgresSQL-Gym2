import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Footer(){
    return (
        <Container className='footer fixed-bottom bottom-horizontal-padding'>
            <Row className='footer-contain align-items-center bottom-horizontal-padding'>
                <Col xs={3} />
                <Col xs={3} className='col-centered'>
                    <p className='subtext'>Join The Mailing Squad!!</p>
                </Col>
                <Col xs={3}>
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
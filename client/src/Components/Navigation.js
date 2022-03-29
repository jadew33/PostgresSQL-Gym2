import React from "react";
import { LinkContainer } from "react-router-bootstrap"; 
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(){
    return (
        <Navbar className="top-horizontal-padding" sticky="top" expand='lg'>
            <Container className="full-width">
                <LinkContainer to='/'>
                    <Navbar.Brand className='title-text' href="#home">Van<span className="subtext">The</span>Man</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer to='/about'>
                            <Nav.Link className='page-link-text'>About</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/music'>
                            <Nav.Link className='page-link-text'>Music</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/gallery'>
                            <Nav.Link className='page-link-text'>Photos</Nav.Link>
                        </LinkContainer>

                        <a className="page-link-text special-nav" href="https://vanthemanmerch.square.site/">Shop</a>
                        
                        <LinkContainer to='/tour'>
                            <Nav.Link className='page-link-text'>Tour</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/guestbook'>
                            <Nav.Link className='page-link-text'>Guestbook</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default Navigation;
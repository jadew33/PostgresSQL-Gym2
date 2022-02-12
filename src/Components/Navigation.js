import React from "react";
import { LinkContainer } from "react-router-bootstrap"; 
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(){
    return (
        <Navbar className="no-horizontal-padding" sticky="top" expand='md'>
            <Container>
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
                        
                        <LinkContainer to='/shop'>
                            <Nav.Link className='page-link-text'>Shop</Nav.Link>
                        </LinkContainer>

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
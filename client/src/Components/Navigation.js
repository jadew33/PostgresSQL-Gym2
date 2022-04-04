import React, {useState} from "react";
import { LinkContainer } from "react-router-bootstrap"; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import VanTheMan from '../Assets/Handwriting/VanTheManBlack.png'

function Navigation(){
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="top-horizontal-padding" sticky="top" expand='lg' expanded={expanded}>
            <Container className="full-width">
                <LinkContainer to='/'>
                    <Navbar.Brand href="#home">
                        <img src={VanTheMan} className="nav-vantheman" alt="van the man logo"/>
                    </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer to='/about'>
                            <Nav.Link className='page-link-text' onClick={() => setExpanded(false)}>About</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/music'>
                            <Nav.Link className='page-link-text' onClick={() => setExpanded(false)}>Music</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/gallery'>
                            <Nav.Link className='page-link-text' onClick={() => setExpanded(false)}>Photos</Nav.Link>
                        </LinkContainer>

                        <a className="page-link-text special-nav" href="https://vanthemanmerch.square.site/" onClick={() => setExpanded(false)} >Shop</a>
                        
                        <LinkContainer to='/tour'>
                            <Nav.Link className='page-link-text' onClick={() => setExpanded(false)}>Tour</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/guestbook'>
                            <Nav.Link className='page-link-text' onClick={() => setExpanded(false)}>Guestbook</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default Navigation;
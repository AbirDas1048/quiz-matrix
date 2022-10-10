import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Quiz Matrix
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/quiz">Quiz</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link> */}
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/quiz">Quiz</NavLink>
                        <NavLink className='nav-link' to="/blog">Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavBar;

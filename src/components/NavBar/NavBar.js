import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
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
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/home">Home</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/quiz">Topics</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/statics">Statics</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/blog">Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavBar;

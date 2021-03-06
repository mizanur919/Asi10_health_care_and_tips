import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="header-nav text-white" variant="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="brand"><span className="text-white text-uppercase fw-bold">Therapy <span className="text-info">Care</span> Point</span></Navbar.Brand>

                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="mr-auto my-2 my-lg-0 my-nav"
                            style={{ color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home"><span className="text-white">Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services"><span className="text-white">Services</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/talktoexperts"><span className="text-white">Talk To Specialist</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/healthtips"><span className="text-white">Health Tips Pro</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/aboutus"><span className="text-white">About Us</span></Nav.Link>
                            {
                                user.email
                                    ?
                                    <div>
                                        <Button onClick={logOut} variant="info"><span className="text-white">LogOut</span></Button>
                                        <span className="fw-bold"> Hello, {user.displayName} </span>
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login"><span className="text-white">Login</span></Nav.Link>
                                        <Nav.Link as={Link} className="signup-button" to="/signup"><span className="text-white">Sign up</span></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
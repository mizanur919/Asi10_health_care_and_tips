import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="header-section">
                <Navbar className="header-nav" variant="light" sticky="top">
                    <Container>
                        <Nav.Link>
                            <Navbar.Brand as={HashLink} to="/home#home" className="brand"><span className="text-white text-uppercase fw-bold">Therapy <span className="text-info">Care</span> Point</span></Navbar.Brand>
                        </Nav.Link>

                        <Nav className="justify-content-end my-nav">
                            <Nav.Link as={HashLink} to="/home#home"><span className="text-white">Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services"><span className="text-white">Services</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/talktoexperts"><span className="text-white">Talk To Specialist</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/aboutus"><span className="text-white">About Us</span></Nav.Link>
                            {
                                user.email
                                    ?
                                    <div>
                                        <Button onClick={logOut} variant="info"><span className="text-white">LogOut</span></Button>
                                        <span> Hello, {user.displayName} </span>
                                        <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login"><span className="text-white">Login</span></Nav.Link>
                                        <Nav.Link as={Link} className="signup-button" to="/signup"><span className="text-white">Sign up</span></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
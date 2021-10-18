import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="header-section">
                <Navbar bg="light" className="header-nav" variant="light">
                    <Container>
                        <Nav.Link><Navbar.Brand as={Link} to="/home">Cafe Spice</Navbar.Brand></Nav.Link>

                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            {
                                user.email
                                    ?
                                    <div>
                                        <Button onClick={logOut} variant="info">LogOut</Button>
                                        <span> Hello, {user.displayName} </span>
                                        <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} className="signup-button" to="#pricing">Sign up</Nav.Link>
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
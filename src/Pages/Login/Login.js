import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded col-md-3 mx-auto align-items-center">
                <h4 className="font-weight-bold mb-4">Therapy Care Point</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button className="login-button btn btn-primary w-100" type="submit">Login</button>
                </Form>
                <NavLink className="new-account" as={Link} to="/signup">New to Cafe Spice? Create Account.</NavLink>
                <hr />
                <p>Or</p>
                <button className="google-signing-button btn btn-primary btn-sm" type="submit">Google</button>
            </div>
        </div>
    );
};

export default Login;
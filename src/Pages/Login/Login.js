import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import './Login.css'


const Login = () => {
    const {signInUsingGoogle, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    
    const handleLogIn = () =>{
        setIsLoading(true)
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }
    return (
        <div className="login-container">
            <div className="bg-white login-form rounded col-md-3 p-5">
                <h4 className="font-weight-bold mb-2 text-uppercase">Therapy Care Point</h4>
                <h6 className="mt-3 mb-4 fw-bold text-info">Log in to your account</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button className="login-button btn btn-primary w-100" type="submit">Login</button><br /><br />
                </Form>
                <NavLink className="new-account" as={Link} to="/signup">New to Cafe Spice? Create Account.</NavLink><br /><br />
                <p>Or</p>
                <button onClick={handleLogIn} className="google-signing-button btn btn-primary btn-sm" type="submit"><i class="fab fa-google"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
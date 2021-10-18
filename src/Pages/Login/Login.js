import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';


const Login = () => {
    const {signInUsingGoogle, isLoading, setIsLoading} = useAuth();
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
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded col-md-3 mx-auto align-items-center">
                <h4 className="font-weight-bold mb-4 text-uppercase">Therapy Care Point</h4>
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
                <button onClick={handleLogIn} className="google-signing-button btn btn-primary btn-sm" type="submit">Google</button>
            </div>
        </div>
    );
};

export default Login;
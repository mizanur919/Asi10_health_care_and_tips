import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleName = e =>{
        setName(e.target.value);
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if(password.length < 6)
        {
            setError('Password should be at least 6 characters');
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password))
        {
            setError('Password must contain minimum 2 uppercase letters');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded col-md-3 mx-auto align-items-center">
                <h4 className="font-weight-bold mb-4 text-uppercase">Therapy Care Point</h4>
                <h6 className="mt-3 mb-4 fw-bold text-info">Create a new account</h6>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleName} type="text" placeholder="Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                        <span className="text-danger">{error}</span>
                    </Form.Group>
                    <button className="btn btn-primary w-100" type="submit">Sign Up</button><br /><br />
                </Form>
                <NavLink className="new-account" as={Link} to="/login">Already have an account?</NavLink>
            </div>
        </div>
    );
};

export default Signup;
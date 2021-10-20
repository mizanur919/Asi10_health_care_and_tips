import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-logo">
                            <NavLink to="/home" activeStyle={{ color: "#ffffff" }}><span className="text-white text-uppercase fw-bold">Therapy <span className="text-info">Care</span> Point</span></NavLink >
                            <p style={{ padding: "10px 30px 0 0", textAlign: "justify", fontSize: "14px" }}>Physical therapy can help you strengthen the muscles and surrounding muscles associated with your injury.</p>
                        </div>
                        <div className="col-md-4 footer-menu-left d-flex justify-content-center">
                            <ul className="nav flex-column text-left">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Why we are?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Get service at home</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-menu-right d-flex justify-content-center">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Your opinion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our happy clients</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center">Copyright &copy; 2021 <span className="fw-bold">Therapy <span className="text-info">Care</span> Point</span></p>
            </div>
        </>
    );
};

export default Footer;
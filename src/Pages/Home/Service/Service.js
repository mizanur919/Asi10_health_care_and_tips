import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, description, img, price } = service;
    return (
        <div className="col-md-4 mb-3">
            <div className="card pb-3 service-info">
                <div className="card-body text-center service-details">
                    <div className="h1 mb-3">
                        <img className="img-fluid w-75" src={img} alt="" />
                    </div>
                    <div className="cart-title mb-3">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <p className="cart-text">{description}</p>
                    <p>$ {price}</p>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm add-to-cart-button"><i class="fas fa-cart-plus"></i> Read More</button>
                </div>
            </div>
        </div >
    );
};

export default Service;
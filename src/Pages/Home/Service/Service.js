import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, description, img } = service;
    return (
        <div className="col">
            <div className="card h-100 pb-3">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0 ,100)}</p>
                </div>
                <Link to={`/servicedetails/${id}`} className="btn btn-info text-dark w-50 mx-auto"><i className="fas fa-cart-plus"></i> Book Now</Link>
            </div>
        </div>
    );
};

export default Service;
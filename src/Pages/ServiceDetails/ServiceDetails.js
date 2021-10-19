import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setService(data.find(singleService => singleService.id === parseInt(serviceId)))
            })
    }, [])

    return (
        <div className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <h5>Fee: ${service.price}</h5>
                        <button className="btn btn-info display-inline-block mt-3">Book Now</button>
                    </div>
                    <div className="col-md-6">
                        <img className="rounded" src={service.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
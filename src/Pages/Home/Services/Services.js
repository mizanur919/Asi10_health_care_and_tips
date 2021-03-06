import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="p-5" id="services">
            <div className="container">
                <h2 className="text-center mb-5">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
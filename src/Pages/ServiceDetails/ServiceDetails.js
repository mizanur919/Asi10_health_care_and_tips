import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setService(data.find(singleService => singleService.id === parseInt(serviceId)))
        })
    },[])
    
    return (
        <div>
            <p>service id: {serviceId}</p>
            <p>{service.title}</p>
            <p>{service.description}</p>
            <p>{service.price}</p>
            <img src={service.img} alt="" />
        </div>
    );
};

export default ServiceDetails;
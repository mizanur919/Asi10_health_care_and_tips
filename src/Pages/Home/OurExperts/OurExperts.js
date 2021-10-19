import React, { useEffect, useState } from 'react';
import OurExpert from '../OurExpert/OurExpert';
import './OurExperts.css'

const OurExperts = () => {

    const [specialist, setSpecialist] = useState([]);
    useEffect(() => {
        fetch('./experts.json')
            .then(res => res.json())
            .then(data => setSpecialist(data))
    }, [])

    return (
        <div className="p-5" id="experts">
            <div className="container">
                <h2 className="text-center mb-5">Our Specialists</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        specialist.map(singleSpecialist => <OurExpert
                            key={singleSpecialist.id}
                            singleSpecialist={singleSpecialist}
                        ></OurExpert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurExperts;
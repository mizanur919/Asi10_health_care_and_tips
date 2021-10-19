import React from 'react';
import { Link } from 'react-router-dom';
import './OurExpert.css'

const OurExpert = ({ singleSpecialist }) => {
    const { name, designation, experience, img } = singleSpecialist;
    return (
        <div className="col">
            <div className="card h-100 pb-3 expert-card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Specialist In: {designation}</p>
                    <h6>Experience: {experience}</h6>
                </div>
                <div className="mx-auto" style={{margin: "20px 0"}}>
                    <Link><i style={{color: "#212529", fontSize:"30px"}} class="fab fa-facebook-square"></i></Link>
                    <Link><i style={{color: "#212529", fontSize:"30px", margin: "0 10px"}} class="fab fa-twitter-square"></i></Link>
                    <Link><i style={{color: "#212529", fontSize:"30px"}} class="fab fa-linkedin"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default OurExpert;
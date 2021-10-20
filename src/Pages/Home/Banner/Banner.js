import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Welcome To <br /> <span className="text-uppercase">Therapy Care Point</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
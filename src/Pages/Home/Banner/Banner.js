import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner container-fluid">
            <h2>Welcome To <br /> <span className="text-uppercase">Therapy Care Point</span></h2>
            <button className="search-button">Learn More</button>
        </div>
    );
};

export default Banner;
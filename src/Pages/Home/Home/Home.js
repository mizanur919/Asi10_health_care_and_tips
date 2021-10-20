import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import OurExperts from '../OurExperts/OurExperts';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscription></Subscription>
            <OurExperts></OurExperts>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;
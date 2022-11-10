import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Advertise></Advertise>
            <About></About>
        </div>
    );
};

export default Home;
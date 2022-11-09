import React from 'react';
import img1 from '../../../assets/images/banner/About4.jpg';

const About = () => {
    return (
        <div className="hero my-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} alt="/" className="max-w-sm rounded-lg shadow-2xl w-full h-full" />
                <div className=' w-2/5 m-4'>
                    <h1 className="text-5xl font-bold">About us!</h1>
                    <p className="py-6 ">Now days We are no.1 tourist service provider in this country. We have trusted links with international service provoders. to know more press 'About Us' button</p>
                    <button className="btn btn-primary">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default About;
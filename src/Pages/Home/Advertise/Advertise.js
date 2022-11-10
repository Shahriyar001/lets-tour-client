import React from 'react';
import img from '../../../assets/images/banner/download.jpg'

const Advertise = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukl4z1q2WgPI2h4CwD3P32nt386PHHHzFzw&usqp=CAU")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Visitors</h1>
                    <p className="mb-5">We are going to throw a new service named Paragliding. To get the service Enrole Now</p>
                    <button className="btn btn-primary">Enrole</button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;
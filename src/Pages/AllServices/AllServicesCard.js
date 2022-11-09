import React from 'react';

const AllServicesCard = ({ service }) => {
    const { img, price, title, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h1 className="card-title text-3xl">{title}</h1>
                <p className='text-xl'>{details.slice(0, 120) + '...'}</p>
                <p className='text-2xl text-blue-500'>$ {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Review</button>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;
import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl'>{details.slice(0, 45) + '...'}</p>
                <p className='text-2xl text-blue-500'>$ {price}</p>

            </div>
        </div>
    );
};

export default ServiceCard;
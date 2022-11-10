import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesCard = ({ service }) => {
    const { _id, img, price, title, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h1 className="card-title text-3xl">{title}</h1>
                <p className='text-xl'>{details.slice(0, 120) + '...'}</p>
                <p className='text-2xl text-blue-500'>$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Set Review</button>
                    </Link>
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;
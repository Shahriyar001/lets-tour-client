import React from 'react';

const AllReCard = ({ soloReview }) => {
    console.log(soloReview);
    const { img, serviceName
        , customer, review } = soloReview;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">Review</h2>
                <h2 className="card-title">{serviceName
                }</h2>


                <p className='text-2xl' >Customer: {customer}</p>
                <p className='text-xl'>"{review}"</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default AllReCard;
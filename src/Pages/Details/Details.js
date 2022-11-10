import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EveryReview from '../EveryReview/EveryReview';

const Details = () => {
    const { title, img, details, price } = useLoaderData()
    return (
        <div>
            <div className="card w-3/4 mx-auto my-10 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" className='w-3/4' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='text-xl'>{details}</p>
                    <p className='text-3xl text-blue-500 my-3'>$ {price}</p>
                    <div className="card-actions justify-between">
                        <div className="rating mt-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <button className="btn btn-primary">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <EveryReview>

                </EveryReview>
            </div>
        </div>

    );
};

export default Details;
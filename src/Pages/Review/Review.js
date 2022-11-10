import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, title, img, details, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregisterd';
        const review = form.review.value;

        const allReview = {
            service: _id,
            serviceName: title,
            details,
            price,
            customer: name,
            email,
            review

        }
        fetch('http://localhost:5000/allReview', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review set successfully')
                    form.reset();
                }
            })
            .catch(er => console.log(er))
    }
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
                            <button className="btn btn-primary mx-3">Add Review</button>
                            <button className="btn btn-primary">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1'>
                    <h1 className='text-2xl my-8 text-center'><strong>Set Review</strong></h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-3/4'>
                        <input name='name' type="text" placeholder="Name" className="input input-ghost w-full input-bordered m-1" required />
                        <input name='email' type="text" placeholder="Email"
                            defaultValue={user?.email} className="input input-ghost w-full input-bordered m-1" readOnly />
                    </div>
                    <textarea name='review' className="textarea textarea-bordered h-30 w-3/4 mx-auto my-5" placeholder="Your Exparience" required ></textarea>

                    <input className='btn w-1/5 mx-auto my-5' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Review;
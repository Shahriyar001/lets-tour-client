import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AllReCard from './AllReCard';

const Allreview = () => {
    const { user } = useContext(AuthContext);
    const [allReview, setAllReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-5xl text-center my-8'><strong>My Reviews</strong></h1>
            {
                allReview.map(soloReview => <AllReCard
                    key={soloReview._id}
                    soloReview={soloReview}
                ></AllReCard>)
            }
        </div>
    );
};

export default Allreview;
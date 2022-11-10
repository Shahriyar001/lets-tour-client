import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import EveryReviewCard from './EveryReviewCard';

const EveryReview = () => {
    const [everyRev, setEveryRev] = useState([]);

    useEffect(() => {
        fetch('https://lets-tour-server.vercel.app/allReview')
            .then(res => res.json())
            .then(data => setEveryRev(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-center'>Review {everyRev.length}</h1>
            {
                everyRev?.map(oneRev =>
                    <EveryReviewCard
                        key={oneRev._id}
                        oneRev={oneRev}

                    ></EveryReviewCard>
                )
            }
        </div>
    );
};

export default EveryReview;
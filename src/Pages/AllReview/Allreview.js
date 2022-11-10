import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

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
            <h2 className='text-5xl'>Allreview of yours{allReview.length}</h2>
        </div>
    );
};

export default Allreview;
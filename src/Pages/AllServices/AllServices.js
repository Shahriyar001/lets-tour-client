import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://lets-tour-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-blue-600 my-3'>Services</p>
                <h2 className='text-5xl font-semibold my-3'>Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allServices.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;
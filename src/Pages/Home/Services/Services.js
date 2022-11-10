import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://lets-tour-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-blue-600 my-3'>Services</p>
                <h2 className='text-5xl font-semibold my-3'>Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-5'>
                <button className='btn btn-primary px-8'><Link to="/allServices">See All</Link></button>
            </div>

        </div>
    );
};

export default Services;
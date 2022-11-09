import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-center mx-auto transform -translate-y-1/2 left-2/4 right-50% top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Travel <br /> With Us <br /> To Get Great Experiences
                </h1>
            </div>
            <div className="absolute flex justify-center mx-auto transform -translate-y-1/2 w-2/5 left-2/4 right-50% top-2/4">
                <p className='text-xl text-white mt-3'>TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER
                    DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;
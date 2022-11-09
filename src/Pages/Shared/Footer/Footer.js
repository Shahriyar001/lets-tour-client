import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-20 bg-black text-white">
            <div>
                <h1 className='text-5xl'>Lets Tour</h1>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Holyday</a>
                <a href="/" className="link link-hover">Transport</a>
                <a href="/" className="link link-hover">Hotel</a>
                <a href="/" className="link link-hover">Resturant</a>
                <a href="/" className="link link-hover">Tourist guide</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
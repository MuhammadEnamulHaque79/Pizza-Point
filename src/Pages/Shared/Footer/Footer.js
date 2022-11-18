import React from 'react';
import './Footer.css';

const Footer = () => {
const today = new Date();
const year = today.getFullYear();

    return (
        <footer className='footer-container'>
            <p className='text-center'>Copyright<span className='font-monospace'>&copy;{year}</span> Pizza Point</p>
        </footer>
    );
};

export default Footer;
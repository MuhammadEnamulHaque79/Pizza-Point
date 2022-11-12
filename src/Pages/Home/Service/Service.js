import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='service-container'>
            <img style={{ width: '385px', height: '385px' }} src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>price : {price}</p>
            <p>description : {description}</p>
            <button>Choose First : {name}</button>

        </div>
    );
};

export default Service;


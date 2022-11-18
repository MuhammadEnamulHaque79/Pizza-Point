import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, img, name, price, description } = service;
    const navigate=useNavigate();
    const navigateToServiceDetail=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            
            <img style={{ width: '400px', height: '385px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)}>Booking : {name}</button>

        </div>
    );
};

export default Service;


import React from 'react';
// import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const services=[
   
    {
     "id":1,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    },
    {
     "id":2,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    },
    {
     "id":3,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    },
    {
     "id":4,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    },
    {
     "id":5,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    },
    {
     "id":6,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/Z84vN99/img1.png"
    }
   
 ]

const Services = () => {
            
    return (
        <div id="services">
            <h2 className='services-title mt-2 text-primary'>Our Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;



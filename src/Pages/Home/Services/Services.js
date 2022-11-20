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
     "img":"https://i.ibb.co/FKPJyLv/1.jpg"
    },
    {
     "id":2,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/grQJ94s/2.jpg"
    },
    {
     "id":3,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/DVqF16X/3.jpg"
    },
    {
     "id":4,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/xzxpDzV/4.jpg"
    },
    {
     "id":5,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/5847fmb/5.jpg"
    },
    {
     "id":6,
     "name":"vapha pitha",
     "price":10,
     "description":"lorem25",
     "img":"https://i.ibb.co/wY46cz4/6.jpg"
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



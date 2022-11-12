import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const[services,setServices]=useState({});
   useEffect(()=>{
    fetch('services.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setServices(data))
   },[]);
    return (
        <div className='container'>
            {/* <h3> services:{services.length}</h3> */}
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
          
        </div>
    );
};

export default Services;
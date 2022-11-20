import React from 'react';
// import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const services=[
   
    {
     "id":1,
     "name":"Neapolitan Pizza",
     "price":150,
     "description":"Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. Luckily for them, Neapolitan pizza was affordable and readily available through numerous street vendors.",
     "img":"https://i.ibb.co/FKPJyLv/1.jpg"
    },
    {
     "id":2,
     "name":"Chicago Pizza",
     "price":130,
     "description":"Chicago pizza, also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900’s, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved. Instead of imitating the notoriously thin pie, Ike Sewell had something else in mind.",
     "img":"https://i.ibb.co/grQJ94s/2.jpg"
    },
    {
     "id":3,
     "name":"Sicilian Pizza",
     "price":120,
     "description":"Sicilian pizza,This square-cut pizza is served with or without cheese, and often with the cheese underneath the sauce to prevent the pie from becoming soggy. Sicilian pizza was brought to America in the 19th century by Sicilian immigrants and became popular in the United States after the Second World War.",
     "img":"https://i.ibb.co/DVqF16X/3.jpg"
    },
    {
     "id":4,
     "name":"Greek Pizza",
     "price":100,
     "description":"Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. While this style has a crust that is puffier and chewier than thin crust pizzas, it’s not quite as thick as a deep-dish or Sicilian crust as a deep-dish or Sicilian.",
     "img":"https://i.ibb.co/xzxpDzV/4.jpg"
    },
    {
     "id":5,
     "name":"California Pizza",
     "price":105,
     "description":"California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970’s when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego. He created a pizza with mustard, ricotta, pate, and red pepper, and by chance, served it to Wolfgang Puck. Impressed with LaDou’s innovative pie, Puck invited him to be a head pizza chef at his restaurant.",
     "img":"https://i.ibb.co/5847fmb/5.jpg"
    },
    {
     "id":6,
     "name":"Detroit Pizza",
     "price":110,
     "description":"Reflecting the city’s deep ties to the auto industry, Detroit-style pizza was originally baked in a square automotive parts pan in the 1940’s. Detroit pizza is first topped with pepperoni, followed by brick cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is then spooned over the pizza, an order similar to Chicago-style pizza. This pizza features a thick, extra crispy crust that is tender and airy on the inside.",
     "img":"https://i.ibb.co/wY46cz4/6.jpg"
    }
   
 ]

const Services = () => {
            
    return (
        <div id="services">
            <h2 className='services-title mt-2 text-secondary'>Our Services</h2>
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



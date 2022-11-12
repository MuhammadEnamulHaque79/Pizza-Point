import React from 'react';

const Service = (props) => {
    const{img,name,price,description}=props.service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>service : {name}</h3>
            <p>price : {price}</p>
            <p>description : {description}</p>
        </div>
    );
};

export default Service;
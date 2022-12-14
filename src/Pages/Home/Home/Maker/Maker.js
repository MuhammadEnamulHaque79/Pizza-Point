import React from 'react';
import './Maker.css';

const Maker = ({ maker }) => {
    const {name,img,description } = maker;
    
    return (
       
        <div className='maker-container'>
            <img style={{ width: '400px', height: '385px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p style={{textAlign:'justify',marginRight:'5px',marginLeft:'5px'}}>{description}</p>
            <button>Booking : {name}</button>


           
        </div>
    );
};

export default Maker;


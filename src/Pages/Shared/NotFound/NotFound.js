import React from 'react';
import './NotFound.css';
import lazy from '../../../images/makers/lazy.png';


const NotFound = () => {
    return (
        <div className='container-lazy'>
            <h3 className='text-danger text-center mt-3'>Page Not Found!!</h3>
            <img style={{width:'100%',marginBottom:'5px'}} src={lazy} alt="" />
        </div>
    );
};

export default NotFound;
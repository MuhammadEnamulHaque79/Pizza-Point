import React from 'react';
import './Maker.css';

const Maker = ({ maker }) => {
    const { name,img,description } = maker;
    return (
        // <div class="card gx-5 col-sm-12 col-md-6 col-lg-4" style={{width: "18rem"}}>
        //     <img src={img} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <h5 class="card-title">{name}</h5>
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //         </div>
        // </div>
        <div className='maker-container'>
            <img style={{ width: '400px', height: '385px' }} src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>description:{description}</p>
            <button>Booking : {name}</button>
        </div>
    );
};

export default Maker;
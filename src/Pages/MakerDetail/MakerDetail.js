import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MakerDetail = () => {
    const{makerId}=useParams();
    return (
        <div>
            <h3>Maker detail:{makerId}</h3>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout Procceed</button>
                </Link>
            </div>
        </div>
    );
};

export default MakerDetail;
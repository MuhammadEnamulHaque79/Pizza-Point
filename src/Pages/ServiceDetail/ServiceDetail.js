import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>Detail of service :{serviceId}</h3>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout Procceed</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
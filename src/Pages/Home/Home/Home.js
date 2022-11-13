import React from 'react';
import Banner from '../Banner/Banner';
import Makers from '../Makers/Makers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Makers></Makers>
        </div>
    );
};

export default Home;
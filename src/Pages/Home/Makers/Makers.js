import React from 'react';
import './Makers.css';
import Maker from '../Home/Maker/Maker';

import maker1 from '../../../images/makers/maker1.png';
import maker2 from '../../../images/makers/maker2.png';
import maker3 from '../../../images/makers/maker3.png';
import maker4 from '../../../images/makers/maker4.png';
import maker5 from '../../../images/makers/maker5.png';
import maker6 from '../../../images/makers/maker6.png';

const makers=[
    {"id":1,name:'Emma Rice',"img":maker1, "description":'Neapolitan Pizza, this delicious pie dates all the way back to 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. '},
    {"id":2,name:'Olivia',"img":maker2, "description":'Chicago Pizza,also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900’s, Italian immigrants in the windy city were searching for something similar to the Neapolitan.'},
    {"id":3,name:'Charlotte',"img":maker3, "description":'Sicilian pizza, also known as "sfincione," provides a thick cut of pizza with pillowy dough, a crunchy crust,This pizza features a thick, extra crispy crust that is tender and airy on the inside.and airy on the inside'},
    {"id":4,name:'Amelia',"img":maker4, "description":'Greek pizza, was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow'},
    {"id":5,name:'Sophia',"img":maker5, "description":'California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970’s when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego'},
    {"id":6,name:'Isabella',"img":maker6, "description":'Detroit Pizza, Reflecting the city’s deep ties to the auto industry, Detroit-style pizza was originally baked in a square automotive parts pan in the 1940’s.This pizza features a thick, extra crispy crust that is tender'},
]

const Makers = () => {

    return (
        <div id="makers">
            <h2 className='text-center mt-2 text-primary'>Our Pizza Makers</h2>
            <div className="makers-container">
                {
                   makers.map(maker =><Maker
                    key={maker.id}
                    maker={maker}
                   ></Maker>) 
                }
            </div>
          
        </div>
    );
};

export default Makers;
   

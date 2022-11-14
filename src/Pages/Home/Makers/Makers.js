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
    {id:1,name:'Emma Rice',img:maker1, description:'lorem25'},
    {id:2,name:'Olivia',img:maker2, description:'lorem25'},
    {id:3,name:'Charlotte',img:maker3, description:'lorem25'},
    {id:4,name:'Amelia',img:maker4, description:'lorem25'},
    {id:5,name:'Sophia',img:maker5, description:'lorem25'},
    {id:6,name:'Isabella',img:maker6, description:'lorem25'},
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
   

import React from 'react';
import Maker from '../Home/Maker/Maker';

import maker1 from '../../../images/makers/maker1.png';
import maker2 from '../../../images/makers/maker2.png';
import maker3 from '../../../images/makers/maker3.png';
import maker4 from '../../../images/makers/maker4.png';
import maker5 from '../../../images/makers/maker5.png';
import maker6 from '../../../images/makers/maker6.png';

const makers=[
    {id:1,name:'Emma Rice',img:maker1},
    {id:2,name:'Olivia',img:maker2},
    {id:3,name:'Charlotte',img:maker3},
    {id:4,name:'Amelia',img:maker4},
    {id:5,name:'Sophia',img:maker5},
    {id:6,name:'Isabella',img:maker6},
]

const Makers = () => {
   

    return (
        <div className='container'>
            <h3 className='text-primary text-center mt-3'>Our Cake Makers</h3>
            <div className="row">
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
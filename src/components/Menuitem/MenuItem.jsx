import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price}) => (
  <div>
    
    <div>
      <div>
        <p className='p__cormorant' style={{color: '#DDCA87'}}>{title}</p>
      </div>
    </div>
    
    <div>
      <div>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

  </div>
);

export default MenuItem;

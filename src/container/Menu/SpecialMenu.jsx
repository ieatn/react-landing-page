import React from 'react';

import './SpecialMenu.css';
// have to import beer and cocktail data into usestate, map over them and display

const SpecialMenu = () => (
  <div className='menu'>
    <div className="menu-header">
      <p>Menu That Fits Your Palatte</p>
      <h1>Today's Special</h1>
    </div>
    <div className="menu-container">
      <div className="menu-left">
        <h2>Wine & Beer</h2>
        {/* <p>map over beer data</p> */}
      </div>
      <div className="menu-middle">
        cocktail image
      </div>
      <div className="menu-right">
        <h2>Cocktails</h2>    
        {/* <p>map over cocktail data</p> */}
      </div>
    </div>
    <button className="menu-btn">View More</button>
  </div>
);

export default SpecialMenu;

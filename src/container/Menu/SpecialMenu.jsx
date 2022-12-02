import React from 'react';

import './SpecialMenu.css';
import {images, data} from '../../constants'
import {SubHeading, MenuItem} from '../../components'

const SpecialMenu = () => (
  <div className='menu' id='menu'>
    <div className="menu-header">
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className="menu-container">
      <div className="menu-left">
        <h2 className='wine-heading'>Wine & Beer</h2>
        <div className="wine-items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} />
          ))}
        </div>
      </div>
      <div className="menu-middle">
        <img src={images.menu} alt="" />
      </div>
      <div className="menu-right">
        <h2 className='cocktails-heading'>Cocktails</h2>
        <div className="cocktails-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: 15 }}>
        <button className="custom__button">View More</button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;

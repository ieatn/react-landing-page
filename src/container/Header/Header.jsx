import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='header'>
    <div className="header-left">
    <SubHeading title="Chase The New Flavor"/>
      <h1>THE KEY TO FINE DINING</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut natus necessitatibus quam, minima dolorum repudiandae?</p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className="header-right">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;

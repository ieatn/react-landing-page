import React from 'react';

import './Header.css';

const Header = () => (
  <div className='header'>
    <div className="header-left">
      <p>Chase The New Flavor</p>
      <h1>THE KEY TO FINE DINING</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut natus necessitatibus quam, minima dolorum repudiandae?</p>
      <button>Explore Menu</button>
    </div>
    <div className="header-right">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/029/857/Shirogane_learns_Volleyball_2-3_screenshot.png" alt="" />
    </div>
  </div>
);

export default Header;

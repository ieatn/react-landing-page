import React from 'react';

import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className='navbar'>
      <div className="left">
        Gericht
      </div>
      <div className="middle">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </div>
      <div className="right">
        <a href="">Log In/Register</a>
        <a href="">Book Table</a>
      </div>
    </nav>
  </div>
);

export default Navbar;

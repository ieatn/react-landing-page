import React, { useState } from 'react';

import './Navbar.css';
import images from '../../constants/images'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

// change to {} and use return() for usestate
const Navbar = () => {
  // modal toggler
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='navbar'>
      <div className="nav-left">
        <div className="nav-logo"><img src={images.gericht} alt="Gericht" /></div>
      </div>
      <div className="nav-middle">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="#login">Log In / Register</a>
        {/* divider in css */}
        <div></div>
        <a href="/">Book Table</a>
      </div>

      
      {/* modal for mobile */}
      <div className="modal">
        <GiHamburgerMenu className='modal-btn' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {/* if modal is true, render below */}
        {toggleMenu && (
          // slide bottom is custom default animation in index.css
          <div className="nav-bg slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="nav-close" onClick={() => setToggleMenu(false)} />
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;

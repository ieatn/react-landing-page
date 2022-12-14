import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import {images} from '../../constants'
import {FooterOverlay, Newsletter} from '../../components'

const Footer = () => (

  <div className='footer'>
    <FooterOverlay />
    <Newsletter />
    <div className="footer-container app__bg">
      <div className="footer-left">
        <h2>Contact Us</h2>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-344-1230</p>
      </div>
      <div className="footer-middle">
        <img src={images.gericht} alt="" />
        <p>"The Best Way To Find Yourself Is To Lose Yourself In Others."</p>
        <div className="social-media">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        <footer>2021 Gericht. All Rights Reserved.</footer>
      </div>
      <div className="footer-right">
        <h2>Working Hours</h2>
        <p>Monday-Friday:</p>
        <p>08:00 Am - 12:00 Am</p>
        <br />
        <p>Saturday - Sunday:</p>
        <p>07:00 Am - 11:00 Pm</p>  
      </div>
    </div>
  </div>
);

export default Footer;

import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='contact app__bg app__wrapper section__padding'>
    <div className="contact-left">
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iure.</p>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>Mon-Fri: 10:00 Am - 02:00 Am</p>
      <p className='p__opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button className='custom__button' style={{margin: '2rem 0'}}>Visit Us</button>
    </div>
    <div className="contact-right app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;

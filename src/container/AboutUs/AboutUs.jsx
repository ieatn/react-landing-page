import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='about-us app__bg'>
    <div className="about-us-bg flex-center">
      <img src={images.G} alt="" />
    </div>
    <div className="about-left">
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt="" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus quod ipsam sit. Laborum, perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, architecto?</p>
      <button className='about-left-btn custom__button'>Read More</button>
    </div>
    <div className="about-middle">
      <img src={images.knife} alt="" />
    </div>
    <div className="about-right">
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus quod ipsam sit. Laborum, perspiciatis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, nulla?</p>
      <button className='custom__button'>Know More</button>
    </div>
  </div>
);

export default AboutUs;

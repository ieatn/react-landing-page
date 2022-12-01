import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className='about-us'>
    <div className="about-left">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus quod ipsam sit. Laborum, perspiciatis?</p>
      <button className='about-left-btn'>Read More</button>
    </div>
    <div className="about-middle">
      Divider
    </div>
    <div className="about-right">
      <h1>Our History</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus quod ipsam sit. Laborum, perspiciatis?</p>
      <button>Read More</button>
    </div>
  </div>
);

export default AboutUs;

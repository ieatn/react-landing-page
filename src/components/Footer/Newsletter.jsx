import React from 'react';

import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter-title">
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className="newsletter-body">
      <input type="email" placeholder='Enter Your Email Address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

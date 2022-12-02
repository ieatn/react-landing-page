import React from 'react';

import './Chef.css';
import {SubHeading} from '../../components'
import {images} from '../../constants'

const Chef = () => (
  <div className='chef'>
    <div className="chef-left">
      <img src={images.chef} alt="" />
    </div>
    <div className="chef-right">
      <p>Chef's Word</p>
      <h1>What We Believe In</h1>
      <p><span className='chef-quote'>"</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores esse temporibus consequatur dignissimos quidem eveniet magni mollitia ex libero facilis suscipit accusamus, distinctio iusto quibusdam blanditiis tempora doloremque placeat dicta?</p>
      <p className="small-text">Kevin Luo</p>
      <p>Chef and Founder</p>
      <br /> Kevin Luo autograph image
    </div>
  </div>
);

export default Chef;

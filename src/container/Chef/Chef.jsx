import React from 'react';

import './Chef.css';
import {SubHeading} from '../../components'
import {images} from '../../constants'

const Chef = () => (
  // bg is the rocky background image, wrapper is display flex which splits left right divs
  // padding is padding everything
  <div className='chef app__bg app__wrapper section__padding'>
    {/* app wrapper img centers img inside div, reverse moves it left */}
    <div className="chef-left app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="chef-right app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <p className='p__opensans'><span className='chef-quote'><img src={images.quote} alt="quote" /></span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores esse temporibus consequatur dignissimos quidem eveniet magni mollitia ex libero facilis suscipit accusamus, distinctio iusto quibusdam blanditiis tempora doloremque placeat dicta?</p>
      <br />
      <p className="chef-name">Kevin Luo</p>
      <p className='p__opensans'>Chef and Founder</p>
      <br />
      <img src={images.sign} alt="" />
    </div>
  </div>
);

export default Chef;

import React from 'react';

import './Laurels.css';
// import data array which contain awards url, title, subtitle
import {images, data} from '../../constants'
import {SubHeading} from '../../components'

// create a component for each award item, destructure the property names from each object
const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="award-card">
    <img src={imgUrl} alt="award" />
    <p className="p__cormorant">{title}</p>
    <p className="p__cormorant">{subtitle}</p>
  </div>
)

const Laurels = () => (
  // bg for rocky background image, wrapper for display flex, padding for everything
  <div className='laurels app__bg app__wrapper section__padding'>
    <div className="laurels-left">
      <SubHeading title={'Awards & Recognition'}/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      {/* map over each item in awards array in data file and print them out */}
      <div className="awards">
        {data.awards.map((i) => <AwardCard award={i} key={i.title}/>)}
      </div>
    </div>
    <div className="laurels-right">
      <img className='laurel-img' src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;

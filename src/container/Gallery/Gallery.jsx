import React from 'react';

import './Gallery.css';
// import data array which contain awards url, title, subtitle
import {images, data} from '../../constants'
import {SubHeading} from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04,]

  return (
    <div className='gallery flex__center'>
      <div className="gallery-left">
        <SubHeading title={'Instagram'}/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{marginTop: '4rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate vel porro repellat esse dolores.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className="gallery-right">
        <div className="gallery-img-container" ref={scrollRef}>
          {galleryImages.map((i, idx) => (
            <div className="img-card flex__center" key={idx}>
              <img src={i} alt="" />
              <BsInstagram className='img-icon' />
            </div>
          ))}
          <div className="gallery-arrows">
            <BsArrowLeftShort  className='arrow' onClick={() => scroll('left')} />
            <BsArrowRightShort className='arrow'  onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Gallery;

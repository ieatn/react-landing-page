import React from 'react';

import './Gallery.css';

const Gallery = () => (
  <div className='gallery'>
    <div className="gallery-left">
      <p>Instagram</p>
      <h1>Photo Gallery</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate vel porro repellat esse dolores.</p>
      <button>View More</button>
    </div>
    <div className="gallery-right">
      {/* some kind of scroll of images, can use an api, you can hover for gray effect and click to see image on instagram */}
      <img src="https://i.kym-cdn.com/entries/icons/original/000/029/857/Shirogane_learns_Volleyball_2-3_screenshot.png" alt="" />
    </div>
  </div>
);

export default Gallery;

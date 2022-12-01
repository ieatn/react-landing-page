import React from 'react';

import './Laurels.css';

const Laurels = () => (
  <div className='laurels'>
    <div className="laurels-left">
      <p>Awards & Recognition</p>
      <h1 className='award-title'>Our Laurels</h1>
      <ul>
        <li>
          {/* img logo of award */}
          <p className='award-title'>Bib Gourmond</p>
          <p className='award-text'>Lorem ipsum dolor sit amet consectetur.</p>
        </li>
        <li>
          {/* img logo of award */}
          <p className='award-title'>Bib Gourmond</p>
          <p className='award-text'>Lorem ipsum dolor sit amet consectetur.</p>
        </li>
        <li>
          {/* img logo of award */}
          <p className='award-title'>Bib Gourmond</p>
          <p className='award-text'>Lorem ipsum dolor sit amet consectetur.</p>
        </li>
        <li>
          {/* img logo of award */}
          <p className='award-title'>Bib Gourmond</p>
          <p className='award-text'>Lorem ipsum dolor sit amet consectetur.</p>
        </li>
      </ul>
    </div>
    <div className="laurels-right">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/029/857/Shirogane_learns_Volleyball_2-3_screenshot.png" alt="" />
    </div>
  </div>
);

export default Laurels;

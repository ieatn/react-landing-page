import React from 'react';
// pause and play button icons
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

import './Intro.css';
import {meal} from '../../constants'
import { icons } from 'react-icons';
import { useState } from 'react';

// import mp4 video
// need play button over video
// need state to know when to play video
// make it full screen

// change () to {} to write logic above return
const Intro = () => {
  const vidRef = React.useRef()
  const [play, setPlay] = useState(false)

  const playVideo = () => {
    // toggle state if play is false, turn it on
    setPlay((play) => !play)
    if (play) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='video'>
      <video 
          src={meal}
          // videos need a ref
          ref={vidRef}
          type='video/mp4'
          loop
          muted
      ></video>
      {/* overlay to put play button over video, put button in center */}
      {/* flex__center to center both overlay, button, and circle */}
      <div className="video-overlay flex__center">
        {/* circle for play button */}
        <div className="video-overlay-circle flex__center" onClick={playVideo}>
          {/* ternary operator, if video is playing, show pause button, vice versa */}
          {play ? (
            <BsPauseFill color='white' fontSize={30}/>
          ) : <BsFillPlayFill color='white' fontSize={30}/>}
        </div>
      </div>
    </div>
  )
};

export default Intro;

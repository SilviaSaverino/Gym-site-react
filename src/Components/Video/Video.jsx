import React from 'react';
import './Video.css';
import clip from '../../assets/video/dummy-gym-video.mp4';
import x_icon from '../../assets/images/x-icon.png';

const Video = ({ showVideo, setShowVideo }) => {
    
  return (
    <div className={`video-player ${showVideo ? '' : 'hide'}`}>
      <div className="video-container">
        <video src={clip} autoPlay muted controls></video>
        <img
          src={x_icon}
          alt="X icon to exit video clip"
          onClick={() => setShowVideo(false)}
        />
      </div>
    </div>
  );
};

export default Video;
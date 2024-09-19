import React from 'react'
import './Video.css'
import clip from '../../assets/video/dummy-gym-video.mp4'

const Video = ({showVideo, setShowVideo}) => {
  return (
    <div className={`video-player ${showVideo ? '' : 'hide'}`}>
        <video src={clip} autoPlay muted controls></video>
    </div>
  )
}

export default Video
import React from 'react'
import './Video.css'
import clip from '../../assets/video/dummy-gym-video.mp4'

const Video = () => {
  return (
    <div className='video-player hide'>
        <video src={clip} autoPlay muted controls></video>
    </div>
  )
}

export default Video
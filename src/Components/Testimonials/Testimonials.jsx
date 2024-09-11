import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import member_1 from '../../assets/images/member-1.png'
import member_2 from '../../assets/images/member-2.png'
import member_3 from '../../assets/images/member-3.png'
import member_4 from '../../assets/images/member-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt="" className='back-btn'/>
        <div className="slider"></div>
    </div>
  )
}

export default Testimonials
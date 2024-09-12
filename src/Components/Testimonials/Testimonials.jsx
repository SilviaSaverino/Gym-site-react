import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import Member from '../Members/Member'
import memberData from '../../../member-data';


const Testimonials = () => {

    const slider = useRef()
    let translateX = 0

    const slideForward = () => {
       if(translateX > -50){
            translateX -= 25
       }
       slider.current.style.transform = `translateX(${translateX}%)`
    }

    const slideBackward = () => {
        if(translateX < 0){
             translateX += 25
        }
        slider.current.style.transform = `translateX(${translateX}%)`
     }
    

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
        <ul ref={slider}>
                    {memberData.map(member => (
                        <li key={member.id}>
                            <Member member={member} />
                        </li>
                    ))}
                </ul>
        </div>
    </div>
  )
}

export default Testimonials
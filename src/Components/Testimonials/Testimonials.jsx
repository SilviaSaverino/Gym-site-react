import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import member_1 from '../../assets/images/member-1.png'
import member_2 from '../../assets/images/member-2.png'
import member_3 from '../../assets/images/member-3.png'
import member_4 from '../../assets/images/member-4.png'
import memberData from '../../../member-data'


const Testimonials = () => {

    const memberInfo = memberData.map(function(member) {
        return console.log(member) 
    })
    

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt="" className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="member-info">
                            <img src={member_1} alt="" />
                            <div>
                                <h3>name</h3>
                                <h4>Membership <span>whatever</span></h4>
                            </div>
                        </div>
                        <p>"Joining this gym has been a life-changing decision! The trainers are amazing, and the facilities are top-notch. 
                            I've never felt more motivated and supported in my fitness journey."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="member-info">
                            <img src={member_1} alt="" />
                            <div>
                                <h3>name</h3>
                                <h4>Membership <span>whatever</span></h4>
                            </div>
                        </div>
                        <p>"Joining this gym has been a life-changing decision! The trainers are amazing, and the facilities are top-notch. 
                            I've never felt more motivated and supported in my fitness journey."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="member-info">
                            <img src={member_1} alt="" />
                            <div>
                                <h3>name</h3>
                                <h4>Membership <span>whatever</span></h4>
                            </div>
                        </div>
                        <p>"Joining this gym has been a life-changing decision! The trainers are amazing, and the facilities are top-notch. 
                            I've never felt more motivated and supported in my fitness journey."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="member-info">
                            <img src={member_1} alt="" />
                            <div>
                                <h3>name</h3>
                                <h4>Membership <span>whatever</span></h4>
                            </div>
                        </div>
                        <p>"Joining this gym has been a life-changing decision! The trainers are amazing, and the facilities are top-notch. 
                            I've never felt more motivated and supported in my fitness journey."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
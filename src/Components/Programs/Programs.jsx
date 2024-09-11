import React from 'react'
import './Programs.css'
import strength from '../../assets/images/strength-program.png'
import wellbeing from '../../assets/images/wellbeing-program.png'
import hiit from '../../assets/images/hiit-program.png'
import hiit_icon from '../../assets/images/hiit-program-icon.png'
import strength_icon from '../../assets/images/strength-program-icon.png'
import wellbeing_icon from '../../assets/images/wellbeing-program-icon.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={hiit} alt="" />
            <div className="caption">
                <img src={hiit_icon} alt="young man doing hiit exercise at the gym" />
                <p>HIIT & Fat Burn </p>
            </div>
        </div>
        <div className="program">
            <img src={strength} alt="" />
            <div className="caption">
                <img src={strength_icon} alt="young woman doing power exercise at the gym" />
                <p>Strength & Conditioning</p>
            </div>
        </div>
        <div className="program">
            <img src={wellbeing} alt="" />
            <div className="caption">
                <img src={wellbeing_icon} alt="young man doing yoga exercise at the gym" />
                <p>Mind & Body Wellness</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
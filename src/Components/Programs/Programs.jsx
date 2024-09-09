import React from 'react'
import './Programs.css'
import strength from '../../assets/strength-program.png'
import wellbeing from '../../assets/wellbeing-program.png'
import hiit from '../../assets/hiit-program.png'
import hiit_icon from '../../assets/hiit-program-icon.png'
import strength_icon from '../../assets/strength-program-icon.png'
import wellbeing_icon from '../../assets/wellbeing-program-icon.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={hiit} alt="" />
            <div className="caption">
                <img src={hiit_icon} alt="" />
                <p>HIIT & Fat Burn </p>
            </div>
        </div>
        <div className="program">
            <img src={strength} alt="" />
            <div className="caption">
                <img src={strength_icon} alt="" />
                <p>Strength & Conditioning</p>
            </div>
        </div>
        <div className="program">
            <img src={wellbeing} alt="" />
            <div className="caption">
                <img src={wellbeing_icon} alt="" />
                <p>Mind & Body Wellness</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
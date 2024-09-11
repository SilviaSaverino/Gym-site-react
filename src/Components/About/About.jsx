import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon" />
            </div>
            <div className="about-right">
                <h3>About us</h3>
                <h2>Elevate Your Fitness, Transform Your Life</h2>
                <p>
                    At <span>THE GYM</span>, we are committed to helping you achieve your fitness goals,
                    no matter where you are on your journey. <br /> With a team of certified trainers,
                    state-of-the-art equipment, and a welcoming environment,
                    we provide the support and motivation you need to reach your full potential. <br />
                </p>
                <p>
                    From personalized workout plans to group fitness classes, we offer a variety
                    of programs tailored to your needs. Whether you're building strength, increasing endurance,
                    or simply looking to lead a healthier lifestyle, <span>THE GYM</span> is here to guide you every step of the way.
                    <br />
                    Your transformation starts here!
                </p>
            </div>
        </div>
    )
}

export default About
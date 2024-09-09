import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>Unleash Your Inner Strength</h1>
                <p>Join us today and transform your body, mind, and spirit.
                <br></br> 
                Whether you're a beginner or a fitness enthusiast, our state-of-the-art facilities and expert trainers will help you reach your goals. 
                <br></br> 
                It's time to take the first step toward a stronger, healthier you!</p>
                <button className="btn">Learn more <img className="dark-arrow" src={dark_arrow} alt="icon of a dark arrow pointing right" /></button>
            </div>
        </div>
    )
}


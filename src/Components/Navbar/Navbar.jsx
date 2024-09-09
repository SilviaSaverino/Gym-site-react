import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-white.png'

export const Navbar = () => {
    return (
        <nav className='container'>
            <img className="logo" src={logo} alt="gym website logo featuring a dumbbell" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Gym</li>
                <li>Testimonials</li>
                <li>
                    <button className='btn'>Contact us</button>
                </li>
            </ul>
        </nav>
    )
}

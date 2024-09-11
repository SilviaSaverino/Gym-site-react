import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo-white.png'

export const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        
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

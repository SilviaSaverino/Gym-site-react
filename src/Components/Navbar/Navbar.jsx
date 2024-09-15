import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/images/logo-white.png'

export const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className="logo" src={logo} alt="gym website logo featuring a dumbbell" />
            <ul>
                <li><Link to='hero' smoorth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smoorth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smoorth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='showcase' smoorth={true} offset={-260} duration={500}>Gym</Link></li>
                <li><Link to='testimonials' smoorth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li>
                <Link to='contact' smoorth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link>
                </li>
            </ul>
        </nav>
    )
}

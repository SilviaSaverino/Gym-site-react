import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/images/logo-white.png'
import menu_icon from '../../assets/images/menu-icon.png'

export const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
        console.log("clicked")
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className="logo" src={logo} alt="gym website logo featuring a dumbbell" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'} >
                <li id="test"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li>
                <Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link>
                </li>
            </ul>
            <img onClick={toggleMenu} className="burger-menu"src={menu_icon} alt="navigation bar burger icon" />
        </nav>
    )
}

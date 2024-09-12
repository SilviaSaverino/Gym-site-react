import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3><span>Send us a message</span><img src={msg_icon} alt="image of a folder containing a message" /></h3>
                <p>Ready to take the next step in your fitness journey? Whether you have questions about our membership plans, want to learn more about our classes, or need help getting started, we’re here to help!</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="image of an email icon" />dummycontact@thegym.co.uk
                    </li>
                    <li>
                        <img src={phone_icon} alt="image of a phone icon" />+44-123456789
                    </li>
                    <li>
                        <img src={location_icon} alt="image of a location pin icon" />The Gym,
                        123 Fitness Street,
                        London,
                        EC1A 1BB,
                        UK
                    </li>
                </ul>
            </div>
            <div className="contact-col">

            </div>
        </div>
    )
}

export default Contact
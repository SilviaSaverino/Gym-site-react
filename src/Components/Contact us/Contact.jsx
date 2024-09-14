import React from 'react'
import config from '../../config'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {
    //below scrip from https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key",config.accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Form error", data);
            setResult(data.message);
        }
    };

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
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="icon of a white arrow pointing right" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
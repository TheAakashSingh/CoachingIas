import React from 'react'
import './About.css'
import star from '../images/star (2).png'
import './Contactus.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Contactus = () => {
    return (
        <div className="contact">
            <Navbar />
            <div className='Contactus' >
                <div className="contactsec1">
                    <span>Contact Us</span>
                    <span>Contact us and enquire about new upcoming batch for UPSC & BPSC</span>
                </div>
                <div className="contact1">
                    <div className="enqForm">
                        <p>Enquire About New Batch</p>
                        <div>
                            <input type="text" placeholder='Your Name' />
                            <input type="text" placeholder='Your Email' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <input className='msg' type="text" placeholder='Your Message' />
                        <button> SEND MESSAGE</button>
                    </div>
                    <div className="addDetails">
                        <p> <strong>Address:</strong> </p>
                        <span className="adr1">Achievers’ IAS Academy, Patliputra Colony,  Landmark: Tennis Court – 180, Patna <br /> 800013, Bihar</span>
                        <p className="addr2">Phone No: 91-8434931877, 91-7250667974</p>
                        <p className="addr3">Email: info@achieversiaspatna.in</p>
                        <iframe loading="lazy" src="https://maps.google.com/maps?q=Achievers%20IAS%20Academy%20Patna&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Achievers IAS Academy Patna" aria-label="Achievers IAS Academy Patna" data-gtm-yt-inspected-7="true" data-gtm-yt-inspected-12="true"></iframe>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactus
import React from 'react'
import './About.css'
import './Home.css'
import a5 from '../images/a5.jpeg'
import a2 from '../images/a2.jpeg'
import a4 from '../images/a4.jpeg'
import a3 from '../images/a3.jpeg'
import star from '../images/star (2).png'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
    return (
        <div className="aboutSection">
            <Navbar />
            <div className="section1">
                <p>About Us</p>
                <p> The Achievers IAS Academy – Premier coaching institute for UPSC & BPSC preparation in Patna, Bihar</p>
            </div>
            <div className="section2">
                <div className="para1">
                    <p><strong>The Achievers IAS academy </strong> also known as <strong>AIA</strong>, is one of the finest IAS coaching centers in Patna, Bihar. We were the first one to offer courses for civil exams like UPSC & BPSC. And our academy solely targets civil examinations. So you will definitely find a course favourable for you and your civil exam. <br /> <br />

                        Our academy is the most reputed coaching center of patna at low-end prices. We provide the best coaching with professional teachers and by veterans of the field. Our coaching center is steer by the people in Civil Services.</p>

                </div>
                <div className="part2">
                    <img src={a5} alt="" />
                    <div className="para2">
                        <p>We at our coaching center in Patna, Bihar propose the best course in IAS coaching field. We propose courses in various courses for civil service examination and we offer specific courses for the UPSC & BPSC examination. The mentorship provided at our academy will help you shape yourself in a highly professional way. We don’t believe in just teaching we believe in forming the person in a different way. <br /> <br />

                            <strong>The IAS coaching center in Patna</strong>, Bihar will help you pick the gems in a haystack and learn and understand all that is necessary in the huge pile of study materials; otherwise you will be completely lost. <br /> <br />

                            <strong> The Achievers IAS coaching center in Patna</strong> is best known not only for its</p>
                    </div>
                </div>
                <div className="part3">
                    <div className="para3">
                        <p>courses and teaching but for the results; as our students secured the top results in the recent past years. Our academy offers different batches <br /> for courses offered in both Hindi and English languages. <br /> <br />

                            We provide handwritten upgraded and up-to-date material of each and every exam in civil services. The maximum number in our batch is 20 <br /> persons and we do not exceed it at any cost. Our academy provides the best opportunity for every IAS aspirant to come and learn by <br /> professionals of the fields. <br /> <br />

                            Believe US, <strong>come</strong>, and <strong>achieve the world</strong>. <br /> <br />

                            All the best for life. <br />
                            <strong>Achievers IAS Academy</strong></p>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="a1">
                    <img src={a2} alt="" />
                    <img src={a2} alt="" />
                    <img src={a2} alt="" />
                </div>
                <div className="a2">
                    <img src={a3} alt="" />
                    <img src={a3} alt="" />
                    <img src={a3} alt="" />
                </div>
            </div>
            <div className="section4">
                <div className="ht7">
                    <div className="head5">
                        <p>CONTACT US</p>
                        <div className="hrs">
                            <hr />
                            <img src={star} alt="" />
                            <hr />
                        </div>
                        <span>Reach to us and enquire about new batches which suits to your goal</span>
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
            </div>
        <Footer />
        </div>
    )
}

export default About
import './Home.css'
import React from 'react'
import ad1 from '../images/ad1.jpg'
import ad2 from '../images/ad2.jpg'
import ad3 from '../images/BPSC-Coaching-in-Patna-Bihar.png'
import ad4 from '../images/UPAC-Coaching-in-Patna-bihar.png'
import star from '../images/star (2).png'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpeg'
import im1 from '../images/im1.jpeg'
import a4 from '../images/a4.jpeg'
import a3 from '../images/a3.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <div className="ft">
                <img src={ad1} alt="" />
                <img src={ad2} alt="" />
            </div>
            <div className="ft2">
                <p className="head1">Get Ready for UPSC & BPSC Examination</p>
                <p className="head2">Best UPSC/BPSC Coaching in Patna, Bihar</p>
            </div>
            <div className="ft3 wave">
                <div className="head3">
                    <p>OUR COURSES</p>
                    <div className="hrs">
                        <hr />
                        <img src={star} alt="" />
                        <hr />
                    </div>
                    <p>We at Achievers IAS Academy in Patna offer various courses for civil service examination. We provide specific course for both UPSC and BPSC examination.</p>
                </div>
                <div className="head4">
                    <img src={ad3} alt="" />
                    <img src={ad4} alt="" />
                </div>
            </div>
            <div className="ft4">
                <div className="head5">
                    <p>UPCOMING BATCHES</p>
                    <div className="hrs">
                        <hr />
                        <img src={star} alt="" />
                        <hr />
                    </div>
                </div>
                <div className="h6">
                    <img src={ad4} alt="" />
                    <div className="enq">
                        <p>New Batches For BPSC & UPSC</p>
                        <span>ADMISSION OPEN</span>
                        <button>ENQUIRY NOW</button>
                    </div>
                </div>
                <div className="h7">
                    <img src={a1} alt="" />
                    <img src={a2} alt="" />
                </div>
            </div>

            <div className="ft5">
                <div className="enq2">
                    <p>New Batches For BPSC Foundation & 69th Target</p>
                    <span>Coming Soon</span>
                    <button>ENQUIRY NOW</button>
                </div>
            </div>
            <div className="ft6">
                <div className="head5">
                    <p>ABOUT US</p>
                    <div className="hrs">
                        <hr />
                        <img src={star} alt="" />
                        <hr />
                    </div>
                </div>
                <p className='para1'><strong>The Achievers IAS Academy</strong> also known as <strong>AIA</strong>, is one of the <strong>best UPSC, BPSC coaching in Patna, Bihar.</strong> We were the first one to offer courses for civil exams like UPSC & BPSC. And our academy solely targets civil examinations. So you will definitely find a course favourable for you and your civil exam. <br /> <br />

                    Our academy is the most reputed <strong> UPSC coaching in Patna</strong> at low-end prices. We provide the <strong>best UPSC, BPSC coaching classes</strong> with professional teachers and by veterans of the field. Our coaching center is steer by the people in Civil Services and BPSC. <br /> <br />

                    We at our coaching center in Patna propose the best course in IAS, UPSC and BPSC coaching field. We propose courses in various courses for civil service examination and we offer specific courses for the UPSC & BPSC examination. The mentorship provided at our academy will help you shape yourself in a highly professional way. We don’t believe in just teaching we believe in forming the person in a different way.</p>

                <div className="nextPara">
                    <img src={im1} alt="" />
                    <p className='para2'><strong>The top IAS coaching in Patna</strong>, will help you pick the gems in a haystack and learn and understand all that is necessary in the huge pile of study materials; otherwise you will be completely lost. <br /> <br />

                        <strong>The Achievers IAS coaching Institute in Patna</strong> is best known not only for its courses and teaching but for the results; as our students secured the top results in the recent past years. Our academy offers different <strong>BPSC and UPSC batches</strong> for courses offered in both Hindi and English languages. <br /> <br />

                        We provide handwritten upgraded and up-to-date material of each and every exam in civil services. The maximum number in our batch is 20 persons and we do not exceed it at any cost. Our academy provides the best opportunity for every IAS and BPSC aspirant to come and learn by professionals of the fields.</p>
                </div>
                <div className="nextagain">
                    <p>best opportunity for every IAS and BPSC aspirant to come and learn by professionals of the fields. <br /> <br />

                        Believe US, <strong>come</strong>, and <strong>achieve the world</strong>. <br /> <br />

                        All the best for life. <br /> <br />
                        <strong>Achievers IAS Academy Patna</strong></p>
                </div>
            </div>
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
                <div className="ad2 h7">
                    <img src={a3} alt="" />
                    <img src={a4} alt="" />
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default Home
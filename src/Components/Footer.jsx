import React from 'react'
import './Home.css'
import logoMain from '../images/logoMain.jpg'
import yt from '../images/yt.png'
import fb from '../images/fb.png'
const Footer = () => {
    return (
        <div className="lastdiv">

            <div className="footer">
                <div className="sec1">
                    <img className='logofooter' src={logoMain} alt="" />
                    <span>Achievers IAS Academy is pioneer institutes for UPSC & BPSC (Civil Services) Examination in Patna, Bihar.</span>
                    <span>Connect with Us</span>
                    <div className="social">
                        <img src={yt} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className="sec2">
                    <ul>
                        <li>UPSC</li>
                        <li>UPSC FOUNDATION BATCH</li>
                        <li>UPSC TARGET BATCH</li>
                        <li>BPSC</li>
                        <li>BPSC FOUNDATION</li>
                        <li>BSC TARGET</li>
                    </ul>

                </div>
                <div className="sec3">
                    <ul>
                        <li>MAINS CLASSES</li>
                        <li>MOCK INTERVIEWS</li>
                        <li>TEST SERIES</li>
                        <li>ONLINE CLASSES</li>
                        <li>BLOG</li>
                        <li>CURRENT AFFAIRS</li>
                        <li>RESULT</li>
                        <li>BPSC PT TEST SERIES</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="last">
                <div className="last1">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS & CONDITIONS</span>
                    <span>SITEMAP</span>
                </div>
                <div className="last2">
                    <span>Designed By Singh Ji Tech</span>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
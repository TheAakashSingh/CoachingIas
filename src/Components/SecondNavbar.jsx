import React from 'react'
import './TestSeries.css'
import mainLogo from '../images/logoMain.jpg'
import telephone from '../images/telephone.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'
const SecondNavbar = () => {
    return (
        <div>
            <div className="tNav">
                <img src={mainLogo} alt="" />
                <input type="search" name="" id="" placeholder='Search Exams' />
                <ul>
                    <li><Link to="/Exams">Exams</Link></li>
                    <li><Link to="/Activation_Key">Activation Key</Link></li>
                </ul>
                <Link to="/login" className="loginBtn">
                    Login
                </Link>
                <Link to="/SignUp" className="signupBtn">
                    SignUp
                </Link>
                <div className="verticalLine"></div>
                <img className='phone' src={telephone} alt="" />
                <span>+91-8876543747</span>
            </div>
        </div>
    )
}

export default SecondNavbar
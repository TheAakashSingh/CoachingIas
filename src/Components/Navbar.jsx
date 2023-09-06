import React, { useState } from 'react'
import '../Components/Navbar.css';
// import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logoMain.jpg'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    return (
        <div className="Navbar">
            <div className="sndTop">
                <div className="fTop">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/About">ABOUT US</Link> </li>
                    <li className='ourcources'  > OUR COURCES</li>
                    {/* <div id="dropdown"  >
                        <li><Link>UPSC</Link></li>
                        <li><Link>BPSC</Link></li>
                        <li><Link>Main Classes</Link></li>
                        <li><Link>Mock Interviews</Link></li>
                        <li><Link>LSW</Link></li>
                        <li><Link>Sociology</Link></li>
                    </div> */}
                    <li><Link to="/OUR_RESULTS">OUR RESULTS</Link></li>
                    <li><Link to="/CURRENT_AFFAIRS">CURRENT AFFAIRS</Link></li>
                    <li><Link to="/SummaryOfHindu">SUMMARY OF THE HINDU</Link></li>
                    <li><Link to="/BLOG">BLOG</Link></li>
                    <li><Link to="/CONTACTUS">CONTACTUS</Link></li>
                    <li className='testBtn' ><Link to="/TEST_SERIES">TEST SERIES</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
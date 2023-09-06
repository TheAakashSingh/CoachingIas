import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/logoMain.jpg';
import telephone from '../images/telephone.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecondNavbar from './SecondNavbar';
import InputIcon from '@mui/icons-material/Input';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const TNav = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:4000/dashboard', {
                    credentials: 'include' // Pass the credentials to include session cookie
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    window.location.href = '/login';
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchUserData();
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleLogout = async () => {
        try {
            // Make an API request to log out
            const response = await fetch('http://localhost:4000/logout', {
                method: 'get',
                credentials: 'include' // Include credentials to send session cookie
            });

            if (response.ok) {
                window.location.href = '/login';
            } else {
                console.log('Logout failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="tNav">
            <img src={mainLogo} alt="" />
            <input type="search" name="" id="" placeholder='Search Exams' />
            <ul>
                <li><Link to="/Exams">Exams</Link></li>
                <li><Link to="/Activation_Key">Activation Key</Link></li>
            </ul>
            <AccountCircleIcon />
            <div className="dropdownn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link className='name'>{userData && userData.name}</Link>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <Link to="/my-profile"> <AccountBoxIcon /> <span>My Account</span></Link>
                        <button onClick={handleLogout}> <InputIcon /> Logout</button>
                    </div>
                )}
            </div>
            <div className="verticalLine"></div>
            <img className='phone' src={telephone} alt="" />
            <span>+91-8876543747</span>
        </div>
    );
};

export default TNav;

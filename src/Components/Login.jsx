import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import SecondNavbar from './SecondNavbar';
import Footer from './Footer';
import slice2 from '../images/slice2.png';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/ulogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailaddress: formData.email, // Update key to "emailaddress"
                    password: formData.password
                }),
                credentials: 'include',
            });

            if (response.ok) {
                console.log('Login successful ji');
                navigate('/dashboard');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="Login">
            <SecondNavbar />

            <div className="firstLoginPart">
                <div className="part1">
                    <div className="head">
                        <span>Get 24x7 online access to more than undefined exams. Practice unlimited mock tests and evaluate your performance.</span>
                        <img src={slice2} alt="" />
                    </div>
                </div>
                <div className="part2">
                    <div className="login-container">
                        <h3>Welcome back!</h3>
                        <span>Please login to your account</span>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input className='inputs' type="email" name="email" id="email" placeholder="Email address / Phone No*" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input className='inputs' type="password" name="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                            </div>
                            <span><a href="">Forgot Password?</a></span>
                            <button type="submit">Login</button>
                            <span>Don't have an account? <a href="/SignUp"> Sign Up</a></span>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};


export default Login;


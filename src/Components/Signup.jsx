import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import SecondNavbar from './SecondNavbar';
import Footer from './Footer';
import slice2 from '../images/slice2.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailaddress: '',
    number: '',
    password: '',
    confirmPassword: ''
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
      const response = await fetch('http://localhost:4000/userRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
 
      if (response.ok) {
        console.log('Registration successful');
        window.location.href = '/dashboard';
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="signup">
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
            <h3>Hello!</h3>
            <span>Go ahead fill up your details and start practicing!</span>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input className='inputs' type="text" name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input className='inputs' type="email" name="emailaddress" placeholder="Email address*" value={formData.emailaddress} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input className='inputs' type="number" name="number" placeholder="Enter your phone number*" value={formData.number} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input className='inputs' type="password" name="password" placeholder="Enter password*" value={formData.password} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input className='inputs' type="password" name="confirmPassword" placeholder="Confirm password*" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <span><a href="">Forgot Password?</a></span>
              <button type="submit">SignUp</button>
              <span>Already have an account? <a href="/login"> Login</a></span>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

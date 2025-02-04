import {Link } from "react-router-dom";
import React from 'react';
import './Login.css';
import footpic from './Images/logoc.png';
const Login = () => {
  return (
   <div> 
    <div className="login-container">
    <div className='container-1'> 
      <div>
        <center><h1>LOGIN</h1></center>
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="register-link">
          Don't have an account? <Link to="/Register">Register</Link>
        </div>
      </form>
    </div>
    </div>
    <div className='footer'>
        <div className='footer-content1'>
        <div className='footer-img'>
        <img src={footpic} alt="1" className="footpic"></img>
        </div>
        <div>
            <h4 className='find'>FIND ME FROM</h4>
        </div>
        <div className='socialmedia-link'>
       <span className='s-logo'><i class="fa-brands fa-whatsapp"></i></span>
       <span className='s-logo'> <i class="fa-brands fa-facebook"></i></span>
       <span className='s-logo'> <i class="fa-brands fa-instagram"></i></span>
       <span className='s-logo'><i class="fa-brands fa-youtube"> </i></span>
        <span className='s-logo'><i class="fa-brands fa-x-twitter"></i></span>
       </div>
        </div>
        <div className='footer-content2'>
             <div>
             <div >
                <h4>CATAGORIES</h4>
                </div>
                       <p>Shirts</p>
                     <p>T-Shirts</p>
                     <p>Pant/Track</p>
                      <p>Hoodies</p>
                      <p>Shorts</p>
            </div>
            <div>
            <div >
                <h4>IMPORTANT LINKS</h4>
                </div>
                        <p>About us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Shipping Policy</p>
                        <p>Refund/cancellations</p>
            </div>
            <div>
                <div >   
                <h4>CONTACT US</h4>
                </div>
                <h6>Dubai street,Dubai main Rd,</h6>
                       <h6>Near dubai Bus stand</h6> 
                       <h6> Dubai-000001 </h6>
                        <h6>ph:9922256789</h6>
            </div>
        </div>
       </div>  
    </div>
    
  );
};

export default Login;

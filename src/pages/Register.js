import "./Register.css";
import footpic from './Images/logoc.png';

const Register = () => {
 

  return (
   <div> 
    <div className="register-container">
           <form className="register-form">
       <center><h2>REGISTER</h2></center>
        <div className="form-group">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter Your Mail ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Select Your Gender</label>
          <select
            id="gender"
            name="gender"
            required
          >
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Create Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Your Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

       <p className="error-message"></p>

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
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

export default Register;

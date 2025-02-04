import { Carousel } from 'react-bootstrap';
import './Home.css'
import { Link } from "react-router-dom";
import CarouselImage1 from './Images/BANN1.png';
import CarouselImage2 from './Images/BANN2.png';
import CarouselImage3 from './Images/BANN3.png';
import A1 from './Images/A1.png';
import A2 from './Images/A2.png';
import A3 from './Images/A3.png';
import A4 from './Images/A4.png';
import A5 from './Images/A5.png';
import A6 from './Images/A6.png';
import footpic from './Images/logoc.png';

const Home = () => {
  return (
  <div>  
    <div>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 ob1"
            src={CarouselImage1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ob1"
            src={CarouselImage2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ob1"
            src={CarouselImage3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
     <div className="body">
        <center><h2 className="title">CATAGORIES</h2></center>
      <center>
      <div class='ctry'>
        <div className="row-1">
        <div class="card">
        <div class="row-2">
            <div class="col-4">
            <img src={A1} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">Shirts</h5>
                    <Link to="/Shirts"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
    <div class="card" style={{backgroundcolor:"white"}}>
        <div class="row-2">
            <div class="col-4">
            <img src={A2} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">Pants</h5>
                    <Link to="/Pants"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
        </div>
       <div className='row-1'>
       <div class="card">
        <div class="row-2">
            <div class="col-4">
            <img src={A3} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">Hoodies</h5>
                    <Link to="/Hoodies"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="row-2">
            <div class="col-4">
            <img src={A4} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">T-Shirts</h5>
                    <Link to="/Tshirts"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
        </div> 
        <div className='row-1'>
        <div class="card">
        <div class="row-2">
            <div class="col-4">
            <img src={A5} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">Track Pants</h5>
                    <Link to="/Trackpants"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="row-2">
            <div class="col-4">
            <img src={A6} alt="1" className="pic1"></img>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">Shorts</h5>
                    <Link to="/Shorts"> <button className="explore-btn">Explore</button></Link>
                </div>
            </div>
        </div>
    </div>
      </div>
        </div>
        </center>
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
       <span className='w-logo s-logo'><i class="fa-brands fa-whatsapp"></i></span>
       <span className='f-logo s-logo'> <i class="fa-brands fa-facebook"></i></span>
       <span className='i-logo s-logo'> <i class="fa-brands fa-instagram"></i></span>
       <span className='y-logo s-logo'><i class="fa-brands fa-youtube"> </i></span>
        <span className='x-logo s-logo'><i class="fa-brands fa-x-twitter"></i></span>
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
}
export default Home;

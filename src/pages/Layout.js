import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './Images/logoc.png';
import './Layout.css'
import React from 'react';


const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <div className="img">
          <img src={Logo} alt="Nothing" style={{ width: '250px', height: 'auto' }} />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
        <div>
          <ul className="nav-list">
            <li className="li1"><Link to="/"><i className="fa-solid fa-house" style={{ fontSize: "medium" }}></i>&nbsp;Home</Link></li>
            <li className="li1"><Link to="/Products"><i className="fa-solid fa-fire" style={{ fontSize: "medium" }}></i>&nbsp;Hot Sale</Link></li>
            <li className="li1"><Link to="/Login"><i className="fa-solid fa-user" style={{ fontSize: "medium" }}></i>&nbsp;Login</Link></li>
            <li className="li1"><Link to="/Contact"><i className="fa-solid fa-cart-shopping" style={{ fontSize: "medium" }}>&nbsp;</i>MyCart</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;

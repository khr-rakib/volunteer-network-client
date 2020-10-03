import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logos/logo.png";

const Navbar = () => {
  return (
    <div className="row py-4">
      <div className="col-md-2">
        <Link to="/">
          <img src={logo} className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="col-md-10 d-flex align-items-center justify-content-end">
        <div className="app__menu">
          <Link to="/">Home</Link>
          <a href="">Donation</a>
          <a href="">Events</a>
          <a href="">Blog</a>
          <Link to="/login" className="app__adminBtn">
            Login
          </Link>
          <Link to="/register" className="app__registerBtn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

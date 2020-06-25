import React from "react";
import Logo from '../shares/dokitalk.png'
import "./login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-div-img">
        <img alt="" src={Logo}></img>
      </div>
      <form className="login-form">
        <label>
          <input type="text" name="name" placeholder="Enter your Email" />
        </label>
        <label>
          <input type="text" name="name" placeholder="Enter your Password" />
        </label>
        
          <Link className="login-link" to="/register">
          <p className="login-link-title">First time? Click here!</p>
          </Link>
        </form>

      <button className="login-button-sign">
        <p>Sign In</p>
      </button>
    </div>
  );
};

export default Login;

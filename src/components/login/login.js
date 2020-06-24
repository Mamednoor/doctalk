import React from "react";

import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <img alt="" src="https://via.placeholder.com/150"></img>
      </div>
      <form className="login-form">
        <label>
          <input type="text" name="name" placeholder="Enter your Email" />
        </label>
        <label>
          <input type="text" name="name" placeholder="Enter your Password" />
        </label>
        <a className="login-link" href="./">
          <p className="login-link-title">First time? Click here!</p>
        </a>
      </form>

      <button className="login-button-sign">
        <p>Sign In</p>
      </button>
    </div>
  );
};

export default Login;

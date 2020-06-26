import React, { useState } from "react";
import axios from "axios";
import Logo from "../shares/dokitalk.png";
import "./login.css";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("");
  const history = useHistory();
  
  const handleClick = (e) => {
    if(active === 'doctor'){
      axios.post("http://localhost:7500/login/doctor", {
        doc_email: email,
        doc_password: password,
      }).then(res => res.status === 200 ? history.push('/search') : history.push('/y'))
      return e.preventDefault();
    }else {
      axios.post("http://localhost:7500/login/patient", {
        pa_mail: email,
        pa_password: password,
      }).then(res => res.status === 200 ? history.push('/search') : history.push('/'))
      return e.preventDefault();
    };

  }
  return (
    <div className="login-container">
      <div className="login-div-img">
        <img alt="logo" src={Logo}></img>
      </div>
      <form className="login-form">
        <div className="radio-container">
          <input 
            type="button" 
            id="patient" 
            name="drone" 
            value="patient"
            onClick={(e) => setActive(e.target.id)}
          />

          <input
            type="button"
            id="doctor"
            name="drone"
            value="doctor"
            onClick={(e) => setActive(e.target.id)}
          />
        </div>

        <label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="name"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link className="login-link" to="/register">
          <p className="login-link-title">First time? Click here!</p>
        </Link>

        <button className="login-button-sign" onClick={(e) => handleClick(e)}>
          <p>Sign Up</p>
        </button>
      </form>
    </div>
  );
}

export default Login;

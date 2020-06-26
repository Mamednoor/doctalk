import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import patientRegister from './patientRegister'
import medecinRegister from './medecinRegister'
import Logo from "../shares/dokitalk.png";

import "./register.css";

const Register = () => {
  
  return (
    <Router>
      <div className="register-container">
        <div className="register-div-img">
          <img alt="logo" src={Logo}></img>
        </div>
        <p>I AM A</p>
        <div className='Content-Form'>
          <div className="register-div-button">
            <NavLink
              to='/patientRegister'
              className="register-navlink"
            >
              Patient
            </NavLink>
            <NavLink
              exact
              to='/medecinRegister'
              className="register-navlink"
            >
              Doctor
            </NavLink>
          </div>
          <Link className="link-home-register" to="/">
            <p className="p-home-register">Back home</p>
          </Link>
          <Route exact path='/patientRegister' component={patientRegister} />
          <Route path='/medecinRegister' component={medecinRegister} />
        </div>
      </div>
      <input type='submit' className="register-button-sign" value='Sign Up'/>
    </Router>
  );
};

export default Register;

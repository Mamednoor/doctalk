import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Patient from "./patientRegister";
import Medecin from "./medecinRegister";
import Logo from "../shares/dokitalk.png";

import "./register.css";

const Register = () => {
  return (
    <Router>
      <div className="register-container">
        <div className="register-div-img">
          <img alt="" src={Logo}></img>
        </div>
        <p>I AM A</p>
        <div className="register-div-button">
          <button>
            <NavLink to='/patientRegister'>Patient</NavLink>
          </button>
          <button>
            <NavLink to='/medecinRegister'>Medecin</NavLink>
          </button>
        </div>
        <Patient />
        <Medecin />
        <button className="register-button-sign">
          <p>Sign Up</p>
        </button>
      </div>    
    </Router>
  );
};

export default Register;

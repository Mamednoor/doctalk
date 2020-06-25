import React from "react";
import "./register.css";

function Medecin() {
  return (
      <div className="register-medecin-container">
          <form className="register-form">
              <input type="text" name="" placeholder="Lastname"></input>
              <input type="text" name="" placeholder="Firstname"></input>
              <input type="text" name="" placeholder="Profession"></input>
              <input type="text" name="" placeholder="Profession Code"></input>
              <input type="text" name="" placeholder="City"></input>
              <input type="text" name="" placeholder="Email"></input>
              <input type="text" name="" placeholder="Password"></input>
          </form>
  </div>
  );
}

export default Medecin;

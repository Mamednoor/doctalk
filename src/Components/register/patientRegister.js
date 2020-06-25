import React from "react";
import "./register.css";

function Patient() {
  return (
    <div className="register-patient-container">
      <form className="register-form">
        <input type="text" name="" placeholder="Lastname" />
        <input type="text" name="" placeholder="Firstname" />
        <input type="text" name="" placeholder="City" />
        <input type="text" name="" placeholder="Email" />
        <input type="text" name="" placeholder="Password" />
      </form>
    </div>
  );
}

export default Patient;

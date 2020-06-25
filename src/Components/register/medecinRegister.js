import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./register.css";

function Medecin() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [profession, setProfession] = useState("");
  const [professionCode, setProfessionCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
  axios.post('http://localhost:7500/register', {lastname: lastname, firstname: firstname, profession: profession, doc_profession_code: professionCode, city: city, email: email, password: password})
}, [])

  return (
    <div className="register-medecin-container">
      <form className="register-form">
        <input
          type="text"
          name="lastname"
          value={lastname}
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="profession"
          value={profession}
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
        />
        <input
          type="text"
          name="professionCode"
          value={professionCode}
          placeholder="Profession Code"
          onChange={(e) => setProfessionCode(e.target.value)}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className="register-button-sign" onClick={(e) => e.preventDefault()}>Sign Up</button>
      </form>
    </div>
  );
}

export default Medecin;

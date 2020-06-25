import React, {useState} from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7500/register', )
  }

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
      </form>
    </div>
  );
}

export default Medecin;

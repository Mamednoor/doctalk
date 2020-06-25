import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [text, setText] = useState("")
  const [subject, setSubject] = useState("")

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(100000))
  }

  const handleJoin = (e) => {
    const patient_id = 1
    const doctor_id = 1
    // const form = e.target
    axios.post('http://localhost:7500/invitations', {patient_id: patient_id, doctor_id: doctor_id, subject: subject, text: text, link:(`/chat?name=${name}&room=${room}`)})
    return !name || !room ? e.preventDefault() : null
  }

  const handleSelect = (e) => {
    setRoom(getRandomInt() + e.target.value)
    setSubject(e.target.value)
  }
  
  return (
    <div className="joinOuterContainer">
      <form className="joinInnerContainer">
        <h1 className="heading">Contact</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="JoinSelect mt-20">
          <select onChange={(e) => handleSelect(e)} className="joinInput" name='room' id="room">
            <option className="joinInput" value="Headach">Headach</option>
            <option className="joinInput" value="Pregnant">Pregnant</option>
            <option className="joinInput" value="Follow">Follow</option>
            <option className="joinInput" value="Ordonnance">Ordonnance</option>
            <option className="joinInput" value="Exemple">Exemple</option>
            <option className="joinInput" value="Exemple">Exemple</option>
          </select>
        </div>
        
        <textarea id='text' name='text' rows="5" cols="33" onChange={(e) => setText(e.target.value)} value={text}></textarea>

        <Link
          onClick={(e) => handleJoin(e)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Call Doctor
          </button>
        </Link>
      </form>
    </div>
  );
}
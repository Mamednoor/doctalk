import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import Header from '../header/header'
import Navbar from '../navbar/navbar'

import "./Join.css";

export default function SignIn(props) {
  const { state } = props.location

  const [name, setName] = useState(state[2])
  const [room, setRoom] = useState("")
  const [text, setText] = useState("")
  const [subject, setSubject] = useState("")

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(100000))
  }
  const handleJoin = (e) => {
    const idPatient = localStorage.getItem('patient')
    const doctor_id = state[0]
    axios.post('http://localhost:7500/invitations', { patient_id: idPatient, doctor_id: doctor_id, subject: subject, text: text, link: (`/chat?name=${name}&room=${room}`) })
    return !name || !room ? e.preventDefault() : null
  }
  const handleSelect = (e) => {
    setRoom(getRandomInt() + e.target.value)
    setSubject(e.target.value)
  }

  console.log(state[2])
  return (
    <div className="joinOuterContainer">
      <Header title="Contact" />
      <form className="joinInnerContainer">
        <div>
          <p className='destination'>{`To: Dr.${state[1]}`}</p>
        </div>

        <div className="JoinSelect mt-20">
          <select onChange={(e) => handleSelect(e)} className="joinInput" name='room' id="room">
            <option value="">--Please select a subject--</option>
            <option className="joinInput" value="Headach">Headach</option>
            <option className="joinInput" value="Pregnant">Pregnant</option>
            <option className="joinInput" value="Follow">Follow</option>
            <option className="joinInput" value="Ordonnance">Ordonnance</option>
            <option className="joinInput" value="Exemple">Exemple</option>
            <option className="joinInput" value="Exemple">Exemple</option>
          </select>
        </div>

        <textarea placeholder='type your pathology (255 characters max)' id='text' onChange={(e) => setText(e.target.value)} value={text} required></textarea>

        <Link
          onClick={(e) => handleJoin(e)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Send invitation
          </button>
        </Link>
      </form>
      <Navbar />
    </div>
  );
}
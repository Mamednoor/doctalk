import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(100000))
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Contact</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="JoinSelect mt-20">
          <select onChange={(e) => setRoom(e.target.value + '#' + getRandomInt())} className="joinInput" name="room" id="room">
            <option className="joinInput" value="Headach">Headach</option>
            <option className="joinInput" value="Pregnant">Pregnant</option>
            <option className="joinInput" value="Follow">Follow</option>
            <option className="joinInput" value="Ordonnance">Ordonnance</option>
            <option className="joinInput" value="Exemple">Exemple</option>
            <option className="joinInput" value="Exemple">Exemple</option>
          </select>
        </div>
      
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Call Doctor
          </button>
        </Link>
      </div>
    </div>
  );
}

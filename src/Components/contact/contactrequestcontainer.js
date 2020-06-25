import React from "react";
import Accept from "../shares/accept.png";
import Decline from "../shares/close.png";

import { Link } from "react-router-dom"

import "./contact.css";

const ContactRequestContainer = (props) => {
  return (
    <div className="contact-container">
      <article className="contact-box">
<<<<<<< HEAD
          <article className="contact-icon">
        <img src={Decline} alt='decline'/>
        <img src={Accept} alt='accept' />
=======
        <article className="contact-icon">
          <img id={props.id} onClick={e => props.onDelete(e)} src={Decline} alt=''></img>
          <Link to={{ pathname: props.link }}>
            <img src={Accept} alt=''></img>
          </Link>
>>>>>>> clean
        </article>
        <article className="article-title">
          <h3>
            {props.firstname} {props.lastname}
          </h3>
          <h3>Object : {props.object}</h3>
          <h3>Message : </h3>
        </article>
        <article className="contactreq-message">
          <p>{props.message}</p>
        </article>
      </article>
    </div>
  );
};

export default ContactRequestContainer;

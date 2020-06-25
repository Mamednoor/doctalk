import React from "react";
import Accept from "../shares/accept.png";
import Decline from "../shares/close.png";

import "./contact.css";

const ContactRequestContainer = (props) => {
  return (
    <div className="contact-container">
      <article className="contact-box">
          <article className="contact-icon">
        <img src={Decline}></img>
        <img src={Accept}></img>
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

import React from 'react';
import { useState } from "react";
import './contact.css'
import img from '../miles-burke-idhx-MOCDSk-unsplash.jpg'

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img className="img1" src={img} alt="photo" width="100%" height="100%" />
      </div>
      <div className="right">
        <h2 className="">Contact</h2>
        <form className="form-detail center"onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" class="form-control " id="exampleFormControlTextarea1" />
          <br></br>
          <textarea placeholder="Message" class="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
          <br/>
          <div className="text-center">
          <button className="btn btn-success center" type="submit">Send</button><br/>
          {message && <span>Thanks, I'll reply😊 </span>}
            </div>
        </form>

      </div>
    </div>
  );
}
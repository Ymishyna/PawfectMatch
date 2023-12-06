import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const emailValidate = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regEx.test(email)) {
      setValidationMessage("Email is valid");
    } else if (email === "") {
      setValidationMessage("Email is required");
    } else {
      setValidationMessage("Email is not valid");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div style={{display:"flex",flexDirection:"row", justifyContent:"space between"}}>
      <form  style= {{width:"75%"}}onSubmit={handleFormSubmit}>
        <h3>Contact Us</h3>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={handleOnChange}
          onBlur={emailValidate}
          required
        />
        <span className="validation-message">{validationMessage}</span>
        <textarea
          id="message"
          rows="5"
          placeholder="Write us a message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div style={{width:"25%"}}>
        <div className="card">
          <img
            className="card"
            src={"https://buy.stripe.com/test_bIY00k20Ve0e1AQbII"}
            alt="card donation"
          />
        </div>
      
          <a href="#" className="btn "><button>Stripe</button></a>
        
      </div>


    </div>

  );

}
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const customQuote = () => {
  return (
    <>
      <div>
        <Link to="/">
          <Button> Go Back </Button>
        </Link>
        <h1>Custom Quote / Custom Order</h1>
        <form
          action="https://formsubmit.co/anna.sweet.treats1@gmail.com"
          method="POST"
          className="formm"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <label>Message</label>
          <input
            type="text"
            name="message"
            placeholder="Enter Your Message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default customQuote;

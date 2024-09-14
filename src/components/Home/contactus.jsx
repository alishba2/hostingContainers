import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="requestDemo-main-container">
        <div className="requestDemo-flex-box-right content">
          <h2 className="text-white text-center mb-3">Contact Us</h2>
          <div className="requestDemo-twoInputbox">
            <input type="text" name="fname" placeholder="First Name*" />
            <input type="text" name="lname" placeholder="Last Name*" />
          </div>
          <div className="requestDemo-twoInputbox">
            <input type="text" name="company" placeholder="Company*" />
            <input type="text" name="title" placeholder="Job Title*" />
          </div>
          <input type="email" name="email" placeholder="Work Email*" />
          <input type="number" name="phone" placeholder="Phone Number*" />
          <textarea
            placeholder="Your message..."
            name="message"
            rows="5"
          ></textarea>
          <button className="send-request-btn"> Send</button>
        </div>
      </div>
    </>
  );
};

export default Contactus;

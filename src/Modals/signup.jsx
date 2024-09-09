import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";
import Login from "./login";

const Signup = ({ isSignupModal, setisSignupModal }) => {
  const [isloginModalOpen, setIsloginModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleOk = () => {
    setisSignupModal(false);
  };
  const handleCancel = () => {
    setisSignupModal(false);
  };
  const onsigninbtnClick = () => {
    setIsloginModalOpen(true);
  };
  return (
    <>
      <Modal
        open={isSignupModal}
        onOk={handleOk}
        onCancel={handleCancel}
        className="account-modal"
        centered={true}
        width="45%"
      >
        <div className="modal-content v-center flex-column">
          <img src={logo} alt="logo" className="logo" />
          <h4 className="text-white text-center">Create Your Account</h4>
          <input type="text" name="text" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          <input type="number" name="phone" placeholder="Phone Number" />

          <button className="send-request-btn"> Create Account</button>
          <p className="text-center text-white paraMedium mt-2">
            Already have an account?{" "}
            <span
              onClick={() => {
                onsigninbtnClick();
                handleOk();
              }}
            >
              Login
            </span>
          </p>
        </div>
      </Modal>
      {/* <Login isloginModalOpen={isloginModalOpen} setIsloginModalOpen={setIsloginModalOpen} /> */}
    </>
  );
};

export default Signup;

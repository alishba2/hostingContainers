import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";
import Signup from "./signup";
import ForgetPswd from "./forgetpswd";

const Login = ({ isModalOpen, setIsModalOpen }) => {
  const [isSignupModal, setisSignupModal] = useState(false);
  const [isforgetModal, setisforgetModal] = useState(false);

  const navigate = useNavigate();
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onsignupbtnClick = () => {
    setisSignupModal(true);  // Open signup modal
    setIsModalOpen(false);  // Close login modal
  };

  const onforgetbtnClick = () => {
    setisforgetModal(true);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="account-modal"
        centered={true}
        width="45%"
      >
        <div className="modal-content v-center flex-column">
          <img src={logo} alt="logo" className="logo" />
          <h4 className="text-white text-center">Login to Your Account</h4>

          <input type="email" name="email" placeholder="Email" />
          <div className="w-100 v-center flex-column">
            <input type="password" name="password" placeholder="Password" />
            <p
              className="text-white paraSmall cursor-pointer"
              onClick={() => {
                onforgetbtnClick();
                handleOk();
              }}
            >
              Forget password?
            </p>
          </div>

          <button className="send-request-btn">Login</button>
          <p className="text-center text-white paraMedium mt-2">
            Don't have an account?{" "}
            <span
              onClick={() => {
                onsignupbtnClick();  // Opens signup modal and closes login modal
              }}
              className="cursor-pointer"
            >
              Signup
            </span>
          </p>
        </div>
      </Modal>
      
      {/* Signup Modal */}
      <Signup isSignupModal={isSignupModal} setisSignupModal={setisSignupModal} />
      <ForgetPswd
        isforgetModal={isforgetModal}
        setisforgetModal={setisforgetModal}
      />
    </>
  );
};

export default Login;

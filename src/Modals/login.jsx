import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";
import Signup from "./signup";

const Login = ({
  isModalOpen,
  setIsModalOpen,
  
}) => {
  const [isSignupModal, setisSignupModal] = useState(false);

  const navigate = useNavigate();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onsignupbtnClick = () => {
    setisSignupModal(true);
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
          <h4 className="text-white text-center">Create Your Account</h4>

          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button className="send-request-btn"> Login</button>
          <p className="text-center text-white paraMedium mt-2">
            Don't have an account?{" "}
            <span
              onClick={() => {
                onsignupbtnClick();
                handleOk();
              }}
              className="cursor-pointer"
            >
              Signup
            </span>
          </p>
        </div>
      </Modal>
      <Signup
        isSignupModal={isSignupModal}
        setisSignupModal={setisSignupModal}
      />
    </>
  );
};

export default Login;

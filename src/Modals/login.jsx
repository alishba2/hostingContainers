import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";
import Signup from "./signup";
import ForgetPswd from "./forgetpswd";
import { loginUser } from "../firebase/firebase";

const Login = ({ isModalOpen, setIsModalOpen }) => {
  const [isSignupModal, setisSignupModal] = useState(false);
  const [isforgetModal, setisforgetModal] = useState(false);

  // State to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleLogin = async () => {
    try {
      await loginUser(email, password);  // Call Firebase login function
      setIsModalOpen(false);  // Close modal on successful login
      window.location.reload();
    } catch (error) {
      setError("Login failed. Please check your email and password.");
    }
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

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update state on input change
          />
          <div className="w-100 v-center flex-column">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Update state on input change
            />
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

          {error && <p className="text-red-500 text-center">{error}</p>}  {/* Display error message */}

          <button
            className="send-request-btn"
            onClick={handleLogin}  // Trigger login on button click
          >
            Login
          </button>
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

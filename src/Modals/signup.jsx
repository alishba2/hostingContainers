import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";
import { registerUser } from "../firebase/firebase"; // Import the updated registerUser function
const Signup = ({ isSignupModal, setisSignupModal }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleOk = () => {
    setisSignupModal(false);
  };

  const handleCancel = () => {
    setisSignupModal(false);
  };

  const onsigninbtnClick = () => {
    // Navigate to the login modal (assuming login modal exists)
    handleOk();
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Call the registerUser function and pass the fullName and phone along with email and password
      await registerUser(email, password, fullName, phone);
      alert("Registration successful!");
      navigate("/login"); // Navigate to login or dashboard page
    } catch (error) {
      alert("Error during registration: " + error.message);
    }
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
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="send-request-btn" onClick={handleSignup}>
            Create Account
          </button>
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
    </>
  );
};

export default Signup;

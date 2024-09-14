import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal, notification } from "antd";
import { resetPassword } from "../firebase/firebase"; // Adjust the import path as needed

const ForgetPswd = ({ isforgetModal, setisforgetModal }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleOk = () => {
    setisforgetModal(false);
  };

  const handleCancel = () => {
    setisforgetModal(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = async () => {
    if (!email) {
      notification.error({
        message: "Error",
        description: "Please enter your email address.",
      });
      return;
    }

    setLoading(true); // Set loading to true

    try {
      await resetPassword(email);
      notification.success({
        message: "Success",
        description: "Password reset email sent successfully. Please check your inbox.",
      });
      setisforgetModal(false); // Close modal after successful request
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to send password reset email. Please try again.",
      });
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <>
      <Modal
        open={isforgetModal}
        onOk={handleOk}
        onCancel={handleCancel}
        className="account-modal"
        centered={true}
        width="45%"
        footer={null} // Remove default footer
      >
        <div className="modal-content v-center flex-column">
          <img src={logo} alt="logo" className="logo" />
          <h4 className="text-white text-center">Forgot Password</h4>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />

          <button
            className="send-request-btn"
            onClick={handlePasswordReset}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ForgetPswd;

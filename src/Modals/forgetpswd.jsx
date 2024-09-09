import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Modal } from "antd";

const ForgetPswd = ({ isforgetModal, setisforgetModal }) => {
  const navigate = useNavigate();
  const handleOk = () => {
    setisforgetModal(false);
  };
  const handleCancel = () => {
    setisforgetModal(false);
  };
  const onsignupbtnClick = () => {
    setisforgetModal(true);
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
      >
        <div className="modal-content v-center flex-column">
          <img src={logo} alt="logo" className="logo" />
          <h4 className="text-white text-center">Forgot Password</h4>

          <input type="email" name="email" placeholder="Email" />

          <button className="send-request-btn"> Send Request</button>
        </div>
      </Modal>
    </>
  );
};

export default ForgetPswd;

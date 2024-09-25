import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { saveContactForm } from "../../firebase/firebase";

const Contactus = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "", // Changed to a single 'name' field
    email: "",
    phone: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      await saveContactForm(formData);
      // Optionally reset the form or provide feedback to the user
      setFormData({
        name: "", // Resetting name field
        email: "",
        phone: "",
        message: "",
      });
      alert(t('message_sent_successfully')); // Provide success message
    } catch (error) {
      alert(t('error_sending_message')); // Provide error feedback
    }
  };

  return (
    <div className="requestDemo-main-container">
      <div className="requestDemo-flex-box-right content">
        <h2 className="text-white text-center mb-3">{t('contact_us')}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*" // Changed placeholder
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder={t('phone_number')}
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder={t('your_message')}
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="send-request-btn">{t('send')}</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

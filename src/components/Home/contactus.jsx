import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com"; // Import EmailJS

const Contactus = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
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
    setLoading(true); // Start loading indicator

    // Map form data to template variables, including "contact_no" for the phone number
    const templateParams = {
      to_name: "Hash containers",       // Static or configurable recipient name
      from_name: formData.name,        // Sender's name from form data
      message: formData.message,       // Message from form data
      reply_to: formData.email,        // Sender's email (use this in EmailJS instead of `email`)
      contact_no: formData.phone       // Sender's phone number
    };

    // Using EmailJS to send the email
    try {
      await emailjs.send(
        "service_ynoyb2u",       // Replace with your EmailJS Service ID
        "template_e27j58f",      // Replace with your EmailJS Template ID
        templateParams,
        "X4DS5Cmx8BaoDj8Nz"      // Replace with your EmailJS Public API Key
      );

      // Optionally reset the form or provide feedback to the user
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setLoading(false); // Stop loading indicator
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="requestDemo-main-container">
      <div className="requestDemo-flex-box-right content">
        <h2 className="text-white text-center mb-3">{t("contact_us")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
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
            placeholder={t("phone_number")}
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder={t("your_message")}
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="send-request-btn"
            disabled={loading}
          >
            {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : t("send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;


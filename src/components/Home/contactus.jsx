import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { saveContactForm } from "../../firebase/firebase";

const Contactus = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State to manage form inputs and loading
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
    setLoading(true); // Set loading state

    try {
      await saveContactForm(formData);
      // Optionally reset the form or provide feedback to the user
      setFormData({
        fname: "",
        lname: "",
        company: "",
        title: "",
        email: "",
        phone: "",
        message: "",
      });
      alert(t('message_sent_successfully')); // Provide success message
    } catch (error) {
      alert(t('error_sending_message')); // Provide error feedback
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="requestDemo-main-container">
      <div className="requestDemo-flex-box-right content">
        <h2 className="text-white text-center mb-3">{t('contact_us')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="requestDemo-twoInputbox">
            <input
              type="text"
              name="fname"
              placeholder={t('first_name')}
              value={formData.fname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lname"
              placeholder={t('last_name')}
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
          <div className="requestDemo-twoInputbox">
            <input
              type="text"
              name="company"
              placeholder={t('company')}
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder={t('job_title')}
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t('work_email')}
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
          <button type="submit" className="send-request-btn" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              t('send')
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

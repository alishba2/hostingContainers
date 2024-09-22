import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="requestDemo-main-container">
      <div className="requestDemo-flex-box-right content">
        <h2 className="text-white text-center mb-3">{t('contact_us')}</h2>
        <div className="requestDemo-twoInputbox">
          <input type="text" name="fname" placeholder={t('first_name')} />
          <input type="text" name="lname" placeholder={t('last_name')} />
        </div>
        <div className="requestDemo-twoInputbox">
          <input type="text" name="company" placeholder={t('company')} />
          <input type="text" name="title" placeholder={t('job_title')} />
        </div>
        <input type="email" name="email" placeholder={t('work_email')} />
        <input type="number" name="phone" placeholder={t('phone_number')} />
        <textarea
          placeholder={t('your_message')}
          name="message"
          rows="5"
        ></textarea>
        <button className="send-request-btn">{t('send')}</button>
      </div>
    </div>
  );
};

export default Contactus;

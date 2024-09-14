import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      {/* Contact Info Section */}
      <div className="footer-row">
        <div className="footer-section">
          <h3>{t("contactUs")}</h3>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope />
              <p>{t("email")}</p>
            </div>
            <div className="info-item">
              <FaPhone />
              <p>{t("phone")}</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <p>{t("address")}</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>{t("quickLinks")}</h3>
          <ul>
            <li>
              <a href="#">{t("products")}</a>
            </li>
            <li>
              <a href="#">{t("gallery")}</a>
            </li>
            <li>
              <a href="#">{t("aboutUs")}</a>
            </li>
            <li>
              <a href="#">{t("blog")}</a>
            </li>
            <li>
              <a href="#">{t("faq")}</a>
            </li>
            <li>
              <a href="#">{t("privacyPolicy")}</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>{t("socialMedia")}</h3>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">{t("copyright")}</div>
    </div>
  );
}

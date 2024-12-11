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
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
              <a href="/products" onClick={(e) => { e.preventDefault(); navigate("/products", { state: { category: "Miners" } }); window.location.reload(); }}>{t("products")}</a>
            </li>
            <li>
              <a href="/hosting">{t("hosting")}</a>
            </li>
            <li>
              <a href="/about-us">{t("aboutUs")}</a>
            </li>
            <li>
              <a href="/atm">{t("Atms")}</a>
            </li>
            {/* <li>
              <a href="#">{t("faq")}</a>
            </li> */}
            <li>
              <a href="/blogs">{t("blogs")}</a>
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

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import "../style/pages/_footer.scss"; // Link to the SCSS file

export default function Footer() {
    return (
        <div className="footer-container">
            {/* Logo Section */}


            <div className='footer-row'>
                {/* <div className="footer-section">
                    <img src="path-to-logo.png" alt="Logo" width="150" />
                </div> */}

                {/* Contact Info Section */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <div className="contact-info">
                        <div className="info-item">
                            <FaEnvelope />
                            <p>support@email.com</p>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <p>+971 4 257 8883</p>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            <p>Store 2, Al Nisf Building, Airport Rd, Al Garhoud</p>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section">
                    <h3>Social Media</h3>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTiktok /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>


            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                © 2024 Hosting Containers - Bitcoin Mining Dubai | All rights reserved.
            </div>
        </div>
    );
}

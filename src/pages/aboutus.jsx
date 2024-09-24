import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Social icons
import "../../src/style/pages/_about.scss";
import videoSrc from "../assets/blockchainn2.mp4"; // Add your background video here
import img1 from "../assets/ceo2.png";
import img2 from "../assets/team102.jpeg"
import img3 from "../assets/team103.jpeg";
import img4 from "../assets/main.jpg";
import img5 from "../assets/images/main2.jpg";


export default function AboutUs() {
  const { t } = useTranslation();

  const teamMembers = [

    { name: "Jack Lei ", role: "Co - founder", image: img5, description: "Jack is the visionary behind Hash International Hosting LLC, established in 2017. With a deep understanding of blockchain technology and cryptocurrency mining, Jack spearheaded the company’s growth into a global leader in the industry. His innovative approach and dedication have driven Hash International Hosting LLC to expand across continents, providing cutting-edge mining solutions with a focus on reliability and performance." },
    { name: "Luis Fernandez", role: "COO", image: img1, description: "Lius is the Chief Operating Officer at Hash International Hosting LLC, responsible for managing the day-to-day operations of the company. His operational acumen ensures that all mining projects are executed efficiently and that the company maintains its industry-leading uptime and reliability. Lius’s focus on operational excellence has been a cornerstone of the company’s success." },
    { name: "Alberto Seoane", role: "CEO", image: img4, description: "Alberto, the Chief Executive Officer of Hash International Hosting LLC, leads the company with a focus on growth, innovation, and operational excellence. With a strong background in technology and business development, Alberto has guided the company to become a trusted name in the crypto mining industry, driving strategic initiatives across Africa, the US, Russia, Kazakhstan, and the UAE." },
    { name: "Roberto Rodriguez", role: "Co - founder", image: img3, description: "Roberto, as the co-founder of Hash International Hosting LLC, brings extensive experience in crypto mining and infrastructure management. His expertise in operations and strategic planning has been pivotal in the company’s successful expansion into global markets. Roberto plays a key role in overseeing the deployment of containerized mining solutions and ensuring that the company’s offerings meet the highest standards." },
    { name: "Maxwell Khushal", role: "Managing Director", image: img2, description: "Maxwell Khushal, the Managing Director of Hash International Hosting LLC, brings years of expertise in international business and crypto mining operations. Under his leadership, the company has optimized mining facilities across multiple continents, ensuring operational success and client satisfaction. Maxwell is known for his strategic vision and commitment to delivering high-quality services in the fast-paced world of cryptocurrency mining." },
  ];

  return (
    <div className="about-us-container">
      <div className="mission-bg">
        <div className="missionStatement">
          <h3>{t("missionStatement")}</h3>
          <p>{t("aboutUsText")}</p>
        </div>
      </div>

      <div className="team-section">
        <h2>{t("ourTeam")}</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info">
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>
              </div>
              <div className="team-overlay">
                {/* <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a> */}
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

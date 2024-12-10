import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Social icons
import "../../src/style/pages/_about.scss";
import Contactus from "../components/Home/contactus";
import img1 from "../assets/ceo2.png";
import img2 from "../assets/team102.jpeg"
import img3 from "../assets/teamman.jpeg";
import img4 from "../assets/main.jpg";
import img5 from "../assets/images/main2.jpg";

// import video from "../assets/hashhostingvideos/EDITS/HASH CONTAINER AD.mp4"

export default function AboutUs() {
  const { t } = useTranslation();
  let video = "https://firebasestorage.googleapis.com/v0/b/crypto-598ab.appspot.com/o/HASH%20CONTAINER%20AD.mp4?alt=media&token=45e75494-964c-4bd9-bd51-05c68d0af58b"


  const teamMembers = [
    {
      name: t("teamMembers.jackLei.name"),
      role: t("teamMembers.jackLei.role"),
      image: img5,
      description: t("teamMembers.jackLei.description"),
    },
    {
      name: t("teamMembers.luisFernandez.name"),
      role: t("teamMembers.luisFernandez.role"),
      image: img1,
      description: t("teamMembers.luisFernandez.description"),
    },
    {
      name: t("teamMembers.albertoSeoane.name"),
      role: t("teamMembers.albertoSeoane.role"),
      image: img4,
      description: t("teamMembers.albertoSeoane.description"),
    },
    {
      name: t("teamMembers.robertoRodriguez.name"),
      role: t("teamMembers.robertoRodriguez.role"),
      image: img3,
      description: t("teamMembers.robertoRodriguez.description"),
    },
    {
      name: t("teamMembers.maxwellKhushal.name"),
      role: t("teamMembers.maxwellKhushal.role"),
      image: img2,
      description: t("teamMembers.maxwellKhushal.description"),
    },
  ];

  return (
    <div className="about-us-container">
      <div className="mission-bg">
        <div className="missionStatement">
          <h3>{t("missionStatement")}</h3>
          <p>{t("aboutUsText")}</p>
        </div>
      </div>

      <div className="video-container">
        <p>About Hash Hosting International</p>
        <video autoPlay loop muted controls height="auto">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="team-section">
        <h2>{t("ourTeam")}</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className={`team-image ${member.name === "Roberto Rodriguez" ? "small-height" : ""}`}
              />
              <div className="team-info">
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>
              </div>
              <div className="team-overlay">
                {member.description}
              </div>
            </div>
          ))}

        </div>
      </div>

      <Contactus />
    </div>
  );
}

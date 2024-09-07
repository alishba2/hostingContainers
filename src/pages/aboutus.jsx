import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../src/style/pages/_about.scss";
import img1 from "../assets/team4.png";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png"
import img4 from "../assets/team4.png"
import service from "../assets/service.jpg";

export default function AboutUs() {
  const { t } = useTranslation();

  // Example team data (replace with your actual image paths)
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: img2 },
    { name: 'Jane Smith', role: 'CTO', image: img1 },
    { name: 'Alice Johnson', role: 'Lead Developer', image: img3 },
    { name: 'Michael Brown', role: 'Marketing Director', image: img1 },
    { name: 'Emily Davis', role: 'Product Manager', image: img3 },
    { name: 'Daniel Lee', role: 'UX Designer', image: img1 },
  ];

  return (
    <div className="about-us-container">
      {/* <div className="background-image">
        <div className="text-overlay">
          <h4>{t('aboutUsHeading')}</h4>
        </div>
      </div> */}
      <div className='missionStatement'>
        <h3>{t('missionStatement')}</h3>
        <p>{t('aboutUsText')}</p>
      </div>





      <div className='team-section'>
        <h2>{t('ourTeam')}</h2>
        <div className='team-members'>
          {teamMembers.map((member, index) => (
            <div key={index} className='team-card'>
              <img src={member.image} alt={member.name} className='team-image' />
              <div className='team-info'>
                <h5 className='team-name'>{member.name}</h5>
                <p className='team-role'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate, useLocation, useMatch } from "react-router-dom";

// import backGlow from "../../assets/images/Home/trGlow.webp";
import {
  FaCode,
  FaPencilAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";

export default function Benefits() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleNavigation2 = (category) => {
    navigate("/products", { state: { category } });
  };


  return (
    <div className="service-container position-relative">
      {/* <img style={{width:"100%", overflow:"hidden"}} className=" object-fit-cover position-absolute top-0  " src={backGlow} alt="" /> */}
      <div className="container">
        <h2>{t('benefit.categories')}</h2>

        <div className="line"></div>

        <div className="row">
          <div className="service-card active">
            <div className="icon">
              {/* <FaPaintBrush /> */}
            </div>
            <h3>{t('benefit.cryptocurrencyMiners')}</h3>
            <button onClick={() => { handleNavigation2('Miners') }} className="seeMore">
              {t('benefit.seeMore')}
            </button>
          </div>

          <div className="service-card">
            <div className="icon">
              {/* <FaCode /> */}
            </div>
            <h3>{t('benefit.miningContainers')}</h3>
            <button onClick={() => { handleNavigation2('Mining Containers') }} className="seeMore">
              {t('benefit.seeMore')}
            </button>
          </div>

          <div className="service-card">
            <div className="icon">
              {/* <FaLaptopCode /> */}
            </div>
            <h3>{t('benefit.miningChipsHardware')}</h3>
            <button onClick={() => { handleNavigation2('Others') }} className="seeMore">
              {t('benefit.seeMore')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

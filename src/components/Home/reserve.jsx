import React from "react";
import img from "../../assets/bannerImg1.jpg";
import { useTranslation } from "react-i18next";

const Reserve = () => {
  const { t } = useTranslation();

  return (
    <div className="reserve-container">
      <div className="content-section">
        <h1>{t("reserve.title")}</h1>
        <p>{t("reserve.description")}</p>
        <button className="btn-primary">{t("reserve.button")}</button>
      </div>
      <div className="image-section">
        <img src={img} alt="Reserve" />
      </div>
    </div>
  );
};

export default Reserve;

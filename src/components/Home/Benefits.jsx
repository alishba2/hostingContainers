import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaPencilAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <div className="service-container">
      <div className="container">
        <h2>{t("benefits.title")}</h2>
        <p>{t("benefits.description")}</p>

        <div className="row">
          <div className="service-card active">
            <div className="icon">
            </div>
            <h3>{t("benefits.miners.title")}</h3>
            <p>{t("benefits.miners.description")}</p>
          </div>

          <div className="service-card">
            <div className="icon">
            </div>
            <h3>{t("benefits.containers.title")}</h3>
            <p>{t("benefits.containers.description")}</p>
          </div>

          <div className="service-card">
            <div className="icon">
            </div>
            <h3>{t("benefits.hardware.title")}</h3>
            <p>{t("benefits.hardware.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

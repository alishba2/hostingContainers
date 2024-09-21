import React from "react";
import { useTranslation } from "react-i18next";

const Demosection = () => {
  const { t } = useTranslation();

  const data = [
    { id: 1, heading: "25K+", para: t("demoSection.projectsCompleted") },
    { id: 2, heading: "8K+", para: t("demoSection.happyCustomers") },
    { id: 3, heading: "10", para: t("demoSection.yearsExperience") },
    { id: 4, heading: "10", para: t("demoSection.countriesServed") },
  ];

  return (
    <div className="main-demo v-center h-center flex-column">
      <h1 className="text-center">{t("demoSection.title")}</h1>
      <div className="demoSection">
        {data.map((item) => (
          <div key={item.id} className="demoCard h-center">
            <h4 className="text-white h-center">{item.heading}</h4>
            <p className="text-white body-large fw-medium h-center">
              {item.para}
            </p>
            <div className="circle-anim"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demosection;

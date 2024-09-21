import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Whychooseus = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="why-choose-container">
        <div className="listItem">
          <div className="order">
            <Icon color="#FFF" icon="et:documents" width={40} height={40} />
            <h2 className="paraMedium text-center">
              {t("whyChooseUs.comprehensiveReportsTitle")}
            </h2>
            <p className="paraMedium text-center">
              {t("whyChooseUs.comprehensiveReportsDescription")}
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="heroicons:currency-dollar-solid"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">
              {t("whyChooseUs.profitableInvestmentTitle")}
            </h2>
            <p className="paraMedium text-center">
              {t("whyChooseUs.profitableInvestmentDescription")}
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="grommet-icons:user-expert"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">
              {t("whyChooseUs.certifiedExpertsTitle")}
            </h2>
            <p className="paraMedium text-center">
              {t("whyChooseUs.certifiedExpertsDescription")}
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="mdi:charity-outline"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">
              {t("whyChooseUs.passiveIncomeTitle")}
            </h2>
            <p className="paraMedium text-center">
              {t("whyChooseUs.passiveIncomeDescription")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychooseus;

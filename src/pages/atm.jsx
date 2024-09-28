import React from "react";
import "../style/pages/Home/_atm.scss";
import atmImage3 from "../assets/crypto3.jpg";
import atmImg1 from "../assets/crypto2.jpg";
import atmImg2 from "../assets/crypto3.jpg";
import atmImg3 from "../assets/crypto4.jpg";
import blueDot from "../assets/Icons/blueDot.png";
import earthPic from "../assets/earth-removebg-preview.png";
import { useTranslation } from "react-i18next";


export default function Atm() {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <>
            <div className="container-fluid app-container">
                <div style={{ marginBottom: "140px" }} className="hashFirstDiv row justify-content-center align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-md-5 d-flex justify-content-center align-items-center atm-image-container">
                        <img src={atmImage3} alt="Crypto ATM" className="atm-image" />
                    </div>

                    {/* Right Column - Text */}
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        {/* <img src={atmImage} alt="Crypto ATM" className="atm-image mb-4" /> */}
                        <div className="text-center">
                            <h1 className="company-logo">{t("companyLogo")}</h1>
                            <h2 className="company-name">{t("companyName")}</h2>
                            <p className="description">
                                {t("description")}
                            </p>
                        </div>
                    </div>
                </div>


                {/* executive summary */}
                <div
                    style={{ gap: "100px" }}
                    className="atmCardWrapper d-flex  align-items-center justify-content-center px-5"
                >
                    <div className="leftSide w-50 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            {" "}
                            <h3>{t("atmExecutiveSummary")}</h3>
                        </div>

                        <p>
                            {t("atmExecutiveSummaryContent")}                 </p>
                    </div>
                    <div className="rightSide w-50">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                border: '8px solid #4b2e83'
                                // transform: "skew(10deg, 10deg)",
                            }}
                            src={atmImg2}
                            alt=""
                        />
                    </div>
                </div>

                {/* market opportunity */}
                <div
                    style={{ marginTop: "170px", gap: "100px" }}
                    className="atmCardWrapper d-flex  align-items-center justify-content-between px-5"
                >
                    <div className="leftSide w-50 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",

                            }}
                        >
                            {" "}
                            <h3>{t("atmMarketOpportunity")}</h3>
                        </div>

                        <p>
                            {t("atmMarketOpportunityContent")}
                        </p>

                        <p>{t("atmTargetMarkets")}</p>
                        <ul
                            style={{
                                fontSize: "17px",
                                paddingLeft: "50px",
                                position: "relative",
                                zIndex: "2",

                            }}
                            className="d-flex flex-column gap-3"
                        >
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "25px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                1.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "95px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                2.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "160px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                3.
                            </div>
                            <li
                                style={{ zIndex: "2px", marginTop: "20px" }}
                                className="position-relative"
                            >
                                {t("atmTargetRegion1")}
                            </li>
                            <li>
                                {t("atmTargetRegion2")}
                            </li>
                            <li>
                                {t("atmTargetRegion3")}
                            </li>
                        </ul>
                    </div>
                    <div className="rightSide w-50 d-flex flex-column align-items-start gap-3">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                // border: "4px solid blue"
                                // transform: "skew(10deg, 10deg)",
                            }}
                            src={atmImg2}
                            alt=""
                        />

                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                // transform: "skew(10deg, 10deg)",
                            }}
                            src={atmImg2}
                            alt=""
                        />
                    </div>
                </div>

                {/* technology and hardware overview */}
                <div
                    style={{ marginTop: "170px", gap: "100px" }}
                    className="atmCardWrapper technologyWrapper d-flex  align-items-center justify-content-between px-5"
                >
                    <div className="leftSide w-50 d-flex flex-column align-items-start gap-3">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={atmImg3}
                            alt=""
                        />
                    </div>
                    <div className="rightSide w-50 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            {" "}
                            <h3 style={{ lineHeight: "normal" }}>
                                {t("atmTechnologyOverview")}

                            </h3>
                        </div>

                        <p style={{ letterSpacing: "1px" }}>
                            {t("atmHardwareContent")}

                        </p>

                        <ul
                            style={{
                                fontSize: "17px",
                                paddingLeft: "50px",
                                position: "relative",
                                zIndex: "2",
                            }}
                            className="d-flex flex-column gap-3"
                        >
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "25px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute technologyAbsolute1"
                            >
                                1.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "145px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute technologyAbsolute2"
                            >
                                2.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "270px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute technologyAbsolute3"
                            >
                                3.
                            </div>
                            <li
                                style={{ zIndex: "2px", marginTop: "20px" }}
                                className="position-relative"
                            >
                                <strong>                            {t("atmBanknoteValidationTitle")}</strong>The terminals
                                {t("atmBanknoteValidationContent")}
                            </li>
                            <li>
                                <strong>                                {t("atmBanknoteValidationContent")}
                                </strong>                                {t("atmBanknoteValidationContent")}

                            </li>
                            <li>
                                <strong>{t("atmCashCollectionTitle")}</strong>{t("atmCashCollectionContent")}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* key function of terminal */}
                <div
                    style={{ gap: "100px", marginTop: "140px" }}
                    className="atmCardWrapper keyfeatures d-flex align-items-center justify-content-center"
                >
                    <div className="leftSide w-50 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            <h3 style={{ lineHeight: "normal", textAlign: "center" }}>
                                {t("atmKeyFunctions")}
                            </h3>
                        </div>
                        <div style={{ zIndex: "999" }} className="terminalPrt1 position-relative">
                            <div
                                className="termimalAbsolute"
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "430px",
                                    height: "50px",
                                    position: "absolute",
                                    zIndex: "-1",
                                    top: "15px",
                                    left: "-20px",
                                }}
                            ></div>
                            <h4 className="mt-4">{t("atmCashToCrypto")}</h4>
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    marginTop: "25px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    gap: "20px",
                                }}
                            >
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCashToCryptoDetails1")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCashToCryptoDetails2")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCashToCryptoDetails3")}
                                </li>
                            </ul>
                        </div>

                        <div style={{ zIndex: "999" }} className="terminalPrt1 position-relative">
                            <div
                                className="termimalAbsolute"
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "430px",
                                    height: "50px",
                                    position: "absolute",
                                    zIndex: "-1",
                                    top: "15px",
                                    left: "-20px",
                                }}
                            ></div>
                            <h4 className="mt-4">{t("atmCryptoToCash")}</h4>
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    marginTop: "25px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    gap: "20px",
                                }}
                            >
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCryptoToCashDetails1")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCryptoToCashDetails2")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmCryptoToCashDetails3")}
                                </li>
                            </ul>
                        </div>

                        <div style={{ zIndex: "999" }} className="terminalPrt1 position-relative">
                            <div
                                className="termimalAbsolute"
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "430px",
                                    height: "50px",
                                    position: "absolute",
                                    zIndex: "-1",
                                    top: "15px",
                                    left: "-20px",
                                }}
                            ></div>
                            <h4 className="mt-4">{t("atmKYCCompliance")}</h4>
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    marginTop: "25px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    gap: "20px",
                                }}
                            >
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmKYCDetails1")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmKYCDetails2")}
                                </li>
                                <li style={{ display: "flex", alignItems: "start", justifyContent: "center", gap: "10px" }}>
                                    <img src={blueDot} alt="" />
                                    {t("atmKYCDetails3")}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ height: "100%" }} className="rightSide w-50">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={atmImg1}
                            alt=""
                        />
                    </div>
                </div>

                {/* security and cash management */}
                <div
                    style={{ gap: "100px", marginTop: "100px" }}
                    className="atmCardWrapper securityWrapper d-flex  align-items-center justify-content-center px-5"
                >
                    <div
                        style={{ zIndex: "999" }}
                        className="leftSide w-50 position-relative secContainer"
                    >
                        <div
                            className="secAbsolteDiv"
                            style={{
                                width: "500px",
                                height: "360px",
                                left: "80px",
                                border: "3px solid #4b2e83",
                                position: "absolute",
                                zIndex: "-1",
                                top: "-30px",
                            }}
                        ></div>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={atmImg2}
                            alt=""
                        />
                    </div>
                    <div className="rightSide w-50 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            {" "}
                            <h3 style={{ lineHeight: "normal" }}>
                                {t("securityAndCashManagement")}
                            </h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px" }}>
                            {t("securityParagraph")}
                        </p>
                    </div>
                </div>

                {/* business modal */}

                <div
                    style={{ marginTop: "170px", gap: "100px" }}
                    className="atmCardWrapper d-flex flex-column align-items-center justify-content-between px-5"
                >
                    <div className="leftSide w-75 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            {" "}
                            <h3 style={{ lineHeight: "normal" }}>{t("businessModal")}</h3>
                        </div>

                        <ul
                            style={{
                                fontSize: "17px",
                                paddingLeft: "50px",
                                position: "relative",
                                zIndex: "2",
                            }}
                            className="d-flex flex-column gap-5"
                        >
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "25px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                1.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "145px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                2.
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#4b2e83",
                                    width: "100px",
                                    height: "40px",
                                    top: "250px",
                                    left: "-60px",
                                    zIndex: "0",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                className="position-absolute"
                            >
                                3.
                            </div>
                            <li
                                style={{ zIndex: "2px", marginTop: "20px" }}
                                className="position-relative"
                            >
                                <strong>{t("banknoteValidationAndSorting")}</strong>{t("banknoteValidationDetails")}
                            </li>
                            <li>
                                <strong>{t("stackModule")}</strong>
                                {t("stackModuleDetails")}
                            </li>
                            <li>
                                <strong>{t("cashCollectionAndSecurity")}</strong>
                                {t("cashCollectionDetails")}
                            </li>
                        </ul>
                    </div>
                    <div className="rightSide w-75 d-flex flex-column align-items-start gap-3">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                border: "5px solid #4b2e83",
                            }}
                            src={atmImg3}
                            alt=""
                        />
                    </div>
                </div>

                {/* operational strategy */}

                <div
                    className="earthContainer atmCardWrapper"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "30px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#4b2e83",
                            padding: "15px",
                            borderRadius: "15px",
                        }}
                    >
                        {" "}
                        <h3 style={{ lineHeight: "normal" }}>{t("operationalStrategy")}</h3>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "space-around",

                            gap: "50px",
                            width: "100%",
                        }}
                        className="parentDiv"
                    >
                        <div style={{ position: "relative", zIndex: "10" }} className="earthDiv1">

                            <img src={earthPic} alt="" />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <h3 style={{ position: "relative", zIndex: "5" }}># 1</h3>
                                <p>
                                    <strong>{t("geographicDeployment")}</strong>
                                </p>
                                <p style={{ fontSize: "16px", position: "relative", zIndex: "5" }} className="text-center">
                                    {t("geographicDeploymentContent")}
                                </p>
                            </div>
                        </div>

                        <div className="earthDiv1">
                            <img src={earthPic} alt="" />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <h3># 2</h3>
                                <p style={{ textAlign: "center" }}>
                                    <strong>

                                        {t("maintenanceAndSecurity")}
                                    </strong>
                                </p>
                                <p style={{ fontSize: "16px" }} className="text-center">
                                    {t("maintenanceAndSecurityContent")}
                                </p>
                            </div>
                        </div>

                        <div className="earthDiv1">
                            <img src={earthPic} alt="" />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <h3># 3</h3>
                                <p>
                                    <strong>{t("compliance")}</strong>
                                </p>
                                <p style={{ fontSize: "16px" }} className="text-center">
                                    {t("complianceContent")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* financial projection */}

                <div
                    style={{ gap: "100px", paddingTop: "150px", width: "80%", margin: '0 auto' }}
                    className="atmCardWrapper financialWrapper d-flex  align-items-center justify-content-center px-5"
                >
                    <div className="financeConatiner w-100 d-flex flex-column align-items-start gap-3">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            {" "}
                            <h3 style={{ lineHeight: "normal" }}>{t("financialProjection")}</h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px" }}>
                            {t("financialProjectionContent")}
                        </p>

                        <div style={{ width: "100%", height: '230px', borderRadius: "20px", backgroundColor: "#4b2e83", zIndex: "999", position: "relative", display: "flex", flexDirection: "column", gap: "30px", padding: "20px" }} className="financeBox">
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>{t("year1")}</p>
                                <p style={{ fontSize: "25px" }}>{t("year1Revenue")}</p>
                            </div>



                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>{t("year2")}</p>
                                <p style={{ fontSize: "25px" }}>{t("year2Revenue")}</p>
                            </div>



                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>{t("year3")}</p>
                                <p style={{ fontSize: "25px" }}>{t("year3Revenue")}</p>
                            </div>
                        </div>
                        <p style={{ letterSpacing: "1.5px" }}>

                            {t("projectionsContent")}
                        </p>
                    </div>
                </div>

                {/* risk and mitigation */}
                <div
                    style={{ marginTop: "170px", gap: "100px", padding: "10px" }}
                    className="atmCardWrapper risk d-flex align-items-center justify-content-center px-5"
                >
                    <div
                        style={{ paddingLeft: "100px" }}
                        className="leftSide w-50 d-flex flex-column align-items-start gap-3"
                    >
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                            }}
                        >
                            <h3>{t('riskAndMitigationTitle')}</h3>
                        </div>

                        <ul
                            style={{
                                fontSize: "17px",
                                paddingLeft: "50px",
                                position: "relative",
                                zIndex: "2",
                            }}
                            className="d-flex flex-column gap-3"
                        >
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "#4b2e83",
                                        width: "100px",
                                        height: "40px",
                                        top: `${25 + index * 70}px`,
                                        left: "-60px",
                                        zIndex: "0",
                                        fontSize: "25px",
                                        fontWeight: "bold",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    className="position-absolute"
                                >
                                    {index + 1}.
                                </div>
                            ))}
                            <li style={{ zIndex: "2px", marginTop: "20px" }} className="position-relative">
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    {t('securityThreats')}:{" "}
                                </strong>
                                {t('highCryptoAdoptionRegions')}
                            </li>
                            <li>
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    {t('securityThreats')}:{" "}
                                </strong>
                                {t('highCryptoAdoptionRegions')}
                            </li>
                            <li>
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    {t('securityThreats')}:{" "}
                                </strong>
                                {t('highCryptoAdoptionRegions')}
                            </li>
                        </ul>
                    </div>
                    <div className="rightSide w-50 d-flex flex-column align-items-start gap-3">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                border: "10px solid #4b2e83",
                            }}
                            src={atmImg2}
                            alt=""
                        />
                    </div>
                </div>

                {/* Conclusion */}
                <div
                    style={{
                        gap: "100px",
                        paddingTop: "100px",
                        width: "80%",
                        margin: "0 auto",
                    }}
                    className="atmCardWrapper conclusion d-flex align-items-center justify-content-center"
                >
                    <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-5">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h3 style={{ lineHeight: "normal" }}>{t('conclusionTitle')}</h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px", textAlign: "left" }}>
                            {t('conclusionText')}
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

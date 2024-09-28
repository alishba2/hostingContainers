import React from "react";
import "../style/pages/Home/_atm.scss";
import atmImage3 from "../assets/crypto3.jpg";
import atmImg1 from "../assets/crypto2.jpg";
import atmImg2 from "../assets/crypto3.jpg";
import atmImg3 from "../assets/crypto4.jpg";
import blueDot from "../assets/Icons/blueDot.png";
import earthPic from "../assets/earth-removebg-preview.png";

export default function Atm() {
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
                            <h1 className="company-logo">HASH</h1>
                            <h2 className="company-name">Hosting International</h2>
                            <p className="description">
                                Cryptocurrency ATMs with Advanced Cash Handling and Security
                                Features
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                {/* <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 text-container">
                    <h2 className="summary-title">Executive Summary</h2>
                    <p className="description">
                        This business focuses on the deployment and operation of cryptocurrency ATMs,
                        combining the traditional functionality of cash terminals with seamless crypto-fiat conversions.
                        Utilizing cutting-edge hardware from JCM Global, a leader in cash handling technology,
                        these ATMs allow users to deposit and withdraw fiat currency while easily transacting in cryptocurrencies.
                        This solution is designed to meet the increasing demand for hybrid financial services,
                        offering a secure and flexible system for handling both cash and digital assets.
                    </p>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center atm-image-container">
                    {/* <img src="" alt="ATM Side" className="atm-image" /> */}
                {/* </div> */}
                {/* </div>  */}

                {/* third section */}

                {/* <div className="row align-items-center">
                {/* Left Side: Market Opportunity */}

                {/* <div className="col-md-6 market-text">
                    <h2 className="market-title">Market Opportunity</h2>

                    <p className="market-description">
                        As cryptocurrency adoption continues to grow globally, the demand for accessible,
                        secure, and user-friendly methods to exchange cash for cryptocurrencies is rising.
                        This business caters to both cryptocurrency enthusiasts and casual users,
                        especially in areas with limited access to banking services.
                    </p>
                    <div className="target-marketing">
                        <p>Target marketing includes:</p>
                        <ol >
                            <li className="target-list">High crypto-adoption regions with developed crypto ecosystems.</li>
                            <li className="target-list">Underbanked areas where access to traditional financial services is limited.</li>
                            <li className="target-list">Retailers and service providers seeking more diverse payment methods.</li>
                        </ol>
                    </div>
                </div> */}

                {/* Right Side: Two Images */}
                {/* <div className="col-md-6 image-section">
                    <div className="image-container">
                        <img src={atmImage3} alt="Crypto ATM 1" className="atm-image" />
                    </div>
                    <div className="image-container">
                        <img src={atmImage3} alt="Crypto ATM 2" className="atm-image" />
                    </div>
                </div> */}
                {/* </div> */}

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
                            <h3>Executive Summary</h3>
                        </div>

                        <p>
                            This business focuses on the deployment and operation of cryptocurrency ATMs,
                            combining the traditional functionality of cash terminals with seamless crypto-fiat conversions.
                            Utilizing cutting-edge hardware from JCM Global, a leader in cash handling technology,
                            these ATMs allow users to deposit and withdraw fiat currency while easily transacting in cryptocurrencies.
                            This solution is designed to meet the increasing demand for hybrid financial services,
                            offering a secure and flexible system for handling both cash and digital assets.
                        </p>
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
                            <h3>Market Opportunity</h3>
                        </div>

                        <p>
                            As cryptocurrency adoption continues to grow globally, the demand for accessible,
                            secure, and user-friendly methods to exchange cash for cryptocurrencies is rising.
                            This business caters to both cryptocurrency enthusiasts and casual users,
                            especially in areas with limited access to banking services.
                        </p>

                        <p>Target markets include:</p>
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
                                Highly crypto-adoption regions*with developed crypto ecosystem
                            </li>
                            <li>
                                Highly crypto-adoption regions*with developed crypto ecosystem
                            </li>
                            <li>
                                Highly crypto-adoption regions*with developed crypto ecosystem
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
                                Technology & Hardware Overview{" "}
                            </h3>
                        </div>

                        <p style={{ letterSpacing: "1px" }}>
                            At the core of the terminal is JCM Global's cash handling
                            technology, designed for speed, accuracy and security. The
                            hardware includes the following features:
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
                                <strong>Banknote validation and sorting:</strong>The terminals
                                accept 30 notes per transection, with each note verified for
                                authenticity and denomination. Once validated, the notes are
                                sorted into six programmable roll.
                            </li>
                            <li>
                                <strong>Stack Module:</strong>The terminals accept 30 notes per
                                transection, with each note verified for authenticity and
                                denomination. Once validated, the notes are sorted into six
                                programmable roll.
                            </li>
                            <li>
                                <strong>Cash Collection & Security:</strong>The terminals accept
                                30 notes per transection, with each note verified for
                                authenticity and denomination. Once validated, the notes are
                                sorted into six programmable roll.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* key function of terminal */}
                <div
                    style={{ gap: "100px", marginTop: "140px" }}
                    className="atmCardWrapper keyfeatures d-flex  align-items-center justify-content-center "
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
                            <h3 style={{ lineHeight: "normal", textAlign: "center" }}>
                                Key Functions of the Terminal
                            </h3>
                        </div>
                        <div
                            style={{ zIndex: "999" }}
                            className="terminalPrt1  position-relative"
                        >
                            <div className="termimalAbsolute"
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
                            <h4 className="mt-4">1. Cash to crypto conversion</h4>
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
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Banknotes are validated and securely stored in the rolls or
                                    stacker.
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal.Banknotes
                                    are validated and securely stored in the rolls or
                                    stacker..Banknotes are validated and securely stored in the
                                    rolls or stacker.
                                </li>
                            </ul>
                        </div>

                        <div
                            style={{ zIndex: "999" }}
                            className="terminalPrt1  position-relative"
                        >
                            <div className="termimalAbsolute"
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
                            <h4 className="mt-4">2. Crypto to cash conversion</h4>
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
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Banknotes are validated and securely stored in the rolls or
                                    stacker.
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal.Banknotes
                                    are validated and securely stored in the rolls or
                                    stacker..Banknotes are validated and securely stored in the
                                    rolls or stacker.
                                </li>
                            </ul>
                        </div>

                        <div
                            style={{ zIndex: "999" }}
                            className="terminalPrt1  position-relative"
                        >
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
                            <h4 className="mt-4">3. KYC Compliance</h4>
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
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Banknotes are validated and securely stored in the rolls or
                                    stacker.
                                </li>

                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={blueDot} alt="" />
                                    Customer deposit upto 30 banknotes into the terminal.Banknotes
                                    are validated and securely stored in the rolls or
                                    stacker..Banknotes are validated and securely stored in the
                                    rolls or stacker.
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
                                Security and Cash Management
                            </h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px" }}>
                            The inclusion of a high-security safe and advanced stacker module adds a robust layer of security each terminal. By storing up to 2200 notes n the stacker, terminal are capble of handling high cash volumes, reducing the frequency of cash collection and minimizing risks associated with vandlism and theft. The design of the systems ensures quick and safe replinishment of cash, with a cassette-based stacker allowing for easy exchange during CIT operations.
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
                            <h3 style={{ lineHeight: "normal" }}>Business Modal</h3>
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
                                <strong>Banknote validation and sorting:</strong>The terminals
                                accept 30 notes per transection, with each note verified for
                                authenticity and denomination. Once validated, the notes are
                                sorted into six programmable roll.
                            </li>
                            <li>
                                <strong>Stack Module:</strong>The terminals accept 30 notes per
                                transection, with each note verified for authenticity and
                                denomination. Once validated, the notes are sorted into six
                                programmable roll.
                            </li>
                            <li>
                                <strong>Cash Collection & Security:</strong>The terminals accept
                                30 notes per transection, with each note verified for
                                authenticity and denomination. Once validated, the notes are
                                sorted into six programmable roll.
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
                        <h3 style={{ lineHeight: "normal" }}>Operational Strategy</h3>
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
                                    <strong>Geographic Deployment</strong>
                                </p>
                                <p style={{ fontSize: "16px", position: "relative", zIndex: "5" }} className="text-center">
                                    Focus on deploying terminals in areas with high cryptocurrency adoption and in underbanked regions where access to financial errices is limited
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
                                    <strong>Maintenance and Security</strong>
                                </p>
                                <p style={{ fontSize: "16px" }} className="text-center">
                                    Leverage JCM's robust and reliable hardware, reducing operational downtime and ensuring long-term security. The sage and stacker systems provide additional protection against vandalism and theft, especially in high traffic environments.
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
                                    <strong>Compliance</strong>
                                </p>
                                <p style={{ fontSize: "16px" }} className="text-center">
                                    Ensure the terminals are compliant with local kYC and anti-money landering(AML) regulations by integrating secure verification systems.
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
                            <h3 style={{ lineHeight: "normal" }}>Financial Projection</h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px" }}>
                            Initial deployment of 100 terminals in key marktes is projected to generate the following revenue over three years.
                        </p>

                        <div style={{ width: "100%", height: '230px', borderRadius: "20px", backgroundColor: "#4b2e83", zIndex: "999", position: "relative", display: "flex", flexDirection: "column", gap: "30px", padding: "20px" }} className="financeBox">
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>Year 1:</p>
                                <p style={{ fontSize: "25px" }}>2.5M</p>
                            </div>



                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>Year 2:</p>
                                <p style={{ fontSize: "25px" }}>4.8M</p>
                            </div>



                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", padding: "0px 30px" }} className="year1">
                                <p style={{ fontSize: "25px" }}>Year 3:</p>
                                <p style={{ fontSize: "25px" }}>7.2M</p>
                            </div>
                        </div>
                        <p style={{ letterSpacing: "1.5px" }}>
                            These projections assume gradual market adoption, transaction volume groth, and continued expansion of crypto-flat transactions.
                        </p>
                    </div>
                </div>

                {/* risk and mitigation */}
                <div
                    style={{ marginTop: "170px", gap: "100px", padding: "10px" }}
                    className="atmCardWrapper risk d-flex  align-items-center justify-content-center px-5"
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
                            {" "}
                            <h3>Risk and Mitigation</h3>
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
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    Security Threats:{" "}
                                </strong>
                                Highly crypto-adoption regions*with developed crypto ecosystem
                                with developed crypto ecosystem
                            </li>
                            <li>
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    Security Threats:{" "}
                                </strong>
                                Highly crypto-adoption regions*with developed crypto ecosystem
                            </li>
                            <li>
                                <strong style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    Security Threats:{" "}
                                </strong>
                                Highly crypto-adoption regions*with developed crypto ecosystem
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

                {/* conclusion */}
                <div
                    style={{
                        gap: "100px",
                        paddingTop: "100px",
                        width: "80%",
                        margin: "0 auto",
                    }}
                    className="atmCardWrapper conclusion d-flex  align-items-center justify-content-center"
                >
                    <div className=" w-100 d-flex flex-column align-items-center justify-content-center gap-5">
                        <div
                            style={{
                                backgroundColor: "#4b2e83",
                                padding: "10px",
                                borderRadius: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"


                            }}
                        >
                            {" "}
                            <h3 style={{ lineHeight: "normal" }}>Conclusion</h3>
                        </div>

                        <p style={{ letterSpacing: "1.5px", textAlign: "left" }}>
                            The deployment of cryptocurrency ATMs equipped with JSM's advanced hardware offers a scalable, secure, and user-friendly solutions to the growing demand of crypto-fiat transactions, The business modal is built to address both consumer and retailer needs, while ensuring safety, security, and operationsal efficiency through cutting-edge cash handling and anti-theft meaures, This positions the company as a leader in the hybrid financial services market.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

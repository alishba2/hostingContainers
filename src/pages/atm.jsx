import React from 'react'
import "../style/pages/Home/_atm.scss";
import atmImage3 from '../assets/crypto3.jpg';


export default function Atm() {
    return (
        <div className="container-fluid app-container">
            <div className="row justify-content-center align-items-center min-vh-100">
                {/* Left Column - Image */}
                <div className="col-md-5 d-flex justify-content-center align-items-center atm-image-container">
                    {/* <img src={atmImage} alt="Crypto ATM" className="atm-image" /> */}
                </div>

                {/* Right Column - Text */}
                <div className="col-md-6 d-flex flex-column align-items-center">
                    {/* <img src={atmImage} alt="Crypto ATM" className="atm-image mb-4" /> */}
                    <div className="text-center">
                        <h1 className="company-logo">HASH</h1>
                        <h2 className="company-name">Hosting International</h2>
                        <p className="description">
                            Cryptocurrency ATMs with Advanced Cash Handling and Security Features
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="row justify-content-center align-items-center min-vh-100">
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
                </div>
            </div>

            {/* third section */}

            <div className="row align-items-center">
                {/* Left Side: Market Opportunity */}

                <div className="col-md-6 market-text">
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
                </div>

                {/* Right Side: Two Images */}
                <div className="col-md-6 image-section">
                    <div className="image-container">
                        <img src={atmImage3} alt="Crypto ATM 1" className="atm-image" />
                    </div>
                    <div className="image-container">
                        <img src={atmImage3} alt="Crypto ATM 2" className="atm-image" />
                    </div>
                </div>
            </div>


        </div >
    );
}

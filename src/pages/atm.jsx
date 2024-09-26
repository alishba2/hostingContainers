import React from 'react';
import "../style/pages/Home/_atm.scss";
import atmImage3 from '../assets/crypto3.jpg';

export default function Atm() {
    return (
        <div className="container-fluid app-container">
            {/* First Section */}
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-5 d-flex justify-content-center align-items-center atm-image-container">
                    <img src={atmImage3} alt="Crypto ATM" className="atm-image" />
                </div>
                <div className="col-md-6 text-container">
                    <h1 className="company-logo">HASH</h1>
                    <h2 className="company-name">Hosting International</h2>
                    <div className="description-strip">
                        <p className="description">
                            Cryptocurrency ATMs with Advanced Cash Handling and Security Features
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 text-container">
                    <h2 className="market-title">Executive Summary</h2>
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
                    <img src={atmImage3} alt="ATM Side" className="atm-image" />
                </div>
            </div>

            {/* Third Section */}
            <div className="row align-items-center">
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
                        <ol className="target-list function-item">
                            <li>High crypto-adoption regions with developed crypto ecosystems.</li>
                            <li>Underbanked areas where access to traditional financial services is limited.</li>
                            <li>Retailers and service providers seeking more diverse payment methods.</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="row align-items-center fourth-section">
                <div className="col-md-5 d-flex justify-content-center align-items-center atm-image-container">
                    <img src={atmImage3} alt="Crypto ATM" className="atm-image" />
                </div>
                <div className="col-md-6 feature-text">
                    <h2 className="feature-title">Technology & Hardware Overview</h2>
                    <p className="feature-description">
                        At the core of the terminal is JCM Global's cash-handling technology, designed for speed, accuracy, and security.
                        The hardware includes the following features:
                    </p>
                    <ol className="function-item">
                        <li>Banknote Validation & Sorting: The terminal accepts up to 30 notes per transaction, each verified for authenticity and denomination.</li>
                        <li>Stacker Module: Holds up to 2,200 notes in the stacker, preventing overflows and ensuring secure cash collection.</li>
                        <li>Cash Collection & Security: A high-security safe ensures secure cash-in-transit operations.</li>
                    </ol>
                </div>
            </div>

            {/* Fifth Section: Key Functions */}
            <div className="row align-items-center">
                <div className="col-md-6 content-section">
                    <h2 className="title">Key Functions of the Terminal</h2>
                    <div className="function-item">
                        <h3>1. Cash-to-Crypto Conversion</h3>
                        <ul>
                            <li>Customers deposit up to 30 banknotes into the terminal.</li>
                            <li>Banknotes are validated and securely stored in the rolls or stacker.</li>
                            <li>
                                Crypto assets are sent to the customer's wallet address, which is scanned via the terminal's QR code reader. Transactions are executed using either the terminal's internal wallet or through API integrations with leading cryptocurrency exchanges.
                            </li>
                        </ul>
                    </div>
                    <div className="function-item">
                        <h3>2. Crypto-to-Cash Conversion</h3>
                        <ul>
                            <li>Customers scan a QR code generated by the terminal, linking it to a wallet address for crypto transfer.</li>
                            <li>After the crypto is transferred and confirmed on the blockchain, the terminal dispenses the equivalent amount in fiat currency (up to 30 banknotes per transaction).</li>
                        </ul>
                    </div>
                    <div className="function-item">
                        <h3>3. KYC Compliance</h3>
                        <ul>
                            <li>For regions where Know Your Customer (KYC) regulations apply, customers can complete the process through a web-based service.</li>
                            <li>After verification, they can use a secure QR code to authenticate themselves at the terminal before proceeding with transactions.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 image-section">
                    {/* Add image here if needed */}
                    <img src={atmImage3} alt="Bitcoin and cash" className="key-function-image" />
                </div>
            </div>
        </div>
    );
}

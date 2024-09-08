import React from 'react';
import { FaCloud, FaRocket, FaWater, FaCheck } from 'react-icons/fa'; // Import icons from react-icons library
import "../style/pages/_hosting.scss"; // Link to the SCSS file

import Footer from './footer';
export default function Hosting() {
    return (
        <div className="hosting-container">
            <h1>Choose Your Hosting Plan</h1>
            <p>Unlock optimal crypto mining hosting solutions.</p>
            <div className="hosting-plans">
                <div className="plan">
                    {/* <FaCheck className="plan-icon" /> */}
                    <h2>Standard</h2>
                    <ul>
                        <li><strong>Power rate :</strong> <span>$0.07/kWh</span></li>
                        <li><strong>Cooling:</strong> <span>Air System</span></li>
                        <li><strong>Location:</strong> <span>Dubai</span></li>
                        <li><strong>Energy:</strong> <span>Mix</span></li>
                        <li><strong>Hash-Share:</strong> <span>Lorem Ipsum</span></li>
                        <li><strong>Estimated Lifespan:</strong> <span>5 Years</span></li>
                        <li><strong>Contract Duration:</strong> <span>3 Years</span></li>
                    </ul>
                    <button className="get-started-btn">Get Started</button>

                </div>
                <div className="plan plan-highlight">
                    {/* <FaRocket className="plan-icon" /> */}
                    <h2>Premium</h2>
                    <ul>
                        <li><strong>Power rate :</strong> <span>$0.07/kWh</span></li>
                        <li><strong>Cooling:</strong> <span>Air System</span></li>
                        <li><strong>Location:</strong> <span>Dubai</span></li>
                        <li><strong>Energy:</strong> <span>Mix</span></li>
                        <li><strong>Hash-Share:</strong> <span>Lorem Ipsum</span></li>
                        <li><strong>Estimated Lifespan:</strong> <span>5 Years</span></li>
                        <li><strong>Contract Duration:</strong> <span>3 Years</span></li>
                    </ul>
                    <button className="get-started-btn">Get Started</button>

                </div>
                <div className="plan">
                    {/* <FaWater className="plan-icon" /> */}
                    <h2>Hydro</h2>
                    <ul>
                        <li><strong>Power rate :</strong> <span>$0.07/kWh</span></li>
                        <li><strong>Cooling:</strong> <span>Air System</span></li>
                        <li><strong>Location:</strong> <span>Dubai</span></li>
                        <li><strong>Energy:</strong> <span>Mix</span></li>
                        <li><strong>Hash-Share:</strong> <span>Lorem Ipsum</span></li>
                        <li><strong>Estimated Lifespan:</strong> <span>5 Years</span></li>
                        <li><strong>Contract Duration:</strong> <span>3 Years</span></li>
                    </ul>
                    <button className="get-started-btn">Get Started</button>

                </div>
            </div>



            <Footer />
        </div>
    );
}

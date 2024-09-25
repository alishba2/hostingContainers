import React from 'react';
import '../../style/pages/Home/_miningSolution.scss'; // Import your SCSS file
import { FaTools, FaMicrochip, FaNetworkWired } from 'react-icons/fa'; // Importing icons

const HostingContainers = () => {
    return (
        <div className="hosting-containers-container">
            <div className="welcome-section">
                <h2>About Hosting Containers</h2>
                <p>
                    At Hosting Containers, we offer modern solutions for optimizing your digital infrastructure.
                    Join us to explore the latest trends and technologies in the industry.
                </p>
            </div>

            <div className="solutions-row">
                <div className="solution-card">
                    <div className="icon">
                        <FaTools size={40} color="#a890d3" /> {/* Add an appropriate icon */}
                    </div>
                    <h3>Comprehensive Mining Services</h3>
                    <p>
                        We offer end-to-end mining solutions designed to streamline your operations and maximize profitability. Whether you're in the US, Kazakhstan, or the UAE, our solutions are tailored to meet your location's unique demands.
                    </p>
                </div>

                <div className="solution-card">
                    <div className="icon">
                        <FaMicrochip size={40} color="#a890d3" />{/* Add an appropriate icon */}
                    </div>
                    <h3>Equipment and Software</h3>
                    <p>
                        Partnering with industry leaders like Bitmain, we provide cutting-edge hardware and fully integrated software solutions to enhance performance and reliability.
                    </p>
                </div>

                <div className="solution-card">
                    <div className="icon">
                        <FaNetworkWired size={40} color="#a890d3" /> {/* Add an appropriate icon */}
                    </div>
                    <h3>Mining Pools and Partnerships</h3>
                    <p>
                        Maximize your earnings by joining our mining pools. We offer flexible options that leverage the best opportunities available through industry partnerships.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HostingContainers;

import React from "react";
import {
  FaCode,
  FaPencilAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="service-container">
      <div className="container">
        <h2>Boost Your Crypto Mining</h2>
        {/* <p>
          Unlock the full power of cryptocurrency mining with our tailored solutions, designed to meet the demands of both novice and expert miners.
        </p> */}

        <div className="row">
          <div className="service-card active">
            <div className="icon">
              {/* <FaPaintBrush /> */}
            </div>
            <h3>Cryptocurrency Miners</h3>
            <p>
              Want to mine crypto but lack the infrastructure? Explore our top-of-the-line miners, offering unparalleled performance for your mining operations.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              {/* <FaCode />/ */}
            </div>
            <h3>Mining <br></br> Containers</h3>
            <p>
              Portable, scalable, and efficient—our mining containers allow you to expand operations without the need for additional space.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              {/* <FaLaptopCode /> */}
            </div>
            <h3>Mining Chips & Hardware</h3>
            <p>
              Equip your rigs with the latest mining chips and hardware, optimized for maximum hash rates and energy efficiency.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

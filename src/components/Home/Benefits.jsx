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
        <h2>We Shape The Perfect Solutions</h2>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>

        <div className="row">
          <div className="service-card active">
            <div className="icon">
              <FaPaintBrush />
            </div>
            <h3>MINING SOLUTIONS</h3>
            <p>
              Want to mine crypto but dont have the space? Explore our mining
              solutions.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaCode />
            </div>
            <h3>Miners</h3>
            <p>Browse more miners</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaLaptopCode />
            </div>
            <h3>HYDRO MINERS</h3>
            <p>Browse Hydro Miners</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaChartLine />
            </div>
            <h3>ACCESSORIES</h3>
            <p>Browse more accessories</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaPencilAlt />
            </div>
            <h3>Digital Products</h3>
            <p>
              We design and develop digital products that meet both your needs
              and your customers' expectations.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaMobileAlt />
            </div>
            <h3>UX/UI Design</h3>
            <p>
              Our designs are user-centric, ensuring intuitive interfaces that
              enhance user engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

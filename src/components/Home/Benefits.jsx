import React from 'react';
import { FaCode, FaPencilAlt, FaLaptopCode, FaMobileAlt, FaChartLine, FaPaintBrush } from 'react-icons/fa';
import "../../style/pages/_benefits.scss";

export default function Benefits() {
  return (
    <div className='service-container'>
      <div className='container'>
        <h2>We Shape The Perfect Solutions</h2>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

        <div className='row'>
          <div className='service-card active'>
            <div className="icon"><FaPaintBrush /></div>
            <h3>Graphic Design</h3>
            <p>We create stunning visuals to communicate your brand's message effectively.</p>
          </div>

          <div className='service-card'>
            <div className="icon"><FaCode /></div>
            <h3>Application Development</h3>
            <p>Custom app solutions tailored to your business needs, ensuring seamless user experiences.</p>
          </div>

          <div className='service-card'>
            <div className="icon"><FaLaptopCode /></div>
            <h3>Web Development</h3>
            <p>We build fast, responsive websites that bring your digital vision to life.</p>
          </div>

          <div className='service-card'>
            <div className="icon"><FaChartLine /></div>
            <h3>Online Marketing</h3>
            <p>Drive traffic and increase engagement through targeted digital marketing strategies.</p>
          </div>

          <div className='service-card'>
            <div className="icon"><FaPencilAlt /></div>
            <h3>Digital Products</h3>
            <p>We design and develop digital products that meet both your needs and your customers' expectations.</p>
          </div>

          <div className='service-card'>
            <div className="icon"><FaMobileAlt /></div>
            <h3>UX/UI Design</h3>
            <p>Our designs are user-centric, ensuring intuitive interfaces that enhance user engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

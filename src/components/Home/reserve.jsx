import React from "react";
import img from "../../assets/bannerImg1.jpg";

const Reserve = () => {
  return (
    <div className="reserve-container">
      <div className="content-section">
        <h1>SECURE YOUR SPOT & START MINING BY AUGUST</h1>
        <p>
          We're leading the charge toward a more sustainable and profitable
          mining future. Our initial project boasts a 1.5 MW capacity with only
          200 machines available, making this an elite opportunity for
          investors. This is a unique opportunity to be at the forefront of
          eco-friendly mining, with hosting price competitively at$0.069/KWH.
          Minimum order is 5 units, ensuring a tailored approach to your mining
          needs. The machines must be ordered before the 5th of May.
        </p>
        <button className="btn-primary">Reserve Now</button>
      </div>
      <div className="image-section">
        <img src={img} alt="Reserve" />
      </div>
    </div>
  );
};

export default Reserve;

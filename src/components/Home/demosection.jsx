import React from "react";

const Demosection = () => {
  const data = [
    { id: 1, heading: "25K+", para: "Projects Completed" },
    { id: 2, heading: "8K+", para: "Happy Customers" },
    { id: 3, heading: "10", para: "Years Of Experience" },
    { id: 4, heading: "10", para: "Countries Served" },
  ];

  return (
    <div className="main-demo v-center h-center flex-column">
      <h1 className="text-center">Why Choose Us</h1>
      <div className="demoSection">
        {data.map((item) => (
          <div key={item.id} className="demoCard h-center">
            <h4 className="text-white h-center">{item.heading}</h4>
            <p className="text-white body-large fw-medium h-center">
              {item.para}
            </p>
            <div className="circle-anim"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demosection;

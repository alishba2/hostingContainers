import React from "react";
import Banner from "./../components/Home/banner";
import Benefits from "../components/Home/Benefits";
import ProductSlider from "../components/Home/productSlider";
import Reserve from "../components/Home/reserve";
import Whychooseus from "./../components/Home/whychooseus";
import Contactus from "../components/Home/contactus";
import Hostingservices from "../components/Home/hostingservices";
import Workwithus from "../components/Home/workwithus";
import Demosection from "../components/Home/demosection";

const Home = () => {
  return (
    <>
      <Banner />
      <Benefits />
      <ProductSlider />
      <Reserve />
      <Hostingservices />
      <Demosection />
      <Whychooseus />
      {/* <Workwithus /> */}
      <Contactus />
    </>
  );
};

export default Home;

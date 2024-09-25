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
import DubaiVenueLocator from "./map";
import MiningSolutions from "../components/Home/miningSolution";
import AtmSection from "../components/Home/atmsection";
const Home = () => {
  return (
    <>
      <Banner />
      <MiningSolutions/>
      <Benefits />
      <ProductSlider />
      <Reserve />
      <Hostingservices />
      <AtmSection />
      <Demosection />
      <Whychooseus />
      {/* <DubaiVenueLocator /> */}
      {/* <Workwithus /> */}
      <Contactus />
    </>
  );
};

export default Home;

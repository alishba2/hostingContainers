import React from "react";
import Banner from "./../components/Home/banner";
import Benefits from "../components/Home/Benefits";
import Footer from "./footer";
import ProductSlider from "../components/Home/productSlider";
import Reserve from "../components/Home/reserve";
import Whychooseus from "./../components/Home/whychooseus";
import Contactus from "../components/Home/contactus";

const Home = () => {
  return (
    <>
      <Banner />
      <Benefits />
      <ProductSlider />
      <Reserve />
      <Whychooseus />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;

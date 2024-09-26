import React from "react";
import Slider from "react-slick"; // Import the react-slick component
import img1 from "../../assets/bannerImg3.jpg";
import img2 from "../../assets/containerImgday12.jpeg";
import img3 from "../../assets/crtpto3.jpg";
import img4 from "../../assets/miningChips.jpg";
import img5 from "../../assets/atm3.jpeg";
import img6 from "../../assets/containerImgday11.jpeg";
import { useTranslation } from "react-i18next";

const Hostingservices = () => {
  const { t } = useTranslation();

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hosting-services-main v-center flex-column">
      <h1 >{t("hostingServices.title")}</h1>
      <p className="paraSmall text-center">{t("hostingServices.description")}</p>

      {/* Slick Carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Mining facility 1" />
          </div>
          <div>
            <img src={img2} alt="Mining facility 2" />
          </div>
          <div>
            <img src={img3} alt="Mining facility 3" />
          </div>
          <div>
            <img src={img4} alt="Bitcoin" />
          </div>
          <div>
            <img src={img5} alt="Mining 1" />
          </div>
          <div>
            <img src={img6} alt="Mining 2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hostingservices;

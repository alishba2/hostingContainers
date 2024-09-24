import React from "react";
import Slider from "react-slick"; // Import the react-slick component
import img1 from "../../assets/bannerImg3.jpg";
import img2 from "../../assets/containerImgday (4).jpeg";
import img3 from "../../assets/containerImgday11.jpeg";
import img4 from "../../assets/bitcoin.jpg";
import img5 from "../../assets/mining3.jpg";
import img6 from "../../assets/mining.jpg";
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

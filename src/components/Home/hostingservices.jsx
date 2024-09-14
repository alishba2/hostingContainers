import React from "react";
import Slider from "react-slick"; // Import the react-slick component
import img1 from "../../assets/bannerImg3.jpg";
import img2 from "../../assets/containerImgday (4).jpeg";
import img3 from "../../assets/containerImgday (11).jpeg";
import img4 from "../../assets/bitcoin.jpg";
import img5 from "../../assets/mining3.jpg";
import img6 from "../../assets/mining.jpg";

const Hostingservices = () => {
  // Slick carousel settings
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of images per slide
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically scroll
    autoplaySpeed: 3000, // Autoplay interval (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // For screen widths less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 images per slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screen widths less than 768px
        settings: {
          slidesToShow: 2, // Show 2 images per slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screen widths less than 480px
        settings: {
          slidesToShow: 1, // Show 1 image per slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="hosting-services-main v-center flex-column">
        <h1 className="text-center">Hosting Services</h1>
        <p className="paraSmall text-center">
          At CryptoMiners, we take pride in offering top-of-the-line crypto
          hosting service UAE in our crypto mining farms. Whether you're a
          seasoned miner or just starting your journey, our crypto-mining
          hosting services provide the perfect environment for your mining
          machines to thrive. With our cutting-edge facilities, advanced cooling
          systems, and robust security measures, we ensure optimal performance
          and maximum uptime for your crypto mining rigs. Our dedicated team of
          experts is committed to providing you with seamless support,
          monitoring, and maintenance. Whether you are looking for
          Bitmain-certified technicians, top-notch crypto mining experts, or the
          latest machines, you can find the best Crypto mining hosting service
          at CryptoMiners.
        </p>

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
    </>
  );
};

export default Hostingservices;

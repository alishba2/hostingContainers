import React from "react";
import Slider from "react-slick"; // Import the react-slick component
import img1 from "../../assets/atm1.jpeg";
import img2 from "../../assets/atm2.jpeg";
import img3 from "../../assets/atm7.jpg";
import img4 from "../../assets/atm4.jpeg";
import img5 from "../../assets/atm5.jpeg";
import img6 from "../../assets/atm7.jpg";
import { useTranslation } from "react-i18next";

const AtmSection = () => {
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
            <h1 >{t("atmSection.title")}</h1>
            <p className="paraSmall text-center">{t("atmSection.description")}</p>

            {/* Slick Carousel */}
            <div className="carousel-container">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="ATM 1" />
                    </div>
                    <div>
                        <img src={img2} alt="ATM 2" />
                    </div>
                    <div>
                        <img src={img3} alt="ATM 3" />
                    </div>
                    <div>
                        <img src={img4} alt="ATM 4" />
                    </div>
                    <div>
                        <img src={img5} alt="ATM 5" />
                    </div>
                    <div>
                        <img src={img6} alt="ATM 6" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default AtmSection;

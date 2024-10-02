import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img1 from "../../assets/containerday.jpeg";
import img2 from "../../assets/mingingcontainer.jpg";
import img3 from "../../assets/containerImgday12.jpeg";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import usFlag from "../../assets/us.png";
import russiaFlag from "../../assets/russia_4855780.png";
import spainFlag from "../../assets/spain_8363059.png";
import portugalFlag from "../../assets/portugal_5315625.png";
import chinaFlag from "../../assets/china_5315264.png";
import arabicFlag from "../../assets/arabic.png";

// Language flag mapping and country names in respective languages
const flags = {
  en: { flag: usFlag, name: "English" },
  ru: { flag: russiaFlag, name: "Русский" },
  es: { flag: spainFlag, name: "Español" },
  pt: { flag: portugalFlag, name: "Português" },
  zh: { flag: chinaFlag, name: "中文" },
  ar: { flag: arabicFlag, name: "العربية" },
};

const Banner = () => {
  const navigate = useNavigate();
  const [exchangeRates, setExchangeRates] = useState([]);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle language dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const fetchAllCryptoRates = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd", // Base currency (USD)
              order: "market_cap_desc", // Order by market cap
              per_page: 250, // Maximum allowed per page by CoinGecko
              page: 1, // First page
            },
          }
        );
        const coins = response.data;

        const formattedRates = coins.map((coin) => ({
          name: coin.symbol.toUpperCase(),
          price: coin.current_price.toFixed(2),
        }));

        setExchangeRates(formattedRates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setExchangeRates([]);
      }
    };

    fetchAllCryptoRates();
    // Refresh the rates every minute
    const interval = setInterval(fetchAllCryptoRates, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="exchange-rates-container" style={{ height: "40px" }}>
        <div className="marquee-main">
          <marquee
            width="100%"
            direction="left"
            height="40px"
            scrollamount="5"
            behavior="scroll"
          >
            {exchangeRates.length ? (
              exchangeRates.map((rate, index) => (
                <span key={index} className="marquee-item">
                  <strong style={{ color: "#a890d3" }}>{rate.name}</strong>:{" "}
                  <span>${rate.price}</span> &nbsp;
                </span>
              ))
            ) : (
              <span>...</span>
            )}
          </marquee>
        </div>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        className="custom-carousel"
        showIndicators={false}
      >
        <div className="carousel-slide">
          <img src={img3} alt="Slide 1" className="carousel-image" />
          <div className="overlay"></div>
          <div className="carousel-text">
            <p>{t("banner.header")}</p>
            <h2>{t("banner.title")}</h2>
            <button onClick={() => { navigate('/ContactUs') }} className="contactBtn">
              {t("contact_us")}
            </button>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img1} alt="Slide 2" className="carousel-image" />
          <div className="overlay"></div>
          <div className="carousel-text">
            <p>{t("banner.header")}</p>
            <h2>{t("banner.title")}</h2>
          </div>
        </div>
      </Carousel>

      {/* Language switch button and dropdown with animation */}
      <div
        className="language-switch-container"
        style={{
          position: "absolute",
          // bottom: "267px",
          top: "271px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleDropdown}
          className="language-switch-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "black"

          }}
        >
          <img
            src={flags[language].flag}
            alt="flag"
            style={{ width: "100%", height: "80%", borderRadius: "50%" }}
          />
        </button>

        {/* Animated Dropdown Menu */}
        <ul
          className={`language-dropdown ${isDropdownOpen ? 'open' : ''}`}
          style={{
            listStyle: "none",
            // padding: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            marginTop: "10px",
            position: "absolute",
            right: "0",
            maxHeight: isDropdownOpen ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
            display: isDropdownOpen ? "block" : "none", // Show only when open

          }}
        >
          {Object.entries(flags).map(([langCode, { flag, name }]) => (
            <li
              key={langCode}
              onClick={() => changeLanguage(langCode)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "5px",
                marginBottom: "5px",
                color: "black"
              }}
            >
              <img
                src={flag}
                alt={`${langCode} flag`}
                style={{ width: "25px", marginRight: "10px" }}
              />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;

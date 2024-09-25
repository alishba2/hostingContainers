import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img1 from "../../assets/containerday.jpeg";
import img2 from "../../assets/mingingcontainer.jpg";
import img3 from "../../assets/containerImgday12.jpeg"
import axios from "axios";

const Banner = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

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
              <span>Loading exchange rates...</span>
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
            <p>Start your mining Journey with us </p>

            <h2>HOSTING CONTAINERS</h2>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img1} alt="Slide 2" className="carousel-image" />
          <div className="overlay"></div>
          <div className="carousel-text">
            {/* <h2>Heading 2</h2> */}
            <p>We advise you on your investment so that you can start mining in a stable and safe way.</p>
          </div>
        </div>
        {/* <div>
          <img src={img2} alt="Slide 2" className="carousel-image" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Banner;

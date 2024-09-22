import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchAllCryptoRates = async () => {
      try {
        // Fetching top 250 cryptocurrencies
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
    // Optional: Refresh the rates every minute
    const interval = setInterval(fetchAllCryptoRates, 60000);
    return () => clearInterval(interval);
  }, []);

  // Function to download exchange rates as a file
  const downloadRates = () => {
    const ratesString = exchangeRates
      .map((rate) => `${rate.name}: $${rate.price}`)
      .join(" | ");
    const fileData = new Blob([ratesString], { type: "text/plain" });
    const tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(fileData);
    tempLink.download = "all_exchange_rates.txt";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <>
      <div className="banner-main">
        <div className="marquee-main">
          <div className="marquee-main">
            <marquee
              width="100%"
              direction="right"
              height="40px" // Adjust the height as needed
              scrollamount="5" // Adjust this value for speed (higher = faster)
              behavior="scroll"
            >
              {exchangeRates.length ? (
                exchangeRates.map((rate, index) => (
                  <span key={index} className="marquee-item">
                    <strong style={{ color: "#a890d3" }}>{rate.name}</strong>: <span>${rate.price}</span>  &nbsp; {/* Add spacing between items */}
                  </span>
                ))
              ) : (
                <span>Loading...</span>
              )}
            </marquee>
          </div>

        </div>
        <div className="banner-inner">
          <div className="banner-content h-center flex-column">
            {/* <p className="paraSmall">
              The Best Crypto Mining Service Providers in GCC
            </p> */}
            <h4>{t('banner.header')}</h4>
            <h1>{t('banner.title')}</h1>
            <p>{t('banner.description')}</p>

            {/* <button className="btn-primary mt-2">{t('banner.button')}</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

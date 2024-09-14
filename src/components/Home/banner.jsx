import React, { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  const [exchangeRates, setExchangeRates] = useState("Loading...");

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
        console.log(coins, "coinsssssssss");


        const formattedRates = coins
          .map((coin) => `${coin.symbol}: $${coin.current_price.toFixed(2)}`)
          .join(" | ");
        setExchangeRates(formattedRates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setExchangeRates("Error fetching rates");
      }
    };

    fetchAllCryptoRates();
    // Optional: Refresh the rates every minute
    const interval = setInterval(fetchAllCryptoRates, 60000);
    return () => clearInterval(interval);
  }, []);

  // Function to download exchange rates as a file
  const downloadRates = () => {
    const fileData = new Blob([exchangeRates], { type: "text/plain" });
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
          <marquee width="100%" direction="right" height="100px">
            {exchangeRates}
          </marquee>
        </div>
        <div className="banner-inner">
          <div className="banner-content h-center flex-column">
            <p className="paraSmall">
              The Best Crypto Mining Service Providers in GCC
            </p>
            <h4>Start your mining Journey with Crypto Miners</h4>
            <h1 className="">HOSTING CONTAINERS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              nobis voluptas sapiente. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet nobis voluptas sapiente.
            </p>
            <button className="btn-primary mt-2">Start Now</button>
            <button className="btn-secondary mt-2" onClick={downloadRates}>
              Download All Exchange Rates
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/pages/Home/_hardware.scss";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Hardware = () => {
    const [miners, setMiners] = useState([]);
    const [coins, setCoins] = useState([]);
    const [conversionRate, setConversionRate] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const ELECTRICITY_COST_PER_KWH = -7; // Update according to location (e.g., Dubai)
    const { t } = useTranslation();

    // Fetch miners and coin data
    useEffect(() => {
        const fetchMiners = async () => {
            try {
                const response = await axios.get('https://api.minerstat.com/v2/hardware?brand=antminer');
                setMiners(response.data);
            } catch (error) {
                console.error('Error fetching miners data:', error);
            }
        };

        const fetchCoinData = async () => {
            try {
                const response = await axios.get('https://api.minerstat.com/v2/coins');
                setCoins(response.data);
            } catch (error) {
                console.error('Error fetching coins data:', error);
            }
        };

        const fetchConversionRate = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                const rate = response.data.rates.EUR; // Extract EUR conversion rate
                setConversionRate(rate);
            } catch (error) {
                console.error('Error fetching conversion rate:', error);
            }
        };

        fetchMiners();
        fetchCoinData();
        fetchConversionRate();
    }, []);

    // const ELECTRICITY_COST_PER_KWH = 0.1; // Example electricity cost per kWh

    const calculateProfitability = (miner) => {
        if (!miner.algorithms || Object.keys(miner.algorithms).length === 0) {
            console.warn('No algorithms found for the miner.');
            return 0;
        }

        // Get the first algorithm
        const algorithmName = Object.keys(miner.algorithms)[0];
        const { speed = 0, power = 0 } = miner.algorithms[algorithmName] || {};

        // Find corresponding coin based on algorithm
        const coinData = coins.find(coin => coin.algorithm === algorithmName);
        if (!coinData) {
            console.warn(`No coin data found for algorithm: ${algorithmName}`);
            return 0; // No corresponding coin found
        }

        // Convert speed to MH/s (assuming speed is in H/s)
        const minerHashrateMH = speed / 1_000_000; // Convert from H/s to MH/s

        // Convert reward and price to numbers
        const rewardPerMH = parseFloat(coinData.reward); // Reward per MH/s
        const coinPriceUSD = parseFloat(coinData.price); // Coin price in USD

        if (isNaN(rewardPerMH) || isNaN(coinPriceUSD)) {
            console.warn(`Invalid reward or price data for coin: ${coinData.name}`);
            return 0;
        }

        // Calculate daily revenue in USD
        const revenuePerDay = minerHashrateMH * rewardPerMH * coinPriceUSD * 24; // 24 hours/day

        // Calculate power cost in USD
        const powerUsageKW = power / 1000; // Convert watts to kilowatts
        const powerCostPerDay = powerUsageKW * 24 * ELECTRICITY_COST_PER_KWH; // 24 hours/day

        // Calculate daily profit (revenue - power cost)
        const profitPerDayUSD = revenuePerDay - powerCostPerDay;

        return profitPerDayUSD;
    };




    // Calculate the current data slice
    const currentData = miners.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: "relative" }}>
            <div className="hardware-table">
                <h2>{t('DailyStats')}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='d-none-mbl'>Algorithm</th>
                            <th className='d-none-mbl'>Hash Rate (H/s)</th>
                            <th className='d-none-mbl'>Power (W)</th>
                            <th>Profitability (USD / day)</th>
                            <th className='d-none-mbl'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((miner) => (
                            <tr key={miner.id}>
                                <td>{miner.name || 'N/A'}</td>
                                <td className='d-none-mbl'>{Object.keys(miner.algorithms)[0] || 'N/A'}</td>
                                <td className='d-none-mbl'>{miner.algorithms ? `${Object.values(miner.algorithms)[0]?.speed / 1000000} MH/s` : 'N/A'}</td>
                                <td className='d-none-mbl'>{miner.algorithms ? `${Object.values(miner.algorithms)[0]?.power} W` : 'N/A'}</td>
                                <td>${calculateProfitability(miner)?.toFixed(0) || 'N/A'}</td>
                                <td className='d-none-mbl'>{miner.type || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="arrow-button"
                    >
                        <FaArrowLeft />
                    </button>
                    <span>Page {currentPage}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(miners.length / pageSize)))}
                        disabled={currentPage === Math.ceil(miners.length / pageSize)}
                        className="arrow-button"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div>
                <div className='img'>
                    <div className='responsiveness'>
                        <h2 style={{ textAlign: 'center' }}>{t('profitablity')}</h2>
                        <iframe style={{ margin: "0 auto", display: "flex" }} className='mx-auto' src="https://widget.nicehash.com/profcalc" width="400" height="420" scrolling="no" id="nhiframe"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hardware;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/pages/Home/_hardware.scss";

const Hardware = () => {
    const [miners, setMiners] = useState([]);
    const [coins, setCoins] = useState([]);
    const [conversionRate, setConversionRate] = useState(1); // Default to 1 if no rate is fetched
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Number of items to show per page

    // Fetch miners, coin data, and conversion rate
    useEffect(() => {
        const fetchMiners = async () => {
            try {
                const response = await axios.get('https://api.minerstat.com/v2/hardware');
                setMiners(response.data);
            } catch (error) {
                console.error('Error fetching miners data:', error);
            }
        };

        const fetchCoinData = async () => {
            try {
                const response = await axios.get('https://api.minerstat.com/v2/coins');
                setCoins(response.data); // Store the coin data in state
            } catch (error) {
                console.error('Error fetching coins data:', error);
            }
        };

        const fetchConversionRate = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                const rate = response.data.rates.EUR; // Extract EUR conversion rate from the response
                setConversionRate(rate);
            } catch (error) {
                console.error('Error fetching conversion rate:', error);
            }
        };

        fetchMiners();
        fetchCoinData();
        fetchConversionRate(); // Fetch conversion rate when component mounts
    }, []);

    // Function to calculate profitability
    const calculateProfitability = (miner) => {
        if (!miner.algorithms || Object.keys(miner.algorithms).length === 0) {
            return 0;
        }

        const algorithmName = Object.keys(miner.algorithms)[0];
        const { speed = 0, power = 0 } = miner.algorithms[algorithmName] || {};

        // Find corresponding coin based on algorithm
        const coinData = coins.find(coin => coin.algorithm === algorithmName);

        if (!coinData) {
            return 0; // If no matching coin data is found, return 0 for profitability
        }

        console.log(coinData, "coin Data");
        // Extract real-world data from coin API
        const {
            network_hashrate = 1,  // Avoid division by zero
            reward = 0,            // Block reward
            price = 0,             // Coin price in USD (real-time price)
        } = coinData;


        console.log(network_hashrate, " network_hashrate");


        // Electricity cost
        const electricityCostPerKWh = 0.1;

        // Calculate revenue: (Miner Hashrate / Network Hashrate) * Block Reward * Coin Price
        const minerHashrateTH = speed / 1e12; // Convert speed to TH/s
        const networkHashrateTH = network_hashrate / 1e12; // Convert network hashrate to TH/s

        console.log(minerHashrateTH, "minerHashrateTH");

        // Revenue in USD per day
        const revenuePerDay = (minerHashrateTH / networkHashrateTH) * reward * price;
        const revenuePerHour = revenuePerDay / 24; // Revenue per hour

        console.log(revenuePerHour, "revenure per hour");
        // Power consumption in kW and its cost per hour
        const powerCostPerHour = (power / 1000) * electricityCostPerKWh;

        // Profit per hour in USD
        const profitPerHourUSD = revenuePerHour - powerCostPerHour;

        // Convert profit from USD to EUR using the conversion rate
        const profitPerHourEUR = profitPerHourUSD * conversionRate;

        return profitPerHourEUR;
    };

    // Calculate the current data slice
    const currentData = miners.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div className="hardware-table">
            <h2>Miner Profitability in €</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Algorithm</th>
                        <th>Hash Rate (H/s)</th>
                        <th>Power (W)</th>
                        <th>Profitability (€ / h)</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((miner) => (
                        <tr key={miner.id}>
                            <td>{miner.name || 'N/A'}</td>
                            <td>{Object.keys(miner.algorithms)[0] || 'N/A'}</td>
                            <td>{miner.algorithms ? Object.values(miner.algorithms)[0]?.speed : 'N/A'}</td>
                            <td>{miner.algorithms ? Object.values(miner.algorithms)[0]?.power : 'N/A'}</td>
                            <td>{calculateProfitability(miner).toFixed(4) || 'N/A'}</td>
                            <td>{miner.type || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(miners.length / pageSize)))}
                    disabled={currentPage === Math.ceil(miners.length / pageSize)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Hardware;

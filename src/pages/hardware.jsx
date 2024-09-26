import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/pages/Home/_hardware.scss";

const API_KEY = '07b8f8c3-1744-44f3-84ea-3f3812c98b88'; // Replace with your API key
const API_SECRET = '13474ae0-0818-4a29-a86c-5cbf92d64e8d9be8b486-4a46-4e54-be8f-b0bc4f6eb94a'; // Replace with your API secret
const ORGANIZATION_ID = '3a9993e2-6e02-43d1-9525-ee0fdfb366e5'; // Replace with your organization ID

const Hardware = () => {
    const [miners, setMiners] = useState([]);
    const [coins, setCoins] = useState([]);
    const [conversionRate, setConversionRate] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const ELECTRICITY_COST_PER_KWH = 0.07; // Update according to location (e.g., Dubai)

    // Function to create a signed request for NiceHash API
    const createSignature = (method, path, time, nonce) => {
        const input = [API_KEY, time, nonce, '', ORGANIZATION_ID, '', method.toUpperCase(), path, ''].join('\x00');
        return crypto.createHmac('sha256', API_SECRET).update(input).digest('hex');
    };

    // Fetch miners and coin data
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

        const fetchNiceHashMiners = async () => {
            try {
                const serverTimeResponse = await axios.get('https://api2.nicehash.com/api/v2/time');
                const currentTime = serverTimeResponse.data.timestamp;
                const nonce = crypto.randomUUID();
                const method = 'GET';
                const path = '/main/api/v2/mining/rigs'; // Endpoint for NiceHash miners
                const signature = createSignature(method, path, currentTime, nonce);

                const response = await axios.get(`https://api2.nicehash.com${path}`, {
             
                    headers: {
                        'X-Time': currentTime,
                        'X-Nonce': nonce,
                        'X-Organization-Id': ORGANIZATION_ID,
                        'X-Auth': `${API_KEY}:${signature}`
                    }
                });

                // Assuming the response data structure matches what you need
                setMiners((prevMiners) => [...prevMiners, ...response.data]); // Merge with existing miners
            } catch (error) {
                console.error('Error fetching NiceHash miners:', error);
            }
        };

        fetchMiners();
        fetchCoinData();
        fetchConversionRate();
        fetchNiceHashMiners(); // Fetch NiceHash miners when component mounts
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
            return 0;
        }

        // Extract real-world data from coin API
        const {
            network_hashrate = 1,
            reward = 0,
            price = 0,
        } = coinData;

        // Calculate revenue
        const minerHashrateTH = speed / 1e12;
        const networkHashrateTH = network_hashrate / 1e12;

        const revenuePerDay = (minerHashrateTH / networkHashrateTH) * reward * price;
        const revenuePerHour = revenuePerDay / 24;

        const powerCostPerHour = (power / 1000) * ELECTRICITY_COST_PER_KWH;
        const profitPerHourUSD = revenuePerHour - powerCostPerHour;
        const profitPerHourEUR = profitPerHourUSD * conversionRate;

        return profitPerHourEUR;
    };

    // Calculate the current data slice
    const currentData = miners.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
       
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
             <div className="hardware-table">
            <h2>Miner Profitability in €</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Algorithm</th>
                        <th>Hash Rate (H/s)</th>
                        <th>Power (W)</th>
                        <th>Profitability (€ / day)</th>
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

            <h3 style={{textAlign:'center'}}>Profitability Calculator</h3>
        <iframe src="https://widget.nicehash.com/profcalc" width="400" height="420" scrolling="no" id="nhiframe"></iframe>

        </div>
    );
};

export default Hardware;

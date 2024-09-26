const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/api', createProxyMiddleware({
    target: 'https://api.hashrate.no', // Your API base URL
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, // Remove "/api" prefix when forwarding the request
}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

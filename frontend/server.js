const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Backend URL (change if needed)
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/health`);
        res.send(`
            <h1>Express Frontend Running </h1>
            <p>Backend Response:</p>
            <pre>${JSON.stringify(response.data, null, 2)}</pre>
        `);
    } catch (error) {
        res.send(`
            <h1>Express Frontend Running </h1>
            <p>Backend not reachable </p>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
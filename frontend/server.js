const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/health`);
        res.send(`
            <h1>Express Frontend Running</h1>
            <h3>Backend Response:</h3>
            <pre>${JSON.stringify(response.data)}</pre>
        `);
    } catch (error) {
        res.send(`
            <h1>Express Frontend Running</h1>
            <h3>Backend not reachable</h3>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
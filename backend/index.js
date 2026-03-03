// Requiring dependencies:
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const bodyParser = require('body-parser');
const cors = require('cors')

// Initialize values:
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// cors and body parser:
app.use(cors());
app.use(bodyParser.json());

// All holdings:
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

// All positions:
app.get('/allPositions', async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

// Starting server:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
    mongoose.connect(uri);
    console.log("Connected to DB");
});
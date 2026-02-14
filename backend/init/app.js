// Requiring dependencies:
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const mongoose = require('mongoose');
const {holdingsData, positionsData} = require('./data.js');
const Holdings = require('../model/HoldingsModel.js');
const Positions = require('../model/PositionsModel.js');

// mongo uri: 
const uri = process.env.MONGO_URL;

// Mongo connection:
async function main() {
    mongoose.connect(uri);
}

main()
.then(() => {
    console.log("Connection successful...");
})
.catch((err) => {
    console.log(err);
});

// Inserting data:
const insertHoldings = async () => {
    await Holdings.deleteMany({});
    await Holdings.insertMany(holdingsData);
    console.log("Holdings data inserted successfully...");
};

const insertPositions = async () => {
    await Positions.deleteMany({});
    await Positions.insertMany(positionsData);
    console.log("Positions data inserted successfully...");
}

insertHoldings();
insertPositions();

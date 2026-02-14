// Requireing dependencies:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Holdings Schema:
const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
});

// Exporting schemas:
module.exports = {HoldingsSchema};
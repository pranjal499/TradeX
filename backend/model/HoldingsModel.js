// Requiring dependencies:
const mongoose = require("mongoose");
const {HoldingsSchema} = require('../schemas/HoldingsSchema.js');

// Holdings model:
// const HoldingsModel = new model('holding', HoldingsSchema);

// Exporting model:
const Holdings = mongoose.model('Holdings', HoldingsSchema);
module.exports = Holdings;

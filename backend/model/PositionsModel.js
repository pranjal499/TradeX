// Requiring dependencies:
const mongoose = require('mongoose');

const {PositionsSchema} = require('../schemas/PositionsSchema.js');

// Positions Model:
const Positions = mongoose.model('Positions', PositionsSchema);
module.exports = Positions;

// Exporting model:
// module.exports = {PositionsModel};
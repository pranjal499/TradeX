// Requiring dependencies:
const { Schema } = require('mongoose');

// Orders Schema:
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
});

// Export schema:
module.exports = { OrdersSchema };
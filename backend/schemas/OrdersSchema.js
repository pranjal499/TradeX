// Requiring dependencies:
const { Schema } = require('mongoose');
const mongoose = require('mongoose');

// Orders Schema:
const OrdersSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    name: String,
    qty: Number,
    price: Number,
    mode: String
});

// Indexing:
OrdersSchema.index({user: 1});

// Export schema:
module.exports = { OrdersSchema };
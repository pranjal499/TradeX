// Requiring dependencies:
const { model } = require('mongoose');
const { OrdersSchema } = require('../schemas/OrdersSchema.js');

// Orders Model:
const OrdersModel = new model('order', OrdersSchema);

// Export model:
module.exports = { OrdersModel };

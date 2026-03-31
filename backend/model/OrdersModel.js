// requiring dependencies:
const mongoose = require('mongoose');
const {OrdersSchema} = require('../schemas/OrdersSchema');

// export model:
const Orders = mongoose.model('Orders', OrdersSchema);
module.exports = Orders;
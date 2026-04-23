// Requiring dependencies:
const mongoose = require("mongoose");
const {UserSchema} = require('../schemas/UserSchema.js');

// Exporting model:
const User = mongoose.model('User', UserSchema);
module.exports = User;
// Requiring dependencies:
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Initialize values:
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

// Starting server:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
    mongoose.connect(uri);
    console.log("Connected to DB");
});
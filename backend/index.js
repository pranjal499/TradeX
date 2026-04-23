// Requiring dependencies:
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const bodyParser = require('body-parser');
const cors = require('cors');
const OrdersModel = require('./model/OrdersModel');
const User = require("./model/UserModel");
const { createSecretToken } = require("./util/SecretToken");
const bcrypt = require("bcryptjs");
const cookieParser = require('cookie-parser');

// Initialize values:
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// cors and body parser:
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// All holdings:
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

// All positions:
app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

// Saving Order:
app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    await newOrder.save();
    res.send('Order saved');
});

// Signup rout:
app.post('/signup', async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    }
    catch (error) {
        console.log(error);
    }
});

// Login rout: 
app.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect email' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
    } catch (error) {
        console.error(error);
    }
});

// Starting server:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
    mongoose.connect(uri);
    console.log("Connected to DB");
});
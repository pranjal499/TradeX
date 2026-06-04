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
const jwt = require("jsonwebtoken");

mongoose.set('bufferCommands', false);

// Initialize values:
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const normalizeOrigin = (origin) => origin?.replace(/\/+$/, '');
const allowedOrigins = [
    normalizeOrigin(process.env.FRONTEND_URL),
    normalizeOrigin(process.env.DASHBOARD_URL)
].filter(Boolean);
const cookieOptions = {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' || process.env.VERCEL ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL),
};
let dbConnectionPromise = null;

const connectToDatabase = () => {
    if (!uri) {
        return Promise.reject(new Error('MONGO_URL is not configured'));
    }

    if (mongoose.connection.readyState === 1) {
        return Promise.resolve(mongoose.connection);
    }

    if (!dbConnectionPromise) {
        dbConnectionPromise = mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 10000,
            connectTimeoutMS: 5000,
        }).catch((error) => {
            dbConnectionPromise = null;
            throw error;
        });
    }

    return dbConnectionPromise;
};

// cors and body parser:
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(normalizeOrigin(origin))) {
            return callback(null, true);
        }

        return callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    credentials: true
}));
// app.use(bodyParser.json());
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
    const token = req.cookies.token;

    const decode = jwt.verify(
        token,
        process.env.TOKEN_KEY
    );

    let newOrder = new OrdersModel({
        user: decode.id,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    await newOrder.save();
    res.send('Order saved');
});

// All orders of current user:
app.get('/orders', async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res
            .status(401)
            .json({
                message: 'Unautherized'
            })
    }

    try {
        const decode = jwt.verify(
            token,
            process.env.TOKEN_KEY
        );

        let allOrders = await OrdersModel.find({
            user: decode.id
        });
        res
            .status(201)
            .json(allOrders);
    }
    catch (err) {
        res.status(401).json({
            message: 'Unautherized'
        });
    }

});

// Delete order:
app.delete('/orders/:id', async (req, res) => {
    let orderId = req.params.id;
    await OrdersModel.findByIdAndDelete(orderId);
});

// Signup rout:
app.post('/signup', async (req, res) => {
    try {
        await connectToDatabase();

        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        // if user exist:
        if (existingUser) {
            return res
                .status(409)
                .json({ message: "User already exists" });
        }

        // else create a new user:
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, cookieOptions);
        return res.status(201).json({
            message: "User logged in successfully",
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch (error) {
        console.error('Signup route failed:', error);
        return res.status(500).json({
            message: 'Unable to signup. Please try again.',
            success: false
        });
    }
});

// Login rout: 
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(401)
                .json({ message: 'All fields are required' })
        }

        await connectToDatabase();

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(401)
                .json({ message: 'User not found' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res
                .status(401)
                .json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, cookieOptions);
        return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login route failed:', error);
        return res.status(500).json({
            message: 'Unable to login. Please try again.',
            success: false
        });
    }
});

// token verify rout:
app.get('/verify', async (req, res) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                authenticated: false,
                message: 'No auth token found'
            });
        }

        if (!process.env.TOKEN_KEY) {
            return res.status(500).json({
                authenticated: false,
                message: 'Token configuration is missing'
            });
        }

        const decode = jwt.verify(token, process.env.TOKEN_KEY);

        await connectToDatabase();

        const user = await User.findById(decode.id)
            .select('_id username email')
            .maxTimeMS(5000)
            .lean();

        if (!user) {
            return res.status(404).json({
                authenticated: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            authenticated: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch (err) {
        console.error('Verify route failed:', err);

        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(401).json({
                authenticated: false,
                message: 'Invalid or expired token'
            });
        }

        return res.status(500).json({
            authenticated: false,
            message: 'Unable to verify user'
        });
    }
});

// logout rout:
app.get('/logout', (req, res) => {
    res.clearCookie('token');

    res
        .status(200)
        .json({
            success: true,
            message: 'Logged out succeffully.'
        });
});

// Starting server:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
    connectToDatabase()
        .then(() => console.log("Connected to DB"))
        .catch((error) => console.error("Failed to connect to DB:", error));
});

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const userRoute = require('./src/routes/userRoute')
dotenv.config();

// Set default environment to development if not explicitly set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT
const app = express();

// enable cors for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoute)

module.exports = app;


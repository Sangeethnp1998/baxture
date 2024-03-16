const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const userRoute = require('./src/routes/userRoute')

dotenv.config();
const PORT = process.env.PORT
const app = express();

// enable cors for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoute)


app.listen(PORT,()=>{
    console.log("Connected to port - ",PORT)
})
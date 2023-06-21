const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const AstrologyRoute = require('./Routers/AstrologyRoute');

//configure env
dotenv.config();

connectDB();

// rest object
const app = express();

//middelware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/v1/astrology', AstrologyRoute);

//REST api
app.get('/', (req,res)=>{
    res.send("<h1>This is for a testing</h1>");
});

const port = process.env.Backend_PORT||6001
app.listen(port,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} Mode Port ${port}`);
})
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async ()=>{
    try {
        const conn =await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Connected To Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Connecting Database ${error}`.bgRed.white);
    }
}

module.exports = connectDB;
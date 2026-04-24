require("dotenv").config();

const mysql = require("mysql2/promise");
const Razorpay = require("razorpay");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = {
  db,
  razorpay,
  keySecret: process.env.RAZORPAY_KEY_SECRET,
};
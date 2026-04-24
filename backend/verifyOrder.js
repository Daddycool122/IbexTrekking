const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const { db, keySecret: KEY_SECRET } = require("./config");

router.post("/verify-order", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      contact,
      email,
      name_of_trek,
      date_of_departure,
      number_of_people,
      total_amount,
      amount_paid,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.json({ success: false, error: "Invalid signature" });
    }

    await db.query(
      `INSERT INTO trek_bookings 
      (booking_id, name, contact, email, name_of_trek, date_of_departure, number_of_people, total_amount, paid, invoice)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        razorpay_payment_id,
        name,
        contact,
        email,
        name_of_trek,
        date_of_departure,
        number_of_people,
        total_amount,
        amount_paid,
        razorpay_payment_id,
      ],
    );

    res.json({
      success: true,
      message: "Payment verified & stored",
    });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

module.exports = router;

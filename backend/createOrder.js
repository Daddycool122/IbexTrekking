const express = require("express");
const router = express.Router();
const { razorpay } = require("./config");

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      receipt: "rcpt_" + Date.now(),
      amount: amount,
      currency: "INR",
    });

    res.json({ order_id: order.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

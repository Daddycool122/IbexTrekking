const express = require("express");
const router = express.Router();
const { db } = require("./config");

router.post("/submit-review", async (req, res) => {
  try {
    const { name, contact, adventureType, review } = req.body;

    if (!name || !contact || !adventureType || !review) {
      return res.json({ server: true, res: false, error: "Missing fields" });
    }

    await db.query(
      "INSERT INTO reviews (name, contact, adventure_type, review) VALUES (?, ?, ?, ?)",
      [name, contact, adventureType, review],
    );

    res.json({ server: true, res: true });
  } catch (err) {
    res.json({ server: true, res: false, error: err.message });
  }
});

module.exports = router;

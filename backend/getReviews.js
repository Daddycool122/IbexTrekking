const express = require("express");
const router = express.Router();
const { db } = require("./config");

router.get("/reviews", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, contact, adventure_type, review, created_at, updated_at FROM reviews ORDER BY id DESC",
    );

    res.json({
      server: true,
      res: true,
      supply: rows,
    });
  } catch (err) {
    res.json({ server: false, res: false, error: err.message });
  }
});

module.exports = router;

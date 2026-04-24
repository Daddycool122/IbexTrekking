const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000,http://localhost:4173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

app.use(require("./createOrder"));
app.use(require("./getReviews"));
app.use(require("./submitReview"));
app.use(require("./verifyOrder"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

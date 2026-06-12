const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Transporter is created once at startup and reused across all requests.
// Connection pooling keeps SMTP connections alive, avoiding the overhead
// and timeout risk of establishing a new connection on every request.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  pool: true,   // Reuse connections instead of creating a new one per email
  maxConnections: 5,
  maxMessages: Infinity,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000,  // 10 s to establish the TCP connection
  greetingTimeout: 10000,    // 10 s to receive the SMTP greeting
  socketTimeout: 15000,      // 15 s of inactivity before the socket is closed
});

router.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, message, destination, date } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone number are required" });
  }

  // Prevent the request from hanging if the SMTP server is unresponsive.
  res.setTimeout(20000, () => {
    res.status(503).json({ error: "Request timed out, please try again" });
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ibexiceaxe@gmail.com",
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Destination/Trek:</strong> ${destination || "Not provided"}</p>
        <p><strong>Preferred Date:</strong> ${date || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

module.exports = router;

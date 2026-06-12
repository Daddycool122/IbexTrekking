const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, message, destination, date } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone number are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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

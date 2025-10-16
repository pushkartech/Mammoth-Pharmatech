// server/index.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// If your React dev server runs on a different port, enable CORS (otherwise use proxy).
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*' // for production, set exact origin(s)
}));

// create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// verify transporter at startup
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP configuration error:", err.message || err);
  } else {
    console.log("SMTP server is ready to take messages");
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, area, message } = req.body;

    if (!name || !email || !area || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const htmlBody = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
      <p><strong>Area of Interest:</strong> ${escapeHtml(area)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p>Sent from Mammoth website contact form.</p>
    `;

    const mailOptions = {
      from: `"${process.env.FROM_LABEL || "Website Contact"}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Website Contact: ${name} — ${area}`,
      replyTo: email,
      html: htmlBody
    };

    await transporter.sendMail(mailOptions);

    return res.json({ message: "Message sent" });
  } catch (err) {
    console.error("Error sending contact mail:", err);
    return res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});

// simple helper to prevent naive injection of tags — not a full sanitizer but okay for contact forms
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

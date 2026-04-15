const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// ✅ LOG MESSAGE TO CSV
const csvFilePath = path.join(__dirname, "messages.csv");

const logMessageToCSV = (name, email, message) => {
  const timestamp = new Date().toISOString();
  const csvRow = `"${timestamp}","${name}","${email}","${message.replace(/"/g, '""')}"\n`;

  // Create CSV with headers if it doesn't exist
  if (!fs.existsSync(csvFilePath)) {
    const headers = `"Timestamp","Name","Email","Message"\n`;
    fs.writeFileSync(csvFilePath, headers);
  }

  // Append the message to CSV
  fs.appendFileSync(csvFilePath, csvRow);
};

// ✅ SEND EMAIL ROUTE
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received:", req.body); // DEBUG

    // ✅ Log message to CSV file
    logMessageToCSV(name, email, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>📩 New Website Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ✅ GET MESSAGES CSV ROUTE
app.get("/messages-csv", (req, res) => {
  if (fs.existsSync(csvFilePath)) {
    res.download(csvFilePath, "messages.csv");
  } else {
    res.status(404).json({ error: "No messages logged yet" });
  }
});

// ✅ START SERVER
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
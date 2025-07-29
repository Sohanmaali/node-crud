const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (to, subject, htmlContent) => {
  try {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use host/port for SMTP services
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2. Mail options
    const mailOptions = {
      from: `"Your App Name" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error while sending email:', error.message);
  }
};

module.exports = sendMail;

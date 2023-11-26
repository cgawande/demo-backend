const nodemailer = require("nodemailer");
require("dotenv").config();

const sender = process.env.EMAIL;
const password = process.env.PASS;
const sendEmail = (email, token,id) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: password,
    },
  });

  var mailOptions = {
    from: sender,
    to: email,
    subject: "Password reset",
    html: `
        <p> You are requested for password reset</p>
        <h3>click to this <a href=http://localhost:3000/${id}/${token} >link </a>to reset password</h3>
        <p> This is only valid for 20 minutes`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent succesfully" + info.response);
    }
  });
};

module.exports = sendEmail

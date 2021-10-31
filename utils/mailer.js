const nodemailer = require('nodemailer');

const mailFunc = (from, to, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "apikey",
      pass: process.env.DB_API || process.env.JAWSDB_API,
    },
  });
    console.log(from)
    console.log(to)
    console.log(message)

    const mailOptions = {
        from:"yummisocks@outlook.com",
        to: to,
        subject: `You have been invited!!! by ${from}`,
        text: message
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = mailFunc
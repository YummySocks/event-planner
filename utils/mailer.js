const nodemailer = require('nodemailer');
// function to be called with api route
const mailFunc = (from, to, message) => {
  // creates the transporter object with necessary data to send out emails
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "apikey",
      pass: process.env.DB_API || process.env.JAWSDB_API,
    },
  });
  // data that is automatically passed through combined with data that the user passes through to send the email
    const mailOptions = {
        from:"yummisocks@outlook.com",
        to: to,
        subject: `You have been invited!!! by ${from}`,
        text: `${message} click the link!! https://group-event-planner.herokuapp.com/login`
      };
      // function for sending the email
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = mailFunc
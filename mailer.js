const nodemailer = require ("nodemailer")
const newInvite = require('./public/js/new-invite')


async function main() {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

console.log(mailOptions)

    let info = await transporter.sendMail({mailOptions, function (error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    }
          })


        console.log("Message sent: %s", info,messageId)

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  


}

main().catch(console.error);


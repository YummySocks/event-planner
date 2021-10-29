const nodemailer = require ("nodemailer")

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

    var mailOptions = {
        from: ,
        to: ,
        subject: ,
        text: ,
    }

    let info = await transporter.sendMail({
        from: '"Event Planners" <foo@example.com>',
        to: "bar@example.com, baz@example.com",
        subject: "Hello!",
        text: "Hello world?",
        html: "<b> Hello World</b>",
          })


        console.log("Message sent: %s", info,messageId)

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  


}

main().catch(console.error);
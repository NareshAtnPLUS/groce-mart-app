const nodemailer = require('nodemailer'),
    authenticator = require('otplib').authenticator,
    totp = require('otplib').totp,
    secret = authenticator.generateSecret()

module.exports.sendOtpToEmail = async (email)=>{
    console.log('email',email)
    const token = totp.generate(secret);
            // console.log(token)
    const isValid = totp.check(token, secret);
    // console.log(isValid)
    const isValidVerify = totp.verify({ token, secret });
    // console.log(isValidVerify)
    // console.log(user.email,user.userName);            
    const mailContent = `
        <p>You have a requested a updation of Password</p>
        <h3>OTP: ${token}</h3>
        <p> OTP is valid only for short time</p>
        `;
    await sendEmailToUser(email,mailContent,()=>{
        token
    })
    return token
}
async function sendEmailToUser(email,mailContent,cb) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'testnplus21@gmail.com', // generated ethereal user
        pass: 'nplus12.3' // generated ethereal password
      },
      tls:{
          rejectUnauthorized:false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer contact" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: "OTP for password Updation ✔", // Subject line
      text: "OTP for Grocemart", // plain text body
      html: mailContent // html body
    });
  
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    cb();
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
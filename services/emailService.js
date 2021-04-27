const nodemailer = require('nodemailer');

async function sendMail({from ,to ,subject, text, html}){
   
let transpoter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT, 
    secure:false,
    auth:{
        user:process.env.USER_MAIL,
        pass:process.env.USER_PASS
    }
});
let info =await transpoter.sendMail({
    from :`inShare <${from}>`,
    to,
    subject,
    text,
    html
});
console.log(info);
}

module.exports = sendMail;
const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = function({toUser, code, hash}) {
    return new Promise((res, rej) => {
        var message = {};

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        if(code) {
            message = {
                from: process.env.GOOGLE_USER,
                to: toUser,
                subject: 'Reset Password',
                html: `
                    <h1>Hello,</h1>
                    <p>You recently requested to reset your password for your account. If you did not request a password reset, please ignore this email or reply to let us know.</p>
                    <p>- Team Movie App</p>
                    <p> Your code is: ${code}</p>
                `
            }            
        }
        else if(hash) {
            message = {
                from: process.env.GOOGLE_USER,
                to: toUser,
                subject: 'Activate Account',
                html: `
                    <h3>Hello,</h3>
                    <p>Click the link below to activate your account</p>
                    <a>${hash}</a>
                `
            }
        }

        transporter.sendMail(message, function(err, info) {
            if(err)
                rej(err)
            else
                res(info)
        })
    })
}
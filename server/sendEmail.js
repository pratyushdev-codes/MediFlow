import expres from 'express'
import dotenv from 'dotenv';
import nodemailer from "nodemailer";

const nodemailer = require("nodemailer");
dotenv.config();
const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com', 
  port: 465, 
  secure: true, 
  auth: {
    user: AUTH_EMAIL, 
    pass: AUTH_PASSWORD, 
  },
  // tls: {
  //   ciphers: 'TLSv1.2', 

  // },
});

// async..await is not allowed in global scope, must use a wrapper
let mailDetails = {
    from: 'bytestreamauth@gmail.com',
    to: 'birole.pratyush@gmail.com',
    subject: 'Package Confirmation - Live Tracker',
    text: 'Greetings user, your package is confirmed you will be redirected to the tracking page. If the page is not redirected automatically you can track your packaged manually using the link given below: https://livemaptracking-2.onrender.com/'
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
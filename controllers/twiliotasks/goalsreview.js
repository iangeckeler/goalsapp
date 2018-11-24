const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const connectDb = require('../../database').db;
const appUrl = require('../../routes/constants');

const goalsReview = (to)=>{
    // argument recieved as a user
    let userPhone = '+1'+to;
    const message = "Rise and shine! Don't Forget to check out your goals this morning: "+appUrl
    sendTwilio(twilioPhone,userPhone,message)
}


module.exports = goalsReview;


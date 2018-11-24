const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const connectDb = require('../../database').db;
const appUrl = require('../../app');


const goalsReview = (to)=>{
    // argument recieved as a user
    let userPhone = '+1'+to;
    const message = "Rise and shine! Don't Forget to check out your goals this morning: "+appUrl
    sendTwilio(twilioPhone,userPhone,message)
}


module.exports = goalsReview;


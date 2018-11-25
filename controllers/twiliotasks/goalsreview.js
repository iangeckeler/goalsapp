const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const connectDb = require('../../database').db;
const appUrl = require('../../routes/constants').appUrl;
const phones = require('../../routes/constants').phones;


const goalsReview = (to,index)=>{
    return new Promise((resolve,reject)=>{
            //phonepool number
    let phoneIndex = index%phones.length; 
    // argument recieved as a user
    let userPhone = '+1'+to;
    const message = "Rise and shine! Don't Forget to check out your goals this morning: "+appUrl
    sendTwilio(phones[phoneIndex],userPhone,message).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
    })

}


module.exports = goalsReview;


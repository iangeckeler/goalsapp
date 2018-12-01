let serveoUrl = "https://tedium.serveo.net";
let herokuUrl = "https://thefocusapp.herokuapp.com";

//when developing locally -use this
// let Sid = require('../processvars').accountSid;
// let token = require('../processvars').authToken;
// let mongoUrl = require('../processvars').mongoUrl;

const appUrl = herokuUrl;

//heroku stuff
const aws = require('aws-sdk');
let s3 = new aws.S3({
  processSid: process.env.accountSid,
  processToken: process.env.authToken,
  mongoUrl: process.env.mongoUrl
});

//define process variables
let Sid = s3.config.processSid;
let token = s3.config.processToken;
let mongoUrl = s3.config.mongoUrl;

//const phones = ['+19705488971','+18606064203'];
//old phone '+14422640754 '
const phones = ['+19705332106']
const usersFull = true;
module.exports = {
    appUrl:appUrl,
    phones:phones,
    usersFull:usersFull,
    accountSid: Sid,
    authToken: token,
    mongoUrl:mongoUrl
}

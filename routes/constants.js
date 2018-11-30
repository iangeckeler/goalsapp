let serveoUrl = "https://tedium.serveo.net";
let herokuUrl = "https://thefocusapp.herokuapp.com";

// const accountSid = 'ACd3153105e04575233d9ed18e4899323a';
const accountSid2 = 'AC307f83011f4e85c3b80560128a3ada18'
// const authToken = 'ee64bf998e59b27fc07e9a7c1c4d4544';
const authToken2 = 'd51c1d548802903df37dd15b32f2d882'

const appUrl = herokuUrl;

//heroku stuff
const aws = require('aws-sdk');
let s3 = new aws.S3({
  processSid: process.env.accountSid,
  processToken: process.env.authToken
});
//const phones = ['+19705488971','+18606064203'];
//old phone '+14422640754 '
const phones = ['+19705332106']
const usersFull = true;
module.exports = {
    appUrl:appUrl,
    phones:phones,
    usersFull:usersFull,
    accountSid: accountSid2,
    authToken: authToken2

}


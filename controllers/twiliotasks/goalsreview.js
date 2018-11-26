const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const connectDb = require('../../database').db;
const appUrl = require('../../routes/constants').appUrl;
const phones = require('../../routes/constants').phones;
const findUser = require('../../scripts/finduser')

const goalsReview = (to,index)=>{
    return new Promise((resolve,reject)=>{
            //phonepool number
    let phoneIndex = index%phones.length; 
    // argument recieved as a user
    let userPhone = '+1'+to;
    
    //get user for their name
    findUser(to).then(arr=>{
        let name = arr[0].name;
        const message = "Rise and shine "+name+"! Get shit done today with thefocusapp! "+appUrl
        sendTwilio(phones[phoneIndex],userPhone,message).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
        })
    }).catch(err=>{
        reject(err)
    })


}


module.exports = goalsReview;


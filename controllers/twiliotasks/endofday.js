const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const stakeHolder = require('../../scripts/sendtwilio').stakeHolder
const endOfDayMsg = require('../../scripts/endofdaymessage');
const findGoal = require('../../scripts/findgoal')
const findUser = require('../../scripts/finduser')
const phones = require('../../routes/constants').phones;

//twilio error codes
//https://www.twilio.com/docs/iam/test-credentials#test-sms-messages

const endOfDay = (user,index)=>{
    //phonepool number
    let phoneIndex = index%phones.length;

    return new Promise((resolve,reject)=>{

    
    //construct task message

    findGoal(user).then(arr=>{
        let userNum = '+1'+user
        let name = '';
        let message=[];
        let stakeholder = '+1'+arr[0].stakephone
        let tasks = arr[0].tasks;
        let status = arr[0].status;
        // console.log(user)
        findUser(user).then(res=>{
            name = res[0].name;
            let phoneIndex = res[0].phoneIndex
            message = endOfDayMsg(tasks,status,name)
            console.log(message)
            //send the task list
            sendTwilio(phones[phoneIndex],userNum,message[0])
            //settimeout to space out the send
            setTimeout(function(){ sendTwilio(phones[phoneIndex],stakeholder,message[0]).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            }) }, 1000);

            
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
    })
}


module.exports = endOfDay;




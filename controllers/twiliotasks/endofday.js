const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const stakeHolder = require('../../scripts/sendtwilio').stakeHolder
const endOfDayMsg = require('../../scripts/endofdaymessage');
const findGoal = require('../../scripts/findgoal')
const findUser = require('../../scripts/finduser')

//twilio error codes
//https://www.twilio.com/docs/iam/test-credentials#test-sms-messages

const endOfDay = (user)=>{
    //construct task message

    findGoal(user).then(arr=>{
        let userNum = '+1'+user
        let name = '';
        let message=[];
        let stakeholder = '+1'+arr[0].stakephone
        let tasks = arr[0].tasks;
        let status = arr[0].status;

        findUser(user).then(res=>{
            name = res[0].name;
            message = endOfDayMsg(tasks,status,name)
            //send the task list
            sendTwilio(twilioPhone,userNum,message[0])
            sendTwilio(twilioPhone,stakeholder,message[1])
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
}
module.exports = endOfDay;




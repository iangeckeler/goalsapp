const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const stakeHolder = require('../../scripts/sendtwilio').stakeHolder
const endOfDayMsg = require('../../scripts/endofdaymessage');
const findGoal = require('../../scripts/findgoal')
//set up the timeline (done in heroku) eventually switch to node-cron

//twilio error codes
//https://www.twilio.com/docs/iam/test-credentials#test-sms-messages

const endOfDay = ()=>{
    //construct task message

    findGoal().then(arr=>{
        let stakeholder = arr[0].stakephone
        let tasks = arr[0].tasks;
        let status = arr[0].status;
        message = endOfDayMsg(tasks,status)
        //send the task list
        sendTwilio(twilioPhone,myPhone,message[0])
        sendTwilio(twilioPhone,stakeHolder,message[1])
    }).catch(err=>{
        console.log(err)
    })
}

endOfDay();

module.exports = endOfDay;




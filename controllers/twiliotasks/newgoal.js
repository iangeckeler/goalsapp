const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const todaysGoals = require('../../scripts/todaysgoals')
const newGoalMsg = require('../../scripts/newgoalmessage')
//set up the timeline (done in heroku) eventually switch to node-cron


const newGoal = ()=>{
    //construct task message

    todaysGoals().then(arr=>{
        for(let i=0;i<arr.length;i++) {
            let stakeholder = arr[i].stakephone
            let tasks = arr[i].tasks;
            let status = arr[i].status;
            let name = 'Ian'
            let message=[];
            message = newGoalMsg(name)
            userNum = '+1'+from;
            stakeNum = '+1'+stakeholder;
            //send the task list
            sendTwilio(twilioPhone,userNum,message[0])
            sendTwilio(twilioPhone,stakeNum,message[1])
        }
    }).catch(err=>{
        console.log(err)
    })
}

newGoal();

module.exports = newGoal;




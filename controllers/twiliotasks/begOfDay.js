const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const findGoal = require('../../scripts/findgoal')
const url = "http://www.google.com"
//set up the timeline (done in heroku) eventually switch to node-cron


const begOfDay = ()=>{
    //construct task message

    findGoal().then(arr=>{
        let tasks = arr[0].tasks;
        let status = arr[0].status;
        message = "Rise and shine sweetheart! Check out your goals and set your priorities today at: "+url
        //send the task list
        sendTwilio(twilioPhone,myPhone,message)
        //sendTwilio(twilioPhone,stakeHolder,message[1])
    }).catch(err=>{
        console.log(err)
    })
}

begOfDay();

module.exports = begOfDay;




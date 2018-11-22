const sendTwilio = require('../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../scripts/sendtwilio').twilioPhone;
const myPhone = require('../scripts/sendtwilio').myPhone;
const updateMsg = require('../scripts/updatemessage')
const findGoal - require('../scripts/findgoal')
//set up the timeline (done in heroku) eventually switch to node-cron



const taskUpdate = ()=>{
    //construct task message

    findGoal().then(arr=>{
        let tasks = arr[0].tasks;
        let status = arr[0].status;
        message = updateMsg(tasks,status)
        //send the task list
        sendTwilio(twilioPhone,myPhone,message)
    }).catch(err=>{
        console.log(err)
    })
}

taskUpdate();

module.exports = taskUpdate;




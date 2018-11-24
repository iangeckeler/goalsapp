const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const updateMsg = require('../../scripts/updatemessage')
const findGoal = require('../../scripts/findgoal')
const phones = require('../../routes/constants').phones;
//set up the timeline (done in heroku) eventually switch to node-cron



const taskUpdate = (from,index)=>{
    //phonepool number
    let phoneIndex = index%phones.length;
    
    //construct task message

    findGoal(from).then(arr=>{
        let tasks = arr[0].tasks;
        let status = arr[0].status;
        message = updateMsg(tasks,status)
        //send the task list
        number = '+1'+from
        console.log(number)
        sendTwilio(phones[phoneIndex],number,message)
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = taskUpdate;




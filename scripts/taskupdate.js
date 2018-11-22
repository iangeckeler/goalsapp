const cron = require('node-cron');
const moment = require('moment');
const sendTwilio = require('./sendtwilio').sendTwilio;
const twilioPhone = require('./sendtwilio').twilioPhone;
const myPhone = require('./sendtwilio').myPhone;
const connectDb = require('../database').db;
const  dbName = require('../database').dbName
const updateMsg = require('./updatemessage')
//set up the timeline (done in heroku) eventually switch to node-cron

//query the database


//get updated task list
const findGoal = ()=>{
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('daygoals');
            collection.find({"date": {"$gte": new Date(moment().startOf('day'))}}).toArray().then(arr => {
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

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



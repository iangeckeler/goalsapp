const cron = require('node-cron');
const sendTwilio = require('./sendtwilio').sendTwilio;
const connectDb = require('../database').db;

//set up the timeline (done in heroku) eventually switch to node-cron

//query the database

//get updated task list

//send the task list

const message = "Rise and shine! Don't Forget to check out your goals this morning: https://dicto.serveo.net"
sendTwilio(twilioPhone,myPhone,message)
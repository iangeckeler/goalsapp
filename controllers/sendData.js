const DayGoal = require('../models/daygoals')
const moment = require('moment')

const sendData = (req,res)=>{
    let len = req.body.body.length;
    let status = Array.apply(null, Array(len)).map(Number.prototype.valueOf,0);
    let dayGoal = new DayGoal(req.body.title,req.body.body,new Date(moment()),status);
    dayGoal.save().then(saved=>{
        console.log(saved)
        res.send('worked')
    })
}

module.exports = sendData;
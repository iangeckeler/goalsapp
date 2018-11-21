const DayGoal = require('../models/daygoals')
const moment = require('moment')

const sendData = (req,res)=>{
    console.log(req.body)
    let dayGoal = new DayGoal(req.body.title,req.body.body,new Date(moment()));
    dayGoal.save().then(saved=>{
        console.log(saved)
        res.send('worked')
    })
}

module.exports = sendData;
const moment = require('moment')

const DayGoal = require('../models/daygoals')
const taskUpdate = require('../controllers/twiliotasks/taskupdate')

const sendData = (req,res)=>{
    let user = req.session.user;
    let len = req.body.body.length;
    let status = Array.apply(null, Array(len)).map(Number.prototype.valueOf,0);
    let dayGoal = new DayGoal(req.body.stakephone,req.body.body,new Date(moment()),status,user);
    dayGoal.save().then(saved=>{
        console.log(saved)
        res.send('Goal saved!')
            //update user
        taskUpdate(user,1)
    })



}

module.exports = sendData;
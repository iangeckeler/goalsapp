const MessagingResponse = require('twilio').twiml.MessagingResponse;
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const findGoal = require('../scripts/findgoal');
const findUsers = require('../scripts/findusers')
const DayGoal = require('../models/daygoals');
const taskUpdate = require('./twiliotasks/taskupdate')


const twilio = (req, res) => {
    // const twiml = new MessagingResponse();
    let from = req.body.From;
    let user = from.substring(2)
    const userList =[];
    //add a check to make sure that the from person is a user
    findUsers().then(arr=>{
        for(let i=0;i<arr.length;i++){
            userList.push(arr[i].phone);
        }
    })

    if(userList.includes(user)){
            // parse request
    let s = req.body.Body;
    console.log(typeof s);
    //return all objects that were sent in message for numbers 1-9
    let updatedStatus = [];
    for (let i=0;i<10;i++) {
        if(s.includes(`${i}`)) {
            updatedStatus.push(1)
        } else {
            updatedStatus.push(0);
        }
    }
    updatedStatus.shift();
    //find old status
    let status =[];
    findGoal(user).then(arr=>{
        console.log(arr)
        status = arr[0].status;
        //loop through status and replace
        let newStatus = status.map((x,index)=>{
            if(x==0 && updatedStatus[index]==1) {
                return 1
            } else {
                return x
            }
        })
        console.log('newStatus is');
        console.log(newStatus);

        //update status
        const daygoal = new DayGoal(null,null,null,newStatus,user);
        console.log(daygoal)
        console.log('daygoal was')
        daygoal.updateStatus().then(res=>{
            console.log(res)
            taskUpdate(user)
        }).catch(err=>{
            console.log(err)
        })
    
        // twiml.message(`${newStatus}`);
        // res.writeHead(200, {'Content-Type': 'text/xml'});
        // res.end(twiml.toString());
    
    }).catch(err=>{
        console.log(err)
    })
    } else {

    }


}



  module.exports = {
      twilio: twilio
  }
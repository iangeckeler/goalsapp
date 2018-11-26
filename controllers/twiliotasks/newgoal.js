const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const todaysGoals = require('../../scripts/todaysgoals')
const newGoalMsg = require('../../scripts/newgoalmessage')
const findUser = require('../../scripts/findusers')
const phones = require('../../routes/constants').phones
const findGoal = require('../../scripts/findgoal');
const updateMsg = require('../../scripts/updatemessage')
//set up the timeline (done in heroku) eventually switch to node-cron


const newGoal = (user,index)=>{
    let phoneIndex = index%phones.length;
    let twilioPhone = phones[phoneIndex];

    return new Promise((resolve,reject)=>{
        findGoal(user).then(arr=>{
            let userNum = '+1'+arr[0].user;
            let stakeNum = '+1'+arr[0].stakephone;
            let tasks = arr[0].tasks;
            let tasknum = tasks.length;
            findUser(user).then(person=>{
                let name = person[0].name
                let message = newGoalMsg(name);
                for (let i=0;i<tasknum;i++) {
                    message[0] += `\n${i+1}. ${tasks[i]}`
                    message[1] += `\n${i+1}. ${tasks[i]}`
                }
                message[0] += '\nType the number of a task to check it off the list!'

                //send first message
                sendTwilio(twilioPhone,userNum,message[0]).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
                //send last message
                setTimeout(()=>{
                    sendTwilio(twilioPhone,stakeNum,message[1]).then(res=>{
                        resolve(res)
                    }).catch(err=>{
                        reject(err)
                    })
                },1500)
                
    
            }).catch(err=>{
                reject(err)
            })
        }).catch(err=>{
            reject(err)
        })
    })

}

module.exports = newGoal;




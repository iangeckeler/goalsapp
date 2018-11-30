const sendTwilio = require('../../scripts/sendtwilio').sendTwilio;
const twilioPhone = require('../../scripts/sendtwilio').twilioPhone;
const myPhone = require('../../scripts/sendtwilio').myPhone;
const updateMsg = require('../../scripts/updatemessage')
const findGoal = require('../../scripts/findgoal')
const findUser = require('../../scripts/finduser')
const phones = require('../../routes/constants').phones;
//set up the timeline (done in heroku) eventually switch to node-cron



const taskUpdate = (from,index)=>{
    console.log('inside of taskupdate')
    //phonepool number
    // let phoneIndex = index%phones.length;
    // console.log(phones[phoneIndex])
    //construct task message

    return new Promise((resolve,reject)=>{
        findGoal(from).then(arr=>{
            console.log('inside of findGoal')
            console.log(arr)
            let tasks = arr[0].tasks;
            let status = arr[0].status;
            

            //findUser
            findUser(from).then(person=>{
                let phoneIndex = person[0].phoneIndex;
                let name = person[0].name;
                let message = 'Hey '+name+'!\n'  
                message += updateMsg(tasks,status)

                            //send the task list
                number = '+1'+from
                console.log(number)
                sendTwilio(phones[phoneIndex],number,message).then(res=>{
                    resolve('sendtwilio worked')
                }).catch(err=>{
                    reject('sendtwiliofailed')
                })



            }).catch(err=>{console.log(err)})

        }).catch(err=>{
            reject(err)
        })
    })
}

// taskUpdate().then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err)
// })

module.exports = taskUpdate;




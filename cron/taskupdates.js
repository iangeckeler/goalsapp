const todaysGoals = require('../scripts/todaysgoals');
const taskUpdate = require('../controllers/twiliotasks/taskupdate')

const taskUpdates = () =>{
    return new Promise((resolve,reject)=>{
        console.log('task update begun')
        //get all daygoals
        todaysGoals().then(arr=> {
            console.log('todaygoals retrieved')
            //loop through the users
            for (let i =0;i<arr.length;i++){
                let user = arr[i].user;
                //update all taskholders
                taskUpdate(user,i).then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            }
        })
    })

}

taskUpdates().then(res=>{
    console.log(res);
    process.exit();
}).catch(err=>{
    console.log(err)
    process.exit()
})




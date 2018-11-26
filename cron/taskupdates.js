const todaysGoals = require('../scripts/todaysgoals');
const taskUpdate = require('../controllers/twiliotasks/taskupdate')

const taskUpdates = () =>{
    //get all daygoals
    todaysGoals().then(arr=> {
        for (let i =0;i<arr.length;i++){
            let user = arr[i].user;
            //update all taskholders
            taskUpdate(user,i).then(res=>{
                return process.exit()
            }).catch(err=>{
                return process.exit()
            })
        }
    })
}

taskUpdates();




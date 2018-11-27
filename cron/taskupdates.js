const todaysGoals = require('../scripts/todaysgoals');
const taskUpdate = require('../controllers/twiliotasks/taskupdate')

const taskUpdates = () =>{
    return new Promise((resolve,reject)=>{
        let resolveCount =0;
        let resultObj = [];
        while (resolveCount)
        console.log('task update begun')
        //get all daygoals
        todaysGoals().then(arr=> {
            console.log('todaygoals retrieved')
            console.log(arr)
            //loop through the users
            for (let i =0;i<arr.length;i++){
                let user = arr[i].user;
                //update all taskholders
                taskUpdate(user,i).then(res=>{
                    resolveCount +=1;
                    resultObj.push(res);
                    if (resolveCount==arr.length){
                        resolve(resultObj)
                    }
                }).catch(err=>{
                    resolveCount +=1;
                    resultObj.push(err);
                    if (resolveCount==arr.length){
                        resolve(resultObj)
                    }
                })
            }
        }).catch(err=>{
            console.log('todays goals failed');
            reject(err)
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




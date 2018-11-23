const findGoal = require('../scripts/findgoal');
const DayGoal = require('../models/daygoals')

// parse request
let s = req.body.Body;
//return all objects that were sent in message
let updatedStatus = [];
for (let i=0;i<10;i++) {
    if(s.contains(i)) {
        updatedStatus.push(1)
    } else {
        updatedStatus.push(0);
    }
}

req.body.Body.match( numberPattern )
//find old status
let status =[];
findGoal().then(arr=>{
    status = arr[0].status;
}).catch(err=>{
    console.log(err)
})
//loop through status and replace
let newStatus = status.map((x,index)=>{
    if(x==0 && updatedStatus[index]==1) {
        return 1
    } else {
        return x
    }
})

//update status
// const daygoal = new DayGoal(null,null,null,status)
// daygoal.updateStatus().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

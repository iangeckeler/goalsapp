const todaysGoals = require('../scripts/todaysgoals');
const endOfDay = require('../controllers/twiliotasks/endofday')

const stakeholderReview = ()=>{
    //get all daygoals
    todaysGoals().then(arr=>{
        for(let i=0;i<arr.length;i++) {
            let user = arr[i].user;
            endOfDay(user,i).then(res=>{
                console.log(res)
                return process.exit();
            }).catch(err=>{
                console.log(err)
                return process.exit();
            })
        }
    }).catch(err=>{
        console.log(err)
    })
}

stakeholderReview()


const todaysGoals = require('../scripts/todaysgoals');
const endOfDay = require('../controllers/twiliotasks/endofday')
//get all daygoals
todaysGoals().then(arr=>{
    for(let i=0;i<arr.length;i++) {
        let user = arr[i].user;
        endOfDay(user);
    }
})
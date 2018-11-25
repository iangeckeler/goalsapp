const findUsers = require('../scripts/findusers')
const goalsReview = require('../controllers/twiliotasks/goalsreview')

const morningReminder = ()=>{
    //get all users
    findUsers().then(arr=>{
        for (let i=0;i<arr.length;i++){
        //send all users a morning reminder asking them for their key priorities
        let phone = arr[i].phone;
        goalsReview(phone,i)
        }
    })

    return
}

morningReminder()




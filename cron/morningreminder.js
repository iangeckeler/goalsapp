const findUsers = require('../scripts/findusers')
const goalsReview = require('../controllers/twiliotasks/goalsreview')

const morningReminder = ()=>{
    //get all users
    findUsers().then(arr=>{
        if(arr!==undefined){
            for (let i=0;i<arr.length;i++){
                //send all users a morning reminder asking them for their key priorities
                let phone = arr[i].phone;
                goalsReview(phone,i).then(res=>{
                    console.log(res)
                    return process.exit()
                }).catch(err=>{
                    console.log(err)
                    return process.exit()
                })
                }
        } else {
            return process.exit()
        }
        
    })

    
}

morningReminder()




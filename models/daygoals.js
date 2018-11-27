const dbConnect = require('../database').db;
const dbName = require('../database').dbName;
const moment = require('moment')
const findGoal = require('../scripts/findgoal');
ObjectId = require('mongodb').ObjectID;

class DayGoal {
    constructor(stakephone,tasks,date,status,user) {
        this.stakephone = stakephone;
        this.tasks = tasks;
        this.date = date;
        this.status = status;
        this.user = user;
    }

    updateStatus(user) {   
        return new Promise((resolve,reject)=>{

            findGoal(user).then(arr=>{
                arr.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.date) - new Date(a.date);
                  });
                let id = arr[0]._id
    
                
            })      
            //update new status
            let myquery = {"_id": new ObjectId(id)};
            //let myquery = {"_id": {"$gte": new Date(moment().startOf('day'))},"user":this.user};
            var newvalues = { $set: {status: this.status} };

            dbConnect((client)=>{
                let db = client.db(dbName);
                db.collection('daygoals').updateOne(myquery, newvalues).then(res=>{
                    client.close();
                    console.log('res is')
                    console.log(res)
                    resolve("1 document updated");
                }).catch(err=>{
                    reject(err)
                })
                })
            })

        }

    save() {
        return new Promise((resolve,reject)=>{
            dbConnect((client)=>{
                let db = client.db(dbName);
                let daygoal = {stakephone: this.stakephone, tasks: this.tasks,date:this.date,status:this.status,user:this.user};
                db.collection('daygoals').insertOne(daygoal).then(res=>{
                    client.close();
                    resolve('1 daygoal successfully inserted')
                }).catch(err=>{
                    reject(err)
                })
            })
        })
    }

    getStakeholder() {
        return this.stakephone
    }
}

// let daygoal = new DayGoal('hello',['poop','pee','fart'])
// daygoal.save().then(res=>{
//     console.log(res)
// })

module.exports = DayGoal;
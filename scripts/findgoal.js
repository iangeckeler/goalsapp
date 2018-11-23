const connectDb = require('../database').db;
const  dbName = require('../database').dbName;
const moment = require('moment');


//get updated task list based on today's date
const findGoal = (from)=>{
    console.log(from)
    console.log(typeof from)
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('daygoals');
            collection.find({"date": {"$gte": new Date(moment().startOf('day'))}, "user":from}).toArray().then(arr => {
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

module.exports = findGoal;
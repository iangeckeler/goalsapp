const connectDb = require('../database').db;
const  dbName = require('../database').dbName;
const moment = require('moment');


//get updated task list based on today's date
const todaysGoals = ()=>{
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('daygoals');
            collection.find({"date": {"$gte": new Date(moment().subtract({hours:14}))}}).toArray().then(arr => {
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

// todaysGoals().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

module.exports = todaysGoals;
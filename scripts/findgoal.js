const connectDb = require('../database').db;
const  dbName = require('../database').dbName;
const moment = require('moment');


//get updated task list based on today's date
const findGoal = (from)=>{
    // console.log(from)
    // console.log(typeof from)
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('daygoals');
            collection.find({"date": {"$gte": new Date(moment().startOf('week'))}, "user":from}).toArray().then(arr => {
                //sort by date
                arr.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.date) - new Date(a.date);
                  });
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

// findGoal('7604207520').then(res=>{
//     console.log(res)
// })

module.exports = findGoal;
const connectDb = require('../database').db;
const  dbName = require('../database').dbName;

//get updated task list based on today's date
const findUsers = ()=>{
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('users');
            collection.find({}).toArray().then(arr => {
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

module.exports = findUsers;
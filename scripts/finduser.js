const connectDb = require('../database').db;
const  dbName = require('../database').dbName;

//get updated task list based on today's date
const findUser = (number)=>{
    return new Promise((resolve,reject)=> {
        connectDb((client)=>{
            let db = client.db(dbName);
            let collection = db.collection('users');
            collection.find({"phone":number}).toArray().then(arr => {
                resolve(arr)
        }).catch(err=>{
            reject(err)
        })
    })
})
}

module.exports = findUser;
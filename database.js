//had trouble getting mongo to work properly
const mongodb = require('mongodb')
const MongoClient =mongodb.MongoClient;

const dbName = 'goalsapp'

// for mlab
const mongoUrl = require('./routes/constants').mongoUrl;
//local doesn't work with sessions?
const localMongoUrl = 'mongodb://localhost:27017';
//which database are you using?
let url = mongoUrl;

const db = function (callback) {
    MongoClient.connect(url).then(res=>{
        callback(res)
    }).catch(err=> {
        return err
    })
}

module.exports = {
    db:db,
    dbName:dbName,
    dbUrl: url
}
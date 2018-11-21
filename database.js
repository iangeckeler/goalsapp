//had trouble getting mongo to work properly
const mongodb = require('mongodb')
const MongoClient =mongodb.MongoClient;

const user = 'geckeler'
const pass = 'eHwR44nP7XzUU9u';
//moody
const dbName = 'goalsapp'

// for mlab
// const mongoUrl = 'mongodb://'+user+':'+pass+'@ds151068.mlab.com:51068/moody';
// const user = 'geckeler'
// const pass = 'eHwR44nP7XzUU9u';
const localMongoUrl = 'mongodb://localhost:27017';

const db = function (callback) {
    MongoClient.connect(localMongoUrl).then(res=>{
        callback(res)
    }).catch(err=> {
        return err
    })
}

module.exports = {
    db:db,
    dbName:dbName
}
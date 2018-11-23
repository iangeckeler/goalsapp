//had trouble getting mongo to work properly
const mongodb = require('mongodb')
const MongoClient =mongodb.MongoClient;

//moody
const dbName = 'goalsapp'
const user = 'geckeler'
const pass = 'yyhkrspRNaEW7rx';
// for mlab
const mongoUrl = 'mongodb://'+user+':'+pass+'@ds115154.mlab.com:15154/goalsapp';
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
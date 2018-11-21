const dbConnect = require('../database').db;
const dbName = require('../database').dbName;

class DayGoal {
    constructor(title,tasks,date) {
        this.title = title;
        this.tasks = tasks;
        this.date = date;
    }

    save() {
        return new Promise((resolve,reject)=>{
            dbConnect((client)=>{
                let db = client.db(dbName);
                let daygoal = {title: this.title, tasks: this.tasks,date:this.date};
                db.collection('daygoals').insertOne(daygoal).then(res=>{
                    client.close();
                    resolve('1 daygoal successfully inserted')
                }).catch(err=>{
                    reject(err)
                })
            })
        })
    }
}

// let daygoal = new DayGoal('hello',['poop','pee','fart'])
// daygoal.save().then(res=>{
//     console.log(res)
// })

module.exports = DayGoal;
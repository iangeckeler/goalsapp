//script to define the Item class for the data.
const mongodb = require('mongodb');
const connectDb = require('../database').db;
const dbName = require('../database').dbName;

const User  = class {
    constructor (phone,password,name) {
        this.name = name;
        this.phone = phone;
        this.password = password;
    };

    save() {
        //remember, db is a database
        connectDb(client=>{
            let db = client.db(dbName);
            let user = {phone: this.phone, password: this.password,name:this.name};
            db.collection('users').insertOne(user).then(res=>{
                console.log('1 user successfully inserted')
                client.close();
            }).catch(err=>{
                console.log(err)
            })
        }) 
    };

    exists() {
        return new Promise((resolve,reject)=>{
            connectDb(client=>{
                let db = client.db(dbName);
                db.collection('users').findOne({phone: this.phone}).then(res=>{
                    if (res != null) {
                        resolve(true)
                    } else {
                        resolve(false)
                    };
                }).catch(err=>{
                    reject(err)
                });
            })
        })

    }
    // checks passwords object against the one in the database
    //returns true or false
    validate() {
        return new Promise((resolve,reject) => {
            connectDb(client =>{
                let db = client.db(dbName);
                db.collection('users').findOne({phone:this.phone}).then(res=>{
                    if(res != null){
                        if(res.password==this.password){
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    } else {
                        reject('no user found')
                    }
                }).catch(err=>{
                    console.log(err)
                })
            })
        })
    }

    getPass() {
        return this.password
    }
}

//let user1 = new User('ian@peepee.com','pooasdfasdfadsfadsfpoo')

module.exports = User;
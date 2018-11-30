const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const usersFull = require('./constants')
const phones = require('./constants')
const findUsers = require('../scripts/findusers');
///stuff for the database
const User = require('../models/user')

//login
router.get('/',(req,res)=>{
    res.render('login.ejs',{message:''})
});

//login
router.post('/',(req,res)=>{
    let user = new User(req.body.phone,req.body.password);
    //check if user exists
    user.exists().then(exists=>{
        if (!exists){
            res.render('login.ejs', {message: 'No User exists'});
        } else {
            user.validate().then(validated=>{
                console.log('vlaidation step')
                console.log(validated)
                if (validated) {
                    req.session.loggedIn = true;
                    req.session.user = user.phone;
                    res.redirect('/')
                } else {
                    res.render('login.ejs',{message:"Oops, incorrect password"})
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }).catch(err=>{
        console.log(err)
    })
});

//sign up
router.get('/signup',(req,res)=>{
    res.render('signup.ejs',{message: ''})
});

router.post('/signup',(req,res)=>{
    findUsers().then(arr=>{
        if (arr.length>=phones.length) {
            res.render('signup.ejs', {message: "Sorry, we've reached full capacity, please contact Ian at ikcgeckeler@gmail.com to request a signup."});
        } else{
            let user = new User(req.body.phone,req.body.password1,req.body.firstname,arr.length);
            //check if user exists
            user.exists().then(exists=>{
                if (exists){
                    res.render('signup.ejs', {message: 'User already exists, idiot'});
                } else if (req.body.password1!=req.body.password2) {
                    res.render('signup.ejs', {message: "Passwords don't match"})
                } else {
                user.save()
                res.redirect('/login')
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }).catch(err=>{console.log(err)})
    if(usersFull) {
        


})


module.exports = router;
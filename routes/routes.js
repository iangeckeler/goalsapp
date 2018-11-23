const express = require('express');
const app = express();
const router = express.Router();

const sendData = require('../controllers/sendData')
const getData = require('../controllers/getData');
const isAuthenticated = require('../controllers/isauthenticated')

router.get('/',isAuthenticated,(req,res)=>{
    res.render('index')
})

router.get('/getData',getData)

router.post('/sendData',sendData)

module.exports = router;
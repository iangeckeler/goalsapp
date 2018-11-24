const express = require('express');
const app = express();
const router = express.Router();

const sendData = require('../controllers/sendData')
const getData = require('../controllers/getData');
const appUrl = require('./constants')
router.get('/',(req,res)=>{
    res.render('index.ejs',{appUrl:appUrl})
})

router.get('/getData',getData)

router.post('/sendData',sendData)

module.exports = router;
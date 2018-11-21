const express = require('express');
const app = express();
const router = express.Router();

const sendDate = require('../controllers/sendData')

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/sendData',sendData)

module.exports = router;
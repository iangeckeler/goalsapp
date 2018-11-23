const express = require('express');
const app = express();
const router = express.Router();

const sendData = require('../controllers/sendData')
const getData = require('../controllers/getData');

router.get('/',(req,res)=>{
    res.render('../dist/index')
})

router.get('/getData',getData)

router.post('/sendData',sendData)

module.exports = router;
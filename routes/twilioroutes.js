const express = require('express');
const app = express();
const router = express.Router();

//undersms routes

const twilio = require('../controllers/twilio').twilio

router.post('/', twilio);

module.exports = router;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACd3153105e04575233d9ed18e4899323a';
const authToken = 'ee64bf998e59b27fc07e9a7c1c4d4544';
const client = require('twilio')(accountSid, authToken);
const twilioPhone = '+14422640754 '
const myPhone = '+17604207520'

const twilio = (req, res) => {
    const twiml = new MessagingResponse();
    console.log(req.body.Body)
    console.log(req.body.From)
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  }

  module.exports = {
      twilio: twilio
  }
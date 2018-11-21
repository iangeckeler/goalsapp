const MessagingResponse = require('twilio').twiml.MessagingResponse;
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console


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
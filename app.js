const http = require('http');
const express = require('express');


const app = express();
const cron=require('node-cron');




//how to send a message
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: twilioPhone,
//      to: myPhone
//    })
//   .then(message => console.log(message.sid))
//   .done();

//routes
const twilioRoutes = require('./routes/twilioroutes');
app.use('/sms',twilioRoutes)
const routes = require('./routes/routes')
app.use('/',routes)

  
http.createServer(app).listen(3000, () => {
    console.log('Express server listening on port 3000');
  });

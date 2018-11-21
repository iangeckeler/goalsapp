const http = require('http');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//how to send a message
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: twilioPhone,
//      to: myPhone
//    })
//   .then(message => console.log(message.sid))
//   .done();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))


//routes
const twilioRoutes = require('./routes/twilioroutes');
app.use('/sms',twilioRoutes)

const routes = require('./routes/routes')
app.use('/',routes)


http.createServer(app).listen(3000, () => {
    console.log('Express server listening on port 3000');
  });

const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors')

var bodyParser = require('body-parser');
app.options('*', cors()) // include before other routes
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'))

//servio NOTE change to 3000 for non ui changes
//ssh -R 80:localhost:8080 serveo.net

//routes
const twilioRoutes = require('./routes/twilioroutes');
app.use('/sms',twilioRoutes)

const routes = require('./routes/routes')
app.use('/',routes)


http.createServer(app).listen(3000, () => {
    console.log('Express server listening on port 3000');
  });

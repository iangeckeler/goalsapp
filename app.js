const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const mongoUrl = require('./database').dbUrl;


app.options('*', cors()) // include before other routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// connect session store
const store = new MongoDBStore({
    uri: mongoUrl,
    collection: 'mySessions'
  });

  // Catch errors
store.on('error', function(error) {
    console.log(error)
  });
app.use(
    session({secret:'my secret', resave:true, saveUninitialized:true,store:store})
)

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/views'))

//servio NOTE change to 3000 for non ui changes
//ssh -R 80:localhost:8080 serveo.net
const authRoutes = require('./routes/authroutes')
app.use('/login', authRoutes);

//routes
const twilioRoutes = require('./routes/twilioroutes');
app.use('/sms',twilioRoutes)

const routes = require('./routes/routes')
app.use(routes)


http.createServer(app).listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port 3000');
  });

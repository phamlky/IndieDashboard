// set up ======================================================================
var express  = require('express');
var app      = express(); 								
var mongoose = require('mongoose'); 					
var port  	 = process.env.PORT || 8080; 				
var database = require('./app/config/database');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});

//
// configuration ===============================================================
mongoose.connect(database.url);
require('./app/models/users.js');
require('./app/models/statistics.js');
require('./app/models/advs.js');
require('./app/models/updates.js');
require('./app/models/scores.js');
require('./app/models/facebooks.js');

app.use(expressSession({
  secret: 'SECRET',
  cookie: {maxAge: 60*60*1000},
  store: new mongoStore({
      collection: 'sessions',
	  mongooseConnection: mongoose.connection
    }),
  resave: true,
  saveUninitialized: true
  }));

app.use(express.static(__dirname + '/app/public')); 
//app.use(express.static(__dirname + '/assets'))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'html');



// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

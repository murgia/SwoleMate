var express      = require("express");
var app = express();
var methodOverride = require("method-override");
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs          = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var path         = require("path");
var bodyParser   = require("body-parser");
var session      = require('express-session');
var router       = require('./config/routes');

var mongodbUri = 'mongodb://localhost/Swolemate2';
mongoose.connect(process.env.MONGOLAB_URI ||mongodbUri);

require('./db/schema');

app.use(morgan('dev'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'hbs');
app.set("views","./public/js/views");

app.use(session({ secret: 'Swoll',
                  resave: false,
                  saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan("dev"));

// create routes
app.get("/", function(req, res) {
  console.log("what up");
  res.render("index.hbs");
});

app.get("/login", function(req, res) {
  console.log("what up");
  res.render("login.hbs");
});

app.use("/workouts", require("./controllers/workouts"));
app.use("/exercises", require("./controllers/exercises"));

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

require('./config/passport')(passport);
var routes = require('./config/routes');
app.use(routes);

app.use("/", router);

app.listen(process.env.PORT || 3000, function() {
   console.log("Listening on port 3000");
 });

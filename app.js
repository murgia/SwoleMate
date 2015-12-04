var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

app.get("/", function(req, res){
  res.render("index.html");
});

app.use("/workouts", require("./controllers/workouts"));
app.use("/exercises", require("./controllers/exercises"));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});

app.get("/workouts", workoutsController.index);
app.get("/workouts/new", workoutsController.new);
app.post("/workouts", workoutsController.create);
app.get("/workouts/:id", workoutsController.show);

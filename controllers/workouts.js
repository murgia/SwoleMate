var express = require("express");
var router = express.Router();
var Workout = require("../models/workout");
var Exercise = require("../models/exercise");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  Workout.find({}).populate("exercises").then(function(workouts){
    res.json(workouts);
  });
});

router.get("/:id/exercises", function(req, res){
  Workout.findById(req.params.id).populate("exercises").then(function(workout){
    res.json(workout.exercises);
  });
});

module.exports = router;


var WorkoutModel = require("../models/workout");
var ExerciseModel = require("../models/exercise");

var workoutsController = {
  index: function(req, res){
    WorkoutModel.find({}, function(err, docs){
      res.render("workouts/index", {workouts: docs})
    });
  },
  create: function(req, res){
    // var exercise = new ExerciseModel({name: req.body.name})
  },
  new: function(req, res){

  },
  show: function(req, res){
    WorkoutModel.findById(req.params.id, function(err, docs){
      res.render("workouts/show", docs)
    })
  }

};

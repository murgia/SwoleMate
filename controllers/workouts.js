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

router.post("/workouts", function(req, res) {
  var workout = new Workout();
  workout.title = req.body.title;

  workout.save(function(err){
    if(err)
      res.send(err);
    res.json({message: 'Workout created'});
  });
});

router.get("/:id/exercises", function(req, res){
  Workout.findById(req.params.id).populate("exercises").then(function(workout){
    res.json(workout.exercises);
  });
});

router.patch("/:id", function(req,res){
  Workout.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(workout){
    res.json(workout);
  });
});

router.delete("/:id", function(req, res){
  Workout.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});
  });
});

// router.create("/:id/workouts")
module.exports = router;

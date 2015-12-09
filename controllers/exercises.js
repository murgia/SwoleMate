var express = require("express");
var router = express.Router();
var Workout = require("../models/workout");
var Exercise = require("../models/exercise");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  Exercise.find({}).populate("workout", "title").then(function(exercises){
    res.json(exercises);
  });
}); // ends router.get

router.post("/", function(req, res){
  var exercise = new Exercise();
  exercise.name = req.body.name;
  exercise.save(function (err){
    if(err)
      res.send(err);
    res.json({message: 'Exercise Created'});
  });
});

router.get("/:id/workouts", function(req,res){
  Exercise.findById(req.params.id).populate("workouts"),then(function(exercise){
    res.json(exercise.workouts);
  });
});

router.patch("/:id", function(req, res){
  Exercise.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true }).then(function(exercise){
    res.json(exercise);
  });
});

router.delete("/:id", function(res, req){
  Exercise.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});
  });
});



module.exports = router;

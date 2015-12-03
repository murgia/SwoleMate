var express = require("express");
var router = express.Router();
var workout = require("../models/workout");
var exercise = require("../models/exercise");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  exercise.find({}).populate("workout", "name").then(function(exercises){
    res.json(exercises);
  });
});

router.get("/:id", function(req, res){
  exercise.findById(req.params.id).populate("workout", "name").then(function(exercise){
    res.json(exercise);
  });
});

router.put("/:id", function(req, res){
  exercise.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(exercise){
    res.json(exercise);
  });
});

router.delete("/:id", function(req, res){
  exercise.findById(req.params.id).then(function(exercise){
    workout.findByIdAndUpdate(exercise.workout._id, {
      $pull: { exercises: {_id: req.params.id} }
    }).then(function(){
      return exercise.remove();
    }).then(function(){
      res.json({success: true});
    })
  });
});

module.exports = router;

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
});

router.patch("/:id", function(req, res){
  Exercise.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(exercise){
    res.json(exercise);
  });
});

router.delete("/:id", function(req, res){
  Exercise.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});

    console.log("delete test");
  });
}); // ends router.get

router.post("/", function(req, res) {
  Exercise.create(req.body).then(function(exercise){
    res.json(exercise);
  });
});



module.exports = router;

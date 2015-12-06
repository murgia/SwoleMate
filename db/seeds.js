require("./schema");
var mongoose = require("mongoose");
var db = mongoose.connection;
var workoutData = require("./workout_data");
var exerciseData = require("./exercise_data");

db.on("error", function(err){
  console.log("Oops! Mongo threw an error. Is `mongod` running?");
  console.log(err.message);
  process.exit();
});

db.once("open", function(){
  console.log("Connected to the database.");
  var Workout = require("../models/workout");
  var Exercise = require("../models/exercise");

  Exercise.remove({}).then(function(){
    Workout.remove({}).then(function(){
      forEach(workoutData, function(workoutDatum){
        return new Workout(workoutDatum).save().then(function(workout){
          return forEach(exerciseData[workout.title], function(exerciseDatum){
            exercise = new Exercise(exerciseDatum);
            console.log(workout.title + " exercises " + exercise.name);
            exercise.workout = workout;
            return exercise.save().then(function(exercise){
              workout.exercises.push(exercise);
              workout.save();
            });
          });
        });
      }).then(function(){
        process.exit();
      });
    });
  });

});

function forEach(collection, callback, index){
  if(!index) index = 0;
  return callback(collection[index]).then(function(){
    if(collection[index + 1]) return forEach(collection, callback, index + 1);
  });
}

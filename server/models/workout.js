require("../db/schema");
var mongoose = require("mongoose");
var WorkoutModel = mongoose.model("Workout");

module.exports = WorkoutModel;

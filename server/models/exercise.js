require("../db/schema");
var mongoose = require("mongoose");
var ExerciseModel = mongoose.model("Exercise");

module.exports = ExerciseModel;

require("../db/schema");
var mongoose = require("mongoose");
var ExerciseModel = mongoose.model("Exercise");

module.exports = ExerciseModel;

// jsm: Totally works, you can also define our model schema in this file and require it from the schema. With mongoose we are going to be definig a lot more about our model in the schema than anywhere else

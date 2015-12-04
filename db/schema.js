// requiring mongoose dependency
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/swolemate");

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var WorkoutSchema = new Schema(
  {
    title: String,
    exercise:[{type: ObjectId, ref: "Exercise"}]
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

WorkoutSchema.virtual("id").get(function(){
  return this._id;
});

var ExerciseSchema = new Schema({
  name: String,
  description: String,
  video_url: String,
  workout:[{type: ObjectId, ref: "Workout"}],
  sets: Number,
  reps: Number
});

var WorkoutModel = mongoose.model("Workout", WorkoutSchema);
var ExerciseModel = mongoose.model("Exercise", ExerciseSchema);

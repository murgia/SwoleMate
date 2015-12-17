var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/Swolemate2"); // jsm: try to add a conditional which checks the environment
var mongodbUri = 'mongodb://localhost/Swolemate2';
// mongoose.connect(process.env.MONGOLAB_URI ||mongodbUri);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var WorkoutSchema = new Schema(
  {
    title: String,
    exercises:[{type: ObjectId, ref: "Exercise"}]
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
  workout:{type: ObjectId, ref: "Workout"},  // jsm: to add the ability to use an exercise in multiple workouts, just need to make this an array of workout references
  sets: Number,
  reps: Number
});

var WorkoutModel = mongoose.model("Workout", WorkoutSchema);
var ExerciseModel = mongoose.model("Exercise", ExerciseSchema);

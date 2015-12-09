var Exercise = function(info){
  this.name = info.name;
  this.description = info.description;
  this.video_url = info.video_url;
  this.sets = info.sets;
  this.reps = info.reps;
  this.workoutId = info.workoutId;
  this.id = info.id;
};

Exercise.prototype = {
  update: function(exerciseData){
    var self = this;
    // ajax method
  }


} // ends Exercise prototype

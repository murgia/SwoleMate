var Exercise = function(info){
  this.name = info.name;
  this.description = info.description;
  this.video_url = info.video_url;
  this.sets = info.sets;
  this.reps = info.reps;
  this.workoutId = info.workoutId;
  this.id = info._id;
};

Exercise.prototype = {
  update: function(exerciseData) {
    var self = this;
    var url = "http://localhost:3000/exercises/" + self.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(exerciseData),
      contentType : 'application/json'
    }).then(
      function(updatedExerciseInfo) {self.reload(updatedExerciseInfo);}
    );
    return request;
  },
  reload: function(newData){
    for(var attrtitle in newData) {
      this[attrtitle] = newData[attrtitle];
    }
  },
  destroy: function(){
    var url = "http://localhost:3000/exercies/" + this.id;
    var request = $.ajax({url:  url, method: "delete"});
    return request;
  }

}; // ends Exercise prototype

var Exercise = function(info){
  this.name = info.name;
  this.description = info.description;
  this.video_url = info.video_url;
  this.sets = info.sets;
  this.reps = info.reps;
  this.workoutId = info.workoutId;
  this.id = info._id;
};

Exercise.all = [];
Exercise.fetch = function() {
  var url = "http://localhost:3000/exercise";
  var request = $.getJSON(url).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      Exercise.all.push(new Exercise(response[i]));
    }
  }).fail(function(response) {
    console.log("js failed to load");
  });
  return request;
};

Exercise.create = function(exerciseData){
  var self = this;
  var url = "/exercises";
  var request = $.ajax({
    url: url,
    method: "POST",
    data: JSON.stringify(exerciseData),
    contentType : 'application/json'
  })
  .then(function(exerciseData){
    return new Exercise(exerciseData);
  });
  return request;
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
  destroy: function() {
    var url = "http://localhost:3000/exercises/" + this.id;
    var request = $.ajax( {url: url, method: "delete"} );
    return request;
  },
  create: function(){
    var url = "http://localhost:3000/exercises/";
    var request = $.ajax({
      url: url,
      method: "POST",
      data: JSON.stringify(exerciseData),
      contentType : 'application/json'});
      return request;
    },
    reload: function(newData){
      for(var attrtitle in newData) {
        this[attrtitle] = newData[attrtitle];
      }
    }
  };

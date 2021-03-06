var Workout = function(info) {
  this.title = info.title;
  this.id = info.id;
};
Workout.all = [];
Workout.fetch = function() {
  var url = "/workouts";
  var request = $.getJSON(url).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      Workout.all.push(new Workout(response[i]));
    }
  }).fail(function(response) {
    console.log("js failed to load");
  });
  return request;
};

Workout.create = function(workoutData){
  var self = this;
  var url = "/workouts";
  var request = $.ajax({
      url: url,
      method: "POST",
      data: JSON.stringify(workoutData),
      contentType : 'application/json'
    })
    .then(function(workoutData){
      return new Workout(workoutData);
    });
    return request;
  };

Workout.prototype = {
  fetchExercises: function() {
      var workout = this;
      var url = "/workouts/" + workout.id + "/exercises";
      workout.exercises = [];
      var request = $.getJSON(url).then(function(response) {
        for (var i = 0; i < response.length; i++) {
          workout.exercises.push(new Exercise(response[i]));
        }
      }).fail(function(response) {
        console.log("js failed to load");
      });
      return request;
    },

    update: function(workoutData) {
      var self = this;
      var url = "/workouts/" + self.id;
      var request = $.ajax({
        url: url,
        method: "patch",
        data: JSON.stringify(workoutData),
        contentType : 'application/json'
      }).then(
        function(updatedWorkoutInfo) {self.reload(updatedWorkoutInfo);}
      );
      return request;
    },
    destroy: function() {
      var url = "/workouts/" + this.id;
      var request = $.ajax( {url: url, method: "delete"} );
      return request;
    },
    create: function(){
      var url = "/workouts/";
      var request = $.ajax({
          url: url,
          method: "POST",
          data: JSON.stringify(workoutData),
          contentType : 'application/json'});
      return request;
    },
    reload: function(newData){
      for(var attrtitle in newData) {
        this[attrtitle] = newData[attrtitle];
      }
    }
};

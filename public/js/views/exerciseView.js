var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  render: function(){
    var el = $("<p>Name: " + this.exercise.name + "</p>" + "<p>Description: " + this.exercise.description + "</p>" + "<p>Sets: " + this.exercise.sets + "</p>" + "<p>Reps: " + this.exercise.reps + "</p>" + "<p>Video Demo: " + this.exercise.video_url + "</p>");
    return(el)
  }
}

var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  // renders the exercise view as a bootstrap
  render: function(){
    var el =
    $("<div class='col-sm-6 col-md-4'>\
    <div class='thumbnail'>\
    <div class='caption'>\
    <h3>" + this.exercise.name + "</h3>\
    <p>Exercise Description: " + this.exercise.description + "</p>\
    <p>Sets: " + this.exercise.sets + "</p>\
    <p>Reps: " + this.exercise.reps + "</p>\
    <p>Video Url: " + this.exercise.video_url + "</p>\
    <a href='#' class='btn btn-default' role='button'>Edit Exercise</a>\
    <a href='#' class='btn btn-default' role='button'>Delete Exercise</a>\
    </div>\
    </div>\
    </div>");
    // $("<p>Name: " + this.exercise.name + "</p>" + "<p>Description: " + this.exercise.description + "</p>" + "<p>Sets: " + this.exercise.sets + "</p>" + "<p>Reps: " + this.exercise.reps + "</p>" + "<p>Video Demo: " + this.exercise.video_url + "</p>");
    return(el)
  }
}

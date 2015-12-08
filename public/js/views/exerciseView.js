var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  // renders the exercise view as a bootstrap
  render: function(){
    var el =
    $("<div class='col-sm-6 col-md-4'>\
    <div class='caption exercise-div card-title'>\
    <div class='card-header'>\
      <h3 class='exercise-name'>" + this.exercise.name + "</h3>\
    </div>\
    <p><strong>Exercise Description:</strong> " + this.exercise.description + "</p>\
    <p><strong>Sets:</strong> " + this.exercise.sets + "</p>\
    <p><strong>Reps: </strong>" + this.exercise.reps + "</p>\
    <p><strong>Video Url: </strong>" + this.exercise.video_url + "</p>\
    <a href='#' class='btn btn-default' role='button'>Edit Exercise</a>\
    <a href='#' class='btn btn-default' role='button'>Delete Exercise</a>\
    <input type='checkbox'>\
    </div>\
    </div>");
    // $("<p>Name: " + this.exercise.name + "</p>" + "<p>Description: " + this.exercise.description + "</p>" + "<p>Sets: " + this.exercise.sets + "</p>" + "<p>Reps: " + this.exercise.reps + "</p>" + "<p>Video Demo: " + this.exercise.video_url + "</p>");
    return(el)
  }
}

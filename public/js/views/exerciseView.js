var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  // renders the exercise view as a bootstrap
  render: function(){
    var self = this;
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
    <button class='btn btn-default editExercise'>Edit Exercise</button>\
    <a href='#' class='btn btn-default' role='button'>Delete Exercise</a>\
    <input type='checkbox'>\
    </div>\
    </div>");
    console.log(self);
    return(el);
    var editButton = self.find("button.editExercise");
    editButton.on("click", function(){
      console.log("Edit form will be rendered")
    //   self.renderEditForm();
    });


  }
}

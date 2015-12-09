var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  // renders the exercise view as a bootstrap
  render: function(){
    var self = this;
    var $el =
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
    $el.find(".editExercise").on("click", function(){
      console.log("Edit Exercise button clicked");
      self.renderEditForm();
    })
    self.$el = $el;
    return $el;
  },

  renderEditForm: function(){
    var self = this;
    // self is THIS exercise view that was clicked on
    console.log("Edit form function called");
    $(self).html(self.exerciseEditTemplate());
    console.log(self);
    self.$el.find(".updateExercise").on("click", function(){
      self.updateExercise();
    })
  },

  exerciseEditTemplate: function(){
    self = this;
    console.log("exerciseEditTemplate rendered")
    var exercise = self.exercise;
    console.log(exercise);
    var $exerciseTemplateDiv =
    $("<div class='exerciseTemplateDiv'></div>");
    self.$el.append($exerciseTemplateDiv);

    var $form =
    $("<form style='margin-top: 10px;' role='form'>\
    <div class='form-group'>\
      <label for='exercise-name'>Exercise Name:</label>\
      <input class='form-control' name='name' placeholder='" + exercise.name + "'>\
    </div>\
    <div class='form-group'>\
      <label for='exercise-description'>Exercise Description: </label>\
      <textarea class='form-control' rows='5' name='description' placeholder='" + exercise.description + "'></textarea>\
    </div>\
    <div class='form-group'>\
    <label for='exercise-video_url'>Exercise Video Demo: </label>\
      <input class='form-control' name='video_url' placeholder='" + exercise.video_url + "'>\
    </div>\
    <div class='form-group'>\
      <label for='sets'>Sets </label>\
      <input class='form-control' name='sets' placeholder='" + exercise.sets + "'>\
    </div>\
    <div class='form-group'>\
      <label for='reps'>Reps: </label>\
      <input class='form-control' name='reps' placeholder='" + exercise.reps + "'>\
    </div>\
    <button type='submit' class='btn btn-default updateExercise'>Update Exercise</button>\
    </form>");
    self.$el.find($exerciseTemplateDiv).html($form);
  },

  updateExercise: function() {
    var self = this;
    var data = {
      name: $('input[name=name]').val(),
      description: $('input[name=name]').val(),
    };
      self.workout.update(data).then(function() { self.render(); });
  }
}

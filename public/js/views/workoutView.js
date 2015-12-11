var WorkoutView = function(workout){
  this.workout = workout;
  this.$el = $("<div class='workout'></div>");
  this.render();
  $(".workouts").append(this.$el);
};

WorkoutView.setCreateButton = function(){
  var self = this;
  var newWorkout = $("#new-workout");
  var newWorkoutForm = $(".workout-attachment");
  newWorkout.one("click", function(){
    newWorkoutForm.show();
    self.prototype.workoutNewTemplate();
  });
  newWorkout.on("click", function(){
    newWorkoutForm.show();
  });
};

WorkoutView.createWorkout = function(){
  var newWorkoutBar = $(".newWorkout");
  var newWorkoutForm = $(".workout-attachment");
  newWorkoutForm.on("click", ".newWorkout", function(){
    console.log("new testing");
    var data = {
      title: $('input[name=title]').val()
    };
    Workout.create(data).then(function(newWorkOut){
      console.log(newWorkOut);
      new WorkoutView(newWorkOut).render();
      newWorkoutForm.hide();
    });
  });
};

WorkoutView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.workoutTemplate(self.workout));
    var showButton = self.$el.find(".showExercises");
    var editButton = self.$el.find(".editWorkout");
    var addExerciseButton = self.$el.find(".newExercise");
    var exercisesDiv   = self.$el.find("div.exercises");
    exercisesDiv.hide();

    addExerciseButton.on("click", function(){
      console.log("new test");
      self.exerciseNewTemplate();
    });

    showButton.on("click", function(){
      self.toggleExercises(exercisesDiv);
    });

    editButton.on("click", function(){
      self.renderEditForm();
    });
  },

  workoutNewTemplate: function(){
    // var workout = this.workout;
    var html = $(".workout-attachment");
    html.append("<input name='title' value = ''>");
    html.append("<button class= 'newWorkout'>Create Workout<button>");
    return(html);
  },

  renderEditForm: function() {
    var self = this;
    self.$el.html(self.workoutEditTemplate(self.workout));

    self.$el.find(".updateWorkout").on("click", function() {
      self.updateWorkout();
    });
    self.$el.find(".deleteWorkout").on("click", function() {
      self.workout.destroy().then(function(){
        self.$el.fadeOut();
      });
    });
  },

  toggleButton: function(exercisesDiv){
    if(exercisesDiv.is(":visible")){
      exercisesDiv.siblings("button.showExercises").text("Hide Exercises");
    } else {
      exercisesDiv.siblings("button.showExercises").text("Show Exercises");
    }
  },
  toggleExercises: function(exercisesDiv){
    var self = this;
    if(exercisesDiv.children().length === 0){
      self.workout.fetchExercises().then(function(){
        self.appendExercises(self.workout.exercises, exercisesDiv);
      });
    }
    exercisesDiv.toggle();
    self.toggleButton(exercisesDiv);
  },
  appendExercises: function(exercises, exercisesDiv){
    exercises.forEach(function(exercise){
      var exerciseView = new ExerciseView(exercise);
      exerciseView.render();
      exercisesDiv.append(exerciseView.$el);
    });
  },

  updateWorkout: function() {
    var self = this;
    var data = {
      title: $('input[name=title]').val()
    };
      self.workout.update(data).then(function() { self.render(); });
  },

  workoutTemplate: function(){
    var workout = this.workout;
    var html = $("<div class='text-center'>");
    html.append("<h2 class='workout-title'>" + workout.title + "</h2>");
    html.append("<button class='showExercises'>Show Exercises</button>");
    html.append("<button class='newExercise'>Add Exercise</button>");
    html.append("<button class='editWorkout'>Edit Workout</button>");
    html.append("<div class='exercises row text-left'></div>");
    return(html);
  },

  workoutEditTemplate: function(){
    var workout = this.workout;
    var html = $("<div class='exercises'>");
    html.append("<input name='title' value ='" + workout.title + "'>");
    html.append("<button class= 'updateWorkout'>Modify Workout<button>");
    html.append("<button class='deleteWorkout'>Obliterate Workout<button>");
    return(html);
  },

  exerciseNewTemplate: function(){
    var html = $(".workout-attachment");
    var $form =
    $("<form style='margin-top: 10px;' role='form'>\
    <div class='form-group'>\
    <label for='exercise-name'>Exercise Name:</label>\
    <input class='form-control' name='name' value=''>\
    </div>\
    <div class='form-group'>\
    <label for='exercise-description'>Exercise Description: </label>\
    <textarea class='form-control' rows='5' name='description'></textarea>\
    </div>\
    <div class='form-group'>\
    <label for='exercise-video_url'>Exercise Video Demo: </label>\
    <input class='form-control' name='video_url' value=''>\
    </div>\
    <div class='form-group'>\
    <label for='sets'>Sets </label>\
    <input class='form-control' name='sets' value=''>\
    </div>\
    <div class='form-group'>\
    <label for='reps'>Reps: </label>\
    <input class='form-control' name='reps' value=''>\
    </div>\
    <button type='submit' class='btn btn-default addExercise'>Add Exercise</button>\
    </form>");
    html.append($form);
    console.log("testing");
    return(html);
  },

  updateExercise: function() {
    var data = {
      name: $('input[name=name]').val(),
      description: $('input[name=description]').val(),
      video_url: $('input[name=video_url]').val(),
      sets: $('input[name=sets]').val(),
      reps: $('input[name=reps]').val()
    };
    this.exercise.update(data).then(function() { self.render();
    });
    $("form").hide();
  },

};

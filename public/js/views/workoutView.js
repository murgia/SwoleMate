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
    // renderNewWorkout();
    console.log("testing");
    newWorkoutForm.show();
    self.prototype.workoutNewTemplate();
  });
  newWorkout.on("click", function(){
    newWorkoutForm.show();
    console.log("test");
  });
  // newWorkout.toggle(function(){
  //   newWorkoutForm.show();
  // }, function(){
  //   newWorkoutForm.hide();
  // });
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
    var exercisesDiv   = self.$el.find("div.exercises");
    exercisesDiv.hide();

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
      exercisesDiv.append(exerciseView.render());
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

};

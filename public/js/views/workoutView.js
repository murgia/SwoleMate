var WorkoutView = function(workout){
  this.workout = workout;
  this.$el = $("<div class='workout'></div>");
  this.render();
  $(".workouts").append(this.$el);
};

WorkoutView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.workoutTemplate(self.workout));
    var showButton = self.$el.find(".showExercises");
    // var editButton = self.$el.find(".editArtist");
    var exercisesDiv = self.$el.find("div.exercises");
    exercisesDiv.hide();
    showButton.on("click", function(){
      self.toggleExercises(exercisesDiv);
    });
    // editButton.on("click", function() {
    //   self.renderEditForm();
    // });
  },
  // renderEditForm: function() {
  //   var self = this;
  //   self.$el.html(self.artistEditTemplate(self.artist));
  //
  //   self.$el.find(".updateArtist").on("click", function() {
  //     self.updateArtist();
  //   });
  //
  //   self.$el.find(".deleteArtist").on("click", function() {
  //     self.artist.destroy().then(function() { self.$el.fadeOut()});
  //   });
  // },
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
  // updateArtist: function() {
  //   var self = this;
  //   var data = {  name:     $('input[name=name]').val(),
  //                 photoUrl: $('input[name=photoUrl]').val() };
  //   self.artist.update(data).then(function() { self.render(); });
  // },
  workoutTemplate: function(){
    var workout = this.workout;
    var html = $("<div class='text-center'></div>");
    html.append("<h2>" + workout.title + "</h2>");
    html.append("<button class='showExercises'>Show Exercises</button>");
    // html.append("<button class='editWorkout'>Edit Artist</button>");
    html.append("<div class='exercises row'></div>");
    return(html);
  }
  // ,
  // artistEditTemplate: function() {
  //   var artist = this.artist;
  //   var html = $("<div>");
  //   html.append("<input name='name' value='" + artist.name + "'>");
  //   html.append("<img class='artist-photo' src='" + artist.photoUrl + "'>");
  //   html.append("<input name='photoUrl' value='" + artist.photoUrl + "'>");
  //   html.append("<button class='updateArtist'>Update Artist</button>");
  //   html.append("<button class='deleteArtist'>Delete Artist</button>");
  //   return(html);
  // }
};

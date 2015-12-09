$(document).ready(function(){
  Workout.fetch().then(function(){
    Workout.all.forEach(function(workout){
      var view = new WorkoutView(workout);
      view.render();
    });
  });
  WorkoutView.createWorkout();
  WorkoutView.setCreateButton();
});

$(document).ready(function(){
  Workout.fetch().then(function(workout){
    Workout.all.forEach(function(workout){
      var view = new WorkoutView(workout)
      view.render();
    })
  })
});

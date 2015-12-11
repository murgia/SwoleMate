$(document).ready(function(){
  Workout.fetch().then(function(){
    Workout.all.forEach(function(workout){
      var view = new WorkoutView(workout);
      view.render();
    });
  });
  WorkoutView.createWorkout();
  WorkoutView.setCreateButton();
  // ExerciseView.setCreateButton();
  // ExerciseView.createExercise();

  $("button#check-weather").on("click", function(evt){
    evt.preventDefault();
      var state = $("input#state").val();
      var city = $("input#city").val();
     console.log(state);
     console.log(city);
      var url = "http://api.wunderground.com/api/14da815aa9cb1bfe/conditions/q/" + state + "/" + city + ".json"
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done(function(response){
        $("div#weather").html(
          "<ul>\
            <li class='text-center'><strong><h4>Temperature: </strong>" + response.current_observation.temp_f + "&deg; F</h4>" +
            "<li class='text-center'><strong><h4>Weather: </strong>" + response.current_observation.weather + "</h4></li>" +
            "<li class='text-center'><strong><h4>Feels Like: </strong>" + response.current_observation.feelslike_f  + "&deg; F</h4></li>\
            </ul>")
        }).fail(function(){
        console.log("Ajax request failed.");
      }).always(function(){
        console.log("Ajax request successful!");
      });
    });

});

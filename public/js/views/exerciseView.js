var ExerciseView = function(exercise){
  this.exercise = exercise;
}

ExerciseView.prototype = {
  render: function(){
    var el = $("<p>" + this.exercise.name + "</p>");
    return(el)
  }
}

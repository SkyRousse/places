//business logic
function Place(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
};


//user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTime = $("input#time").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul.placeslist").append("<li class='list-group-item'><span class ='place'>" + newPlace.location + "</span></li>");
    $("#places-output").show();

    $(".place").last().click(function()  {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location + " Details:");
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
    });

    $("input#location").val("");
    $("input#landmark").val("");
    $("input#time").val("");
    $("input#notes").val("");
  });
});

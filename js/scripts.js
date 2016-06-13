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


  });
});

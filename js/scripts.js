var userInput = function(input) {
  return "beep!"
}

// User Interface Logic:
$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("user-input").val());
    var result = userInput(input);
    $("#result").text(result);
  });
});

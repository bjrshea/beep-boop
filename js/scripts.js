// Business Logic:

var userInput = function(input) {

  var userResult = [];
  for (var index = 0; index <= input; index += 1) {
    if (input % 3 === 0) {
      return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (input === 1) {
      return "boop!";
    } else if (input === 0) {
      return "beep!";
    } else {
      alert(index);
    }
  }
};

// User Interface Logic:
$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    var result = userInput(input);
    $("#result").text(result);
  });
});

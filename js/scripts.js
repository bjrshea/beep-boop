var userInput = function(input) {
  if (input % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    return "beep!";
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

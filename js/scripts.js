// Business Logic:
var userInput = function(input) {
  var inputRange = [];
  for (var i = 0; i <= input; i++) {
    var inputToString = i.toString();
    if (i % 3 === 0) {
      inputRange.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (inputToString.includes("1")) {
      inputRange.push("Boop!");
    } else if (inputToString.includes("0")) {
      inputRange.push("Beep!");
    } else {
      inputRange.push(i);
    }
  }
  return inputRange.join(', ');
};
// User Interface Logic:
$(document).ready(function() {
  $("img").click(function() {
    alert("Hi. My name is Beep-Boop.")
  });
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    var result = userInput(input);
    $("#result").append(result);
  });
});

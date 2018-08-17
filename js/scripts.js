// Business Logic:

var userInput = function(input) {

  var inputRange = [];
  for (var startingNumber = 0; startingNumber <= input; startingNumber += 1) {
    inputRange.push(startingNumber);
  }
  return inputRange;
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

// if (input % 3 === 0) {
//   return "I'm sorry, Dave. I'm afraid I can't do that.";
// } else if (input === 1) {
//   return "boop!";
// } else if (input === 2) {
//   return "beep!";
// } else {
//   alert(numberRange);
// }

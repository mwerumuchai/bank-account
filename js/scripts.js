//Business Logi
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};


//Everything below this line is user interface logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#initial-deposit").val());
    var number2 = parseInt($("#deposit-amount").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#initial-deposit1").val());
    var number2 = parseInt($("#withdraw-amount").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

});

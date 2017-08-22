//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

function resetFields() {
    $("input#first-name").val("");
    $("input#last-name").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

    });

    $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#initial-deposit").val());
    var number2 = parseFloat($("#deposit-amount").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#initial-deposit1").val());
    var number2 = parseFloat($("#withdraw-amount").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

    resetFields();

  });
});

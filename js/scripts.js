//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var add = function(number1, number2) {
  return number1 + number2;
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

  $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  });

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

});

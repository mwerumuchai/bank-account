//business logic

//customer details
function Account(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Account.prototype.fullName = function() {
  return this.firstName + "" + this.lastName;
}

function Amount(initial deposit,deposit amount,withdraw amount) {
  this.initial = initial deposit;
  this.deposit = deposit amount;
  this.withdraw = withdraw amount;
}

//Add Reset function


//Calculator

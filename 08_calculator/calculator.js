const add = function() {
  var sumArray = Array.from(arguments);
  var sum = 0
  for (var i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
  }
  return sum;
};

const subtract = function(a, b) {
	var subtract = a - b
  return subtract
};

const sum = function(array) {
	var sumArray = array;
  var sum = 0
  for (var i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
  }
  return sum;
};

const multiply = function(array) {
  var multiplyArray = array;
  var multiply = 1;
  for (var i = 0; i < multiplyArray.length; i++) {
    multiply = multiply * multiplyArray[i];
  }
  return multiply;
};

const power = function(a, b) {
  var aPowerb = a ** b;
  return aPowerb;
	
};

const factorial = function(number) {
let factorialSum = 1;
  if (number == 0){
    return 1;
  }
  else{
	  for (let i = 1; i <= number; i++){
    factorialSum *= i;
    }
    return factorialSum
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a, b) {
  let sum = a + b;
  return sum;
};
add(0,0);
add(2,2);
add(2,6);

const subtract = function(a, b) {
  let sum = a - b;
  return sum;
};
subtract(10,4);

const sum = function(...array) {
  array.reduce((a, b) => a + b);
};
sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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

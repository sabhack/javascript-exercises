const add = (a, b) => {
  let result = a + b;
  return result;
};
add(0,0);
add(2,2);
add(2,6);

const subtract = function(a, b) {
  let result = a - b;
  return result;
};
subtract(10,4);

const sum = function sumArray(array) {
  let result = 0

  for (let i = 0; i < array.length; i += 1) {
    result += array[i]
  }

  return result
}
sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);

const multiply = function multiplyArray(array) {
  let result = 1;

  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }

  return result;
};
multiply([2,4])
multiply([2,4,6,8,10,12,14])

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

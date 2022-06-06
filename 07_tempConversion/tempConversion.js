const ftoc = function(fahrenheit) {

  let fTemp = fahrenheit;
  let fToC = (fTemp - 32) * 5/9;
  let rounded = Math.round(fToC * 10) / 10;
  return rounded;
};

const ctof = function(celsius) {

  let cTemp = celsius;
  let cToF = cTemp * 9/5 + 32;
  let rounded = Math.round(cToF * 10) / 10;
  return rounded;

};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

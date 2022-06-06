const sumAll = function(a,b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (a<0 || b<0) return 'ERROR';

    return (Math.abs(a-b) + 1)*(a+b)/2;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

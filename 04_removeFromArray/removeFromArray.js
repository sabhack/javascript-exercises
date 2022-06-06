const removeFromArray = function(arr, ...value) {
    
    return arr.filter(x => !value.includes(x))
};
removeFromArray([1,2,3,4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
// Do not edit below this line
module.exports = removeFromArray;

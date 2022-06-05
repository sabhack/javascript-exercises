const reverseString = function(str) {
    
    let splitString = str.split(""); // spliting the string into single arrays

    // Using the reverse() method
    let reverseArray = splitString.reverse();

    //Using the join() method
    let joinArray = reverseArray.join("");

    //Return the reversed string
    return joinArray;

};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

// Do not edit below this line
module.exports = reverseString;

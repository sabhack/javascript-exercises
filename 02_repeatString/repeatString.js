const repeatString = function(str, num) {
    let output = "";
    for(let i=0; i<num; i++) {
        output += str;
    }

    return output;

};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;

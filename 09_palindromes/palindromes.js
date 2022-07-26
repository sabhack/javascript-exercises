const palindromes = function palindrome (str) {
    let re = /[\W_]/g;

    let lowRegStr = str.toLowerCase().replace(re, '');

    let reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
};

palindromes('racecar')
palindromes('racecar!')
palindromes('Racecar!')
palindromes('A car, a man, a maraca.')
palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;

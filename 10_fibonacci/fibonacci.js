// const fibonacci = function fib(num) {
//     if(num == 0) {
//         return 0;
//     } else if (num == 1) {
//         return 1;
//     } else {
//         return fib(num - 1) + fib(num - 2);
//     }

// };

const fibonacci = n => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

fibonacci(4)
fibonacci(6)
fibonacci(10)
fibonacci(15)
fibonacci(25)
fibonacci(-25)
fibonacci("1")
fibonacci("2")
fibonacci("8")

// Do not edit below this line
module.exports = fibonacci;

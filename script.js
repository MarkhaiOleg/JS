let fibonacciNumbers = [1, 1];
let numbersQuantity = 7;
let total = fibonacciNumbers.length + numbersQuantity;

for (let i = 2;i < total;i++) {
  fibonacciNumbers.push(fibonacciNumbers[i-1] + fibonacciNumbers [i-2]);
  }
  
console.log (fibonacciNumbers);
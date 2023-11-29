"use strict";

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < 10; i++) {
    if (!(number % i) && i !== number) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(151));
console.log(isPrime(911));
console.log(isPrime(9));

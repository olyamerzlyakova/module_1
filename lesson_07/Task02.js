"use strict";

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  const averageValue = Math.floor(sum / arr.length);

  return averageValue;
};

const averageCheck = getAverageValue(allCashbox);

console.log("averageCheck: ", averageCheck);

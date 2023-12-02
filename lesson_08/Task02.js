"use strict";

const getArrRandomNums2 = (numberOfItems, n, m) => {
  let randomMax = n > m ? n : m;
  let randomMin = n > m ? m : n;

  const arr = [...Array(numberOfItems)].map((item) => {
    item = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;
    return item;
  });
  return arr;
};

const arrRandomNums2 = getArrRandomNums2(4, -7, 20);
console.log("arrRandomNums2: ", arrRandomNums2);

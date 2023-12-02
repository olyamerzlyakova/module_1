"use strict";

const getArrRandomNums1 = (numberOfItems) => {
  const arr = [...Array(numberOfItems)].map(
    () => Math.floor(Math.random() * 100) + 1
  );
  return arr;
};

const arrRandomNums1 = getArrRandomNums1(7);
console.log("arrRandomNums1: ", arrRandomNums1);

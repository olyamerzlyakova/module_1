'use strict';

const getArr = ([...arr]) => {
  const randomNumber = Math.floor(Math.random() * 11);
  console.log('randomNumber: ', randomNumber);

  arr.push(randomNumber);

  const arrSum = arr.reduce((acc, item) => acc + item);
  console.log('arrSum: ', arrSum);

  if (arrSum >= 50) {
    return arr;
  }

  return getArr(arr);
};

console.log(`Arr: ${getArr([30, 6, 1])}`);

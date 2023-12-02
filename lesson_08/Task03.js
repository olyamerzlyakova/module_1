"use strict";

const getArrRandomNums3 = (numberOfItems, n, m, option) => {
  let randomMax = n > m ? n : m;
  let randomMin = n > m ? m : n;
  const getItem = () =>
    Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

  if (option === "odd") {
    const arr = [...Array(numberOfItems)].map((item) => {
      const chekTrueItem = () => {
        const testItem = getItem();
        console.log("testItem: ", testItem);
        if (testItem % 2) {
          const trueItem = testItem;
          console.log("trueItem: ", trueItem);
          return trueItem;
        } else {
          return chekTrueItem();
        }
      };
      item = chekTrueItem();
      return item;
    });
    return arr;
  }

  if (option === "even") {
    const arr = [...Array(numberOfItems)].map((item) => {
      const chekTrueItem = () => {
        const testItem = getItem();
        if (!(testItem % 2)) {
          const trueItem = testItem;
          return trueItem;
        } else {
          return chekTrueItem();
        }
      };
      item = chekTrueItem();
      return item;
    });
    return arr;
  }
};

const arrRandomNums3 = getArrRandomNums3(3, -20, 20, "even");
console.log("arrRandomNums3: ", arrRandomNums3);

"use strict";

const calculate = (totalAmount = 0, numberOfItems = 0, promocode) => {
  let totalPrice = totalAmount;

  if (numberOfItems > 10) {
    totalPrice *= 0.97;
  }
  if (totalPrice > 30000) {
    let discont = (totalPrice - 30000) * 0.15;
    totalPrice -= discont;
  }
  if (promocode === "METHED") {
    totalPrice *= 0.9;
  }
  if (promocode === "G3H2Z1" && totalPrice > 2000) {
    totalPrice -= 500;
  }

  return totalPrice;
};

console.log(calculate(35000, 11, "METHED"));

"use strict";

const getReverseString = (str) => {
  const reverseString = str.split("").reverse().join("");
  return reverseString;
};

console.log(getReverseString("Привет Мир"));

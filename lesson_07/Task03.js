"use strict";

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (arr, prefix) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = `${prefix} ${newArr[i]}`;
  }
  return newArr;
};

const namesWithPrefix = addPrefix(names, "Mr");
console.log("namesWithPrefix: ", namesWithPrefix);

"use strict";

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Смирнов",
  "Кузнецов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Попов", "Смирнов"];

const filter = (arr1, arr2) => {
  let passedStudents = [...arr1];
  for (let i = 0; i < arr2.length; i += 1) {
    if (passedStudents.includes(arr2[i])) {
      let index = passedStudents.indexOf(arr2[i]);
      passedStudents.splice(index, 1);
    }
  }

  return passedStudents;
};

const passedStudents = filter(allStudents, failedStudents);

console.log("passedStudents: ", passedStudents);

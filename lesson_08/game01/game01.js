"use strict";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const startGame = () => {
  const randomNumber = getRandomNumber();
  console.log("randomNumber: ", randomNumber);
  let guessingOption = prompt("Угодай число от 1 до 100", 85);
  console.log("guessingOption: ", guessingOption);

  while (guessingOption !== null) {
    if (guessingOption > randomNumber) {
      guessingOption = prompt("Меньше!");
    }
    if (guessingOption < randomNumber) {
      guessingOption = prompt("Больше!");
    }
    if (guessingOption === "" || !isFinite(guessingOption)) {
      guessingOption = prompt("Введи число!");
    }
    if (guessingOption == randomNumber) {
      alert("Правильно!");
      break;
    }
    if (guessingOption === null) {
      alert("Игра окончена");
      break;
    }
  }
};

startGame();

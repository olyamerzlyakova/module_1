'use strict';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const startGame = () => {
  const randomNumber = getRandomNumber();
  console.log('randomNumber: ', randomNumber);

  const guessingOption = prompt('Угодай число от 1 до 100', 85);

  const guessTheNumber = (guessingOption) => {
    if (guessingOption === null) {
      return alert('Игра окончена');
    }
    if (!isFinite(guessingOption) || guessingOption === '') {
      guessingOption = prompt('Введи число!');
      return guessTheNumber(guessingOption);
    }
    if (guessingOption > randomNumber) {
      guessingOption = prompt('Меньше!');
      return guessTheNumber(guessingOption);
    }
    if (guessingOption < randomNumber) {
      guessingOption = prompt('Больше!');
      return guessTheNumber(guessingOption);
    }
    if (Number(guessingOption) === randomNumber) {
      alert('Правильно!');
    }
  };

  guessTheNumber(guessingOption);
};

startGame();

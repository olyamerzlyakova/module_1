'use strict';

(() => {
  const botFigures = ['четное', 'нечетное'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getBotFigure = () => {
    const randomInt = getRandomIntInclusive(0, botFigures.length - 1);
    return botFigures[randomInt];
  };

  const game = (language) => {
    const result = {
      player: 5,
      computer: 5,
    };

    const getGamerNumber = () => {
      const enteredNumber = +prompt(
        `Введите число от 1 до ${result.player}`,
        1
      );
      if (
        isFinite(enteredNumber) &&
        enteredNumber > 0 &&
        enteredNumber <= result.player
      ) {
        return enteredNumber;
      }
      getGamerNumber();
    };

    return function start() {
      const gamerNumber = getGamerNumber();
      console.log('gamerNumber: ', gamerNumber);
      const botFigure = getBotFigure();
      console.log('botFigure: ', botFigure);

      if (
        (gamerNumber % 2 === 0 && botFigure === 'четное') ||
        (gamerNumber % 2 !== 0 && botFigure === 'нечетное')
      ) {
        result.player -= gamerNumber;
        console.log('result.player: ', result.player);
        result.computer += gamerNumber;
        console.log('result.computer: ', result.computer);
        alert(`Компьютер выбрал: ${botFigure}
        Вы выбрали: ${gamerNumber}
        Ваши очки: ${result.player}
        Очки компьютера: ${result.computer}`);
        if (result.player <= 0) {
          return alert('Вы проиграли');
        }
        return start();
      } else {
        result.player += gamerNumber;
        console.log('result.player: ', result.player);
        result.computer -= gamerNumber;
        console.log('result.computer: ', result.computer);
        alert(`Компьютер выбрал: ${botFigure}
        Вы выбрали: ${gamerNumber}
        Ваши очки: ${result.player}
        Очки компьютера: ${result.computer}`);

        if (result.computer <= 0) {
          return alert('Бот проиграл');
        }
        return start();
      }
    };
  };

  window.marblesGame = game;
})();

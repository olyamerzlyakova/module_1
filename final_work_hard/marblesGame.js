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

      if (enteredNumber === undefined) {
        return getGamerNumber();
      }
      if (
        enteredNumber !== null &&
        enteredNumber !== '' &&
        enteredNumber !== undefined &&
        enteredNumber > 0 &&
        enteredNumber <= result.player
      ) {
        return enteredNumber;
      }
      return getGamerNumber();
    };

    const getBotNumber = () => getRandomIntInclusive(1, result.computer);

    return function start(winner) {
      const getTheBotGuess = () => {
        const botNumber = getBotNumber();
        const gamerFigure = confirm('Число чётное?');

        if (
          (botNumber % 2 === 0 && gamerFigure === true) ||
          (botNumber % 2 !== 0 && gamerFigure === false)
        ) {
          result.player += botNumber;
          result.computer -= botNumber;
          alert(`Компьютер выбрал: ${botNumber}
          Вы выбрали: ${gamerFigure}
          Ваши очки: ${result.player}
          Очки компьютера: ${result.computer}`);

          if (result.computer <= 0) {
            const playerDecision = confirm('Бот проиграл. Хотите сыграть ещё?');
            if (playerDecision === true) {
              const startGameRPS = window.gameRPS('RU');
              return startGameRPS();
            }
            return alert('Игра окончена');
          }
          return start();
        } else {
          result.player -= botNumber;
          result.computer += botNumber;
          alert(`Компьютер выбрал: ${botNumber}
          Вы выбрали: ${gamerFigure}
          Ваши очки: ${result.player}
          Очки компьютера: ${result.computer}`);
          if (result.player <= 0) {
            const playerDecision = confirm('Вы проиграли. Хотите сыграть ещё?');
            if (playerDecision === true) {
              const startGameRPS = window.gameRPS('RU');
              return startGameRPS();
            }
            return alert('Игра окончена');
          }
          return start();
        }
      };
      if (winner === 'computer') {
        return getTheBotGuess();
      }
      const gamerNumber = getGamerNumber();
      console.log('gamerNumber: ', gamerNumber);
      const botFigure = getBotFigure();
      console.log('botFigure: ', botFigure);

      if (
        (gamerNumber % 2 === 0 && botFigure === botFigures[0]) ||
        (gamerNumber % 2 !== 0 && botFigure === botFigures[1])
      ) {
        result.player -= gamerNumber;
        result.computer += gamerNumber;
        alert(`Компьютер выбрал: ${botFigure}
        Вы выбрали: ${gamerNumber}
        Ваши очки: ${result.player}
        Очки компьютера: ${result.computer}`);

        if (result.player <= 0) {
          const playerDecision = confirm('Вы проиграли. Хотите сыграть ещё?');
          if (playerDecision === true) {
            const startGameRPS = window.gameRPS('RU');
            return startGameRPS();
          }
          return alert('Игра окончена');
        }
        return getTheBotGuess();
      } else {
        result.player += gamerNumber;
        result.computer -= gamerNumber;
        alert(`Компьютер выбрал: ${botFigure}
        Вы выбрали: ${gamerNumber}
        Ваши очки: ${result.player}
        Очки компьютера: ${result.computer}`);

        if (result.computer <= 0) {
          const playerDecision = confirm('Бот проиграл. Хотите сыграть ещё?');
          if (playerDecision === true) {
            const startGameRPS = window.gameRPS('RU');
            return startGameRPS();
          }
          return alert('Игра окончена');
        }
        return getTheBotGuess();
      }
    };
  };

  window.marblesGame = game;
})();

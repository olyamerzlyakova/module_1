'use strict';

(() => {
  const FIGURES_RUS = ['ножницы', 'камень', 'бумага'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getComputerFigure = () => {
    const randomInt = getRandomIntInclusive(0, FIGURES_RUS.length - 1);
    return FIGURES_RUS[randomInt];
  };

  const getGamerFigure = () => prompt('Камень, ножницы, бумага?', 'камень');

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const computerFigure = getComputerFigure();
      console.log('computerFigure: ', computerFigure);
      const gamerFigure = getGamerFigure();
      console.log('gamerFigure: ', gamerFigure);

      const checkGamerFigure = () => {
        if (
          gamerFigure !== null &&
          gamerFigure !== '' &&
          gamerFigure !== undefined
        ) {
          return FIGURES_RUS.some((item) =>
            item.includes(gamerFigure.toLowerCase())
          );
        } else {
          return false;
        }
      };

      if (gamerFigure === null) {
        const gamerDecision = confirm('Вы точно хотите выйти?');
        if (gamerDecision) {
          return alert(`Компьютер: ${result.computer}
               Вы: ${result.player}`);
        } else {
          return start();
        }
      }
      if (gamerFigure === '' || checkGamerFigure() === false) {
        return start();
      }
      if (checkGamerFigure() === true) {
        const checkedGamerFigure = FIGURES_RUS.find((item) =>
          item.includes(gamerFigure.toLowerCase())
        );
        console.log('checkedGamerFigure: ', checkedGamerFigure);
        if (checkedGamerFigure === computerFigure) {
          alert(`Компьютер выбрал: ${computerFigure}
               Вы выбрали: ${checkedGamerFigure}
               Ничья`);
          return start();
        }
        if (
          (computerFigure === 'камень' && checkedGamerFigure === 'бумага') ||
          (computerFigure === 'ножницы' && checkedGamerFigure === 'камень') ||
          (computerFigure === 'бумага' && checkedGamerFigure === 'ножницы')
        ) {
          result.player++;
          alert(`Компьютер выбрал: ${computerFigure}
               Вы выбрали: ${checkedGamerFigure}
               Вы выиграли!`);
          return start();
        } else if (
          (computerFigure === 'камень' && checkedGamerFigure === 'ножницы') ||
          (computerFigure === 'ножницы' && checkedGamerFigure === 'бумага') ||
          (computerFigure === 'бумага' && checkedGamerFigure === 'камень')
        ) {
          result.computer++;
          alert(`Компьютер выбрал: ${computerFigure}
               Вы выбрали: ${checkedGamerFigure}
               Компьютер выиграл :(`);
          return start();
        }
      }
    };
  };

  window.gameRPS = game;
})();

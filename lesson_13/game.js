'use strict';

(() => {
  const FIGURES_RUS = ['ножницы', 'камень', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getComputerFigure = (lang) => {
    const randomInt = getRandomIntInclusive(0, lang.length - 1);
    return lang[randomInt];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang =
      language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const computerFigure = getComputerFigure(lang);
      console.log('computerFigure: ', computerFigure);
      const gamerFigure =
        lang === FIGURES_ENG
          ? prompt('Rock, scissors, paper?', 'paper')
          : prompt('Камень, ножницы, бумага?', 'камень');
      console.log('gamerFigure: ', gamerFigure);

      const checkGamerFigure = () => {
        if (
          gamerFigure !== null &&
          gamerFigure !== '' &&
          gamerFigure !== undefined
        ) {
          return lang.some((item) => item.includes(gamerFigure.toLowerCase()));
        } else {
          return false;
        }
      };

      if (lang === FIGURES_RUS) {
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
          const checkedGamerFigure = lang.find((item) =>
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
          } else {
            result.computer++;
            alert(`Компьютер выбрал: ${computerFigure}
                   Вы выбрали: ${checkedGamerFigure}
                   Компьютер выиграл :(`);
            return start();
          }
        }
      }
      if (lang === FIGURES_ENG) {
        if (gamerFigure === null) {
          const gamerDecision = confirm('Are you sure you want to come out?');
          if (gamerDecision) {
            return alert(`Computer: ${result.computer}
          You: ${result.player}`);
          } else {
            return start();
          }
        }
        if (gamerFigure === '' || checkGamerFigure() === false) {
          return start();
        }
        if (checkGamerFigure() === true) {
          const checkedGamerFigure = lang.find((item) =>
            item.includes(gamerFigure.toLowerCase())
          );
          console.log('checkedGamerFigure: ', checkedGamerFigure);
          if (checkedGamerFigure === computerFigure) {
            alert(`Computer has chosen: ${computerFigure}
                   You have chosen: ${checkedGamerFigure}
                   The draw`);
            return start();
          }
          if (
            (computerFigure === 'rock' && checkedGamerFigure === 'paper') ||
            (computerFigure === 'scissors' && checkedGamerFigure === 'rock') ||
            (computerFigure === 'paper' && checkedGamerFigure === 'scissors')
          ) {
            result.player++;
            alert(`Computer has chosen: ${computerFigure}
             You have chosen: ${checkedGamerFigure}
             You win!`);
            return start();
          } else {
            result.computer++;
            alert(`Computer has chosen: ${computerFigure}
                   You have chosen: ${checkedGamerFigure}
                   Computer wins :(`);
            return start();
          }
        }
      }
    };
  };

  window.gameRPS = game;
})();

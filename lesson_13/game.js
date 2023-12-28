'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getComputerFigure = (lang) => {
    const randomInt = getRandomIntInclusive(0, lang.length - 1);
    return lang[randomInt];
  };

  const RULang = {
    figures: ['ножницы', 'камень', 'бумага'],
    exitConfirmation: 'Вы точно хотите выйти?',
    computer: 'Компьютер',
    you: 'Вы',
    computersChoice: 'Компьютер выбрал',
    yourChoice: 'Вы выбрали',
    theDraw: 'Ничья',
    youWin: 'Вы выиграли!',
    computerWins: 'Компьютер выигрывает :(',
  };
  const ENLang = {
    figures: ['scissors', 'rock', 'paper'],
    exitConfirmation: 'Are you sure you want to come out?',
    computer: 'Computer',
    you: 'You',
    computersChoice: 'Computer has chosen',
    yourChoice: 'You have chosen',
    theDraw: 'The draw',
    youWin: 'You win!',
    computerWins: 'Computer wins :(',
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ? ENLang : RULang;

    return function start() {
      const computerFigure = getComputerFigure(lang.figures);
      console.log('computerFigure: ', computerFigure);
      const gamerFigure = prompt(
        `${lang.figures[0]}, ${lang.figures[1]}, ${lang.figures[2]}`,
        `${lang.figures[0]}`
      );
      console.log('gamerFigure: ', gamerFigure);

      const checkGamerFigure = () => {
        if (
          gamerFigure !== null &&
          gamerFigure !== '' &&
          gamerFigure !== undefined
        ) {
          return lang.figures.some((item) =>
            item.includes(gamerFigure.toLowerCase())
          );
        } else {
          return false;
        }
      };

      if (gamerFigure === null) {
        const gamerDecision = confirm(lang.exitConfirmation);
        if (gamerDecision) {
          return alert(`${lang.computer}: ${result.computer}
          ${lang.you}: ${result.player}`);
        } else {
          return start();
        }
      }
      if (gamerFigure === '' || checkGamerFigure() === false) {
        return start();
      }
      if (checkGamerFigure() === true) {
        const checkedGamerFigure = lang.figures.find((item) =>
          item.includes(gamerFigure.toLowerCase())
        );
        console.log('checkedGamerFigure: ', checkedGamerFigure);
        if (checkedGamerFigure === computerFigure) {
          alert(`${lang.computersChoice}: ${computerFigure}
           ${lang.yourChoice}: ${checkedGamerFigure} 
           ${lang.theDraw}`);
          return start();
        }
        if (
          (computerFigure === lang.figures[1] &&
            checkedGamerFigure === lang.figures[2]) ||
          (computerFigure === lang.figures[0] &&
            checkedGamerFigure === lang.figures[1]) ||
          (computerFigure === lang.figures[2] &&
            checkedGamerFigure === lang.figures[0])
        ) {
          result.player++;
          alert(`${lang.computersChoice}: ${computerFigure}
        ${lang.yourChoice}: ${checkedGamerFigure}
        ${lang.youWin}`);
          return start();
        } else {
          result.computer++;
          alert(`${lang.computersChoice}: ${computerFigure}
                 ${lang.yourChoice}: ${checkedGamerFigure}
                 ${lang.computerWins}`);
          return start();
        }
      }
    };
  };

  window.gameRPS = game;
})();

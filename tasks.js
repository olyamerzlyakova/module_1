"use strict";

{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
  } else if (rain === 0) {
    console.log("Дождя нет!");
  }
}

{
  const mathScore = +prompt("Введите кол-во баллов по математике", 85);
  const russianLangScore = +prompt(
    "Введите кол-во баллов по русскому языку",
    67
  );
  const computerScienceScore = +prompt(
    "Введите кол-во баллов по информатике",
    78
  );

  const totalScore = mathScore + russianLangScore + computerScienceScore;

  const result =
    totalScore >= 265
      ? "Поздравляю, вы поступили на бюджет!"
      : "К сожалению, вы не поступили на бюджет";

  console.log(result);
  alert(result);
}

{
  const amountOfMoney = +prompt("Сколько денег вы хотите снять?", 3000);

  if (amountOfMoney >= 100 && amountOfMoney % 100 === 0) {
    console.log("Банкомат может выдать эту сумму");
  } else {
    console.log("Банкомат не может выдать эту сумму");
  }
}

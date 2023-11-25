"use strict";

{
  let tax;
  const income = +prompt("Введите ваш текущий доход", 50000);

  switch (true) {
    case 0 < income && income <= 15000:
      tax = income * 0.13;
      console.log(`Сумма налога составляет ${tax}`);
      break;
    case 15000 < income && income <= 50000:
      tax = income * 0.2;
      console.log(`Сумма налога составляет ${tax}`);
      break;
    case income > 50000:
      tax = income * 0.3;
      console.log(`Сумма налога составляет ${tax}`);
      break;
    default:
      console.log("Введены некорректные данные");
      break;
  }
}

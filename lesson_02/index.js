"use strict";

/*
{
  const productTitle = 'Coffee grinder';
  const productCategory = 'Kitchen appliances';
  const productQuantity = 7;
  const productPrice = 1000;

  console.log(`Название товара: ${productTitle}`);
  console.log(`Общая сумма товара: ${productQuantity * productPrice}`);
}

{
  const productTitle = 'Blanket';
  const productCategory = 'Home textiles';
  const productQuantity = 3;
  const productPrice = 1999;

  console.log(`Название товара: ${productTitle}`);
  console.log(`Общая сумма товара: ${productQuantity * productPrice}`);
}
*/

{
  const productTitle = prompt("Название товара?", "Плед");
  const productCategory = prompt("Категория товара?", "Текстиль для дома");
  const productQuantity = +prompt("Количество товара?", 3);
  const productPrice = +prompt("Цена товара?", 1999);

  if (Number.isFinite(productQuantity) && Number.isFinite(productPrice)) {
    console.log(
      `На складе ${productQuantity} единицы товара "${productTitle}" 
      на сумму ${productQuantity * productPrice} рублей.`
    );
  } else {
    console.log("Вы ввели некорректные данные");
    alert("Вы ввели некорректные данные");
  }
}

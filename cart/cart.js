"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(itemTitle, itemPrice, numberOfItems = 1) {
    this.items.push({
      itemTitle: itemTitle,
      itemPrice: itemPrice,
      numberOfItems: numberOfItems,
    });

    this.increaseCount(numberOfItems);
    this.calculateItemPrice();
    this.getTotalPrice();
  },
  increaseCount(number) {
    return (this.count += number);
  },
  calculateItemPrice() {
    this.totalPrice = this.items[0].itemPrice * this.items[0].numberOfItems;
  },
  clear() {
    return (this.items = []), (this.totalPrice = 0), (this.count = 0);
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add("Попкорн", 100, 3);
cart.print();
cart.clear();

cart.add("Лего Хогвартс", 5000, 2);
cart.print();
cart.clear();

cart.add("Плед", 1000);
cart.print();

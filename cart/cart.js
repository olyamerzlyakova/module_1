"use strict";

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(value) {
    return value;
  },

  add(itemTitle, itemPrice, numberOfItems = 1) {
    this.items.push({
      itemTitle: itemTitle,
      itemPrice: itemPrice,
      numberOfItems: numberOfItems,
    });

    this.increaseCount(numberOfItems);
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    return this.items[0].itemPrice * this.items[0].numberOfItems;
  },

  clear() {
    const cleanCart = {
      items: [],
      count: 0,
      totalPrice: 0,
    };
    Object.assign(cart, cleanCart);
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

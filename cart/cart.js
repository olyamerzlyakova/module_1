'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(val) {
    this.price = val;
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(itemTitle, itemPrice, numberOfItems = 1) {
    this.items.push({
      itemTitle,
      itemPrice,
      numberOfItems,
    });

    this.increaseCount(numberOfItems);
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    return (
      this.items[0].itemPrice *
      this.items[0].numberOfItems *
      (1 - this.discount / 100)
    );
  },

  clear() {
    this.totalPrice = 0;
    this.discount = 0;
    const cleanCart = {
      items: [],
      count: 0,
    };
    Object.assign(cart, cleanCart);
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Скидка составила ${this.discount}%`);
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Попкорн', 100, 10);
cart.print();
cart.clear();

cart.setDiscount = 'METHED';

cart.add('Попкорн', 100, 10);
cart.print();
cart.clear();

cart.add('Лего Хогвартс', 5000, 2);
cart.print();
cart.clear();

cart.setDiscount = 'NEWYEAR';

cart.add('Лего Хогвартс', 5000, 2);
cart.print();
cart.clear();

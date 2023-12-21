'use strict';

const rectangle = {
  rectangleWidth: 5,
  rectangleHeight: 5,
  set width(val) {
    if (isFinite(val)) {
      this.rectangleWidth = val;
    }
  },
  set height(val) {
    if (isFinite(val)) {
      this.rectangleHeight = val;
    }
  },
  get perimeter() {
    return `${2 * (this.rectangleWidth + this.rectangleHeight)}см`;
  },
  get area() {
    return `${this.rectangleWidth * this.rectangleHeight}см`;
  },
};

rectangle.width = 10;
rectangle.height = 3;

console.log('Периметр прямоугольника: ', rectangle.perimeter);
console.log('Площадь прямоугольника: ', rectangle.area);

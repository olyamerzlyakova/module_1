"use strict";

const getLeapYearsArr = (n, m) => {
  let maxYear = n > m ? n : m;
  let minYear = n > m ? m : n;
  const leapYears = [];

  const isLeap = (year) =>
    year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

  for (let i = minYear; i <= maxYear; i += 1) {
    if (isLeap(i) === true) {
      leapYears.push(i);
    }
  }
  return leapYears;
};

const leapYearsArr = getLeapYearsArr(2004, 2010);
console.log("leapYearsArr: ", leapYearsArr);

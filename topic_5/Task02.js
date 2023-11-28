"use strict";

const getCapitalizedString = (str) => {
  let capitalizedString = str[0].toUpperCase() + str.substring(1).toLowerCase();

  return capitalizedString;
};

console.log(getCapitalizedString("доБРыЙ ВеЧер"));

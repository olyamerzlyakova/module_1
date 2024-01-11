'use strict';

const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');

itemThree.after(itemFour);

const itemFourProps = document.querySelector('.item_two .props__item_four');
const itemFourPropsList = document.querySelectorAll(
  '.item_four .props__item_four'
);

itemFourPropsList[3].before(itemFourProps);

const itemThreeContent = itemThree.querySelector('.content');
const itemThreePropsList = itemThreeContent.querySelector('.props__list');
const itemFiveContent = document.querySelector('.item_five .content');
const itemFivePropsList = itemFiveContent.querySelector('.props__list');

itemThreeContent.append(itemFivePropsList);
itemFiveContent.append(itemThreePropsList);

const itemTwoProps = document.querySelectorAll('.item_six .props__item_two');
const itemTwoPropsList = document.querySelector('.item_two .props__list');

itemTwoPropsList.append(...itemTwoProps);

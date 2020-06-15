'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  tree.innerHTML = `
    <ul>
      ${Object.keys(data).map(item => `
      <li>
        ${item}
      </li>
        ${createTree(element, data[item])}
      `).join('')}
    </ul>
  `;

  return tree.innerHTML;
}

createTree(tree, food);

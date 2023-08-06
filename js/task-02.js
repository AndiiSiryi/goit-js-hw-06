const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.dir(ingredientsList);

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsList.insertAdjacentElement('beforeend', li)
});


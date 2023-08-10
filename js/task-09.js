function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEL = document.querySelector('.widget');
const buttonEl = document.querySelector('.change-color');
const currentColorEl = document.querySelector('.color'); 

buttonEl.addEventListener('click', onButton);

function onButton(evt) {
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  
  document.body.style.backgroundColor = randomColor
  currentColorEl.textContent = randomColor;
}
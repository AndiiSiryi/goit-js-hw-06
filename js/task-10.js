function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divControl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxesEl.innerHTML = "";
  const amount = divControl.value;
  console.log(amount);

  const boxes = [];
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  divControl.value = "";
}




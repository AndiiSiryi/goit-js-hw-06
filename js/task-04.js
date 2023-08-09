let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.addEventListener('click', onClick)

function onClick (evt) {
    const action = evt.target.dataset.action;
    
    if (action === 'increment') {
      counterValue += 1;
    } else if (action === 'decrement') {
      counterValue -= 1;
    }
    valueEl.textContent = counterValue;
  }


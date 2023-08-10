const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');
// console.log(inputEl);
inputEl.addEventListener('input', onInput);

function onInput(evt) {
    const userName = evt.currentTarget.value;
    // console.log(userName);
    titleEl.textContent = userName === '' ? 'Anonymous' : userName;
    // console.log(titleEl);
};
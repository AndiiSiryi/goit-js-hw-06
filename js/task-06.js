const inputEl = document.querySelector('#validation-input');
const dataLength = parseInt(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation(evt) {
    console.log(evt);
    const textEl = evt.currentTarget.value;
  
    console.log(textEl);
    if (textEl.length === dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

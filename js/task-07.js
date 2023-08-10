const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener("input", onInput);

function onInput(evt) {
    const Size = evt.currentTarget.value;
    spanEl.style.fontSize = Size + 'px';
    console.log(Size);
}
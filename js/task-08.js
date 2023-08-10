const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();

    console.log(evt.currentTarget.elements);

    if (evt.currentTarget.elements.email.value === '' ||
        evt.currentTarget.elements.password.value === '') {
        alert('Всі поля повинні бути заповнені!')
    } else {
        const { email, password } = evt.currentTarget.elements;
        const formDataObject = {
            email: email.value,
            password: password.value,
        };
        
        console.log(formDataObject);
        formEl.reset();
    };
};
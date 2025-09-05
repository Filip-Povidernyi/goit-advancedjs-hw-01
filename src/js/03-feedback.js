import throttle from "lodash.throttle";

const LS_KEY = "feedback-form-state";

let form = document.querySelector('.feedback-form');

let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || { email: '', message: '' };
const { email, message } = form.elements;
email.value = dataForm.email;
message.value = dataForm.message;

const onInputData = evt => {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
};

const onFormSubmit = evt => {
    evt.preventDefault();

    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    };

    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(LS_KEY);
    form.reset();
};

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

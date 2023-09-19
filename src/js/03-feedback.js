
import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;

        console.log('Дані форми:');
        console.log({ email: emailInput.value, message: messageTextarea.value });
    }
}

loadFromLocalStorage(); 


function saveToLocalStorage() {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const throttledSaveToLocalStorage = throttle(saveToLocalStorage, 500);

emailInput.addEventListener('input', function () {
    throttledSaveToLocalStorage();
});

messageTextarea.addEventListener('input', function () {
    throttledSaveToLocalStorage();
});


feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const messageValue = messageTextarea.value;

    
    if (!emailValue || !messageValue) {
        alert('Будь ласка, заповніть усі поля форми.');
        return;
    }

    localStorage.removeItem('feedback-form-state');

    console.log('Дані форми:');
    console.log({ email: emailValue, message: messageValue });

    emailInput.value = '';
    messageTextarea.value = '';
});

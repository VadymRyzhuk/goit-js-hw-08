
import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


function saveToLocalStorage() {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
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
    

    localStorage.removeItem('feedback-form-state');

   
    const emailValue = emailInput.value;
    const messageValue = messageTextarea.value;

    
    console.log('Дані форми:');
    console.log('Email:', emailValue);
    console.log('Message:', messageValue);

    
    emailInput.value = '';
    messageTextarea.value = '';
});

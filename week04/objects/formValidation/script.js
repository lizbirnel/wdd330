//const name = document.getElementById('name');
//const password = document.getElementById('password');
//const form = document.getElementById('form');
//const errorElement = document.getElementById('error');

const name = document.querySelector("#name");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");

form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (password.value.length <= 6 || password.value.length >= 20) {
        messages.push('Password must be between 6 and 20 characters in length.');
    }

   /* if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }*/

    if (password.value === 'password') {
        messages.push('Password cannot be password.');
    }

    if (password.value !== password2.value) {
        messages.push('Passwords do not match.')
    }

    if (messages.length > 0) {
        e.preventDefault();    
        errorElement.innerText = messages.join(', ');
    }
    
});
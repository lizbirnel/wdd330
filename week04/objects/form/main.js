const form = document.forms.search;
console.log(form);

const [input,button] = form.elements;
console.log(form.elements);

/*const input = form.searchInput;
console.log(input);*/

const form2 = document.forms['search'];
form2.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
//This JS code adds an alert to the user when the form is submitted. 

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}
//preventing the default of submitting to the URL, so the page doesn't try to leave the current view

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
//alerts to the user the value of their search criteria

input.value = 'Search Here';
//adds "Search Here" to the input field value on page load

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
//these two event listeners allow the "search here" value in the input field to disappear when the user clicks in the box, and reappear when clicked out of the box




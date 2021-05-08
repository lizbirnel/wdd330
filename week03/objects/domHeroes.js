const body = document.body;
//check type of body
console.log(typeof body);

console.log(body.nodeType);

console.log(body.nodeName);

console.log( h1 = document.getElementById('title'));

console.log( listItems = document.getElementsByTagName('li'));

console.log( heroes = document.getElementsByClassName('hero'));

console.log(heroes.length);

console.log(document.getElementsByClassName('villain').length);

console.log(document.querySelector('#bats')) ;

console.log(wonderWoman = document.querySelector('li:last-child') );

console.log(heroes = document.getElementById('roster')) ;

console.log(heroes.children.length);

wonderWoman = document.querySelector('ul#roster li:last-child');
console.log(wonderWoman.parentNode);

console.log(wonderWoman.nextSibling);

const textNode = wonderWoman.firstChild;
console.log(wonderWoman.firstChild);

console.log(wonderWoman.textContent);

//Get attribute

console.log(wonderWoman.getAttribute('class'));

//set attribute changes the attribute
wonderWoman.setAttribute('class', 'villain');
console.log(wonderWoman.getAttribute('class'));

//set attribute also adds new attribute
wonderWoman.setAttribute('id', 'amazon');
console.log(wonderWoman.getAttribute('id'));

//use . notation

console.log(wonderWoman.id);

//add a class without overwriting any
wonderWoman.classList.add('warrior');
console.log(wonderWoman.className);

//remove a class
wonderWoman.classList.remove('warrior');
console.log(wonderWoman.className);

//creating an element
const flash= document.createElement('li');
//create text node to add content to the element
const flashText = document.createTextNode('Flash');
//link together by appending node
flash.appendChild(flashText);

console.log(flash.textContent);

const aquaman = document.createElement('li');
const aquamanText = document.createTextNode('Aquaman');
aquaman.appendChild(aquamanText);
console.log(aquaman.textContent);

heroes.appendChild(flash);

heroes.insertBefore(aquaman, wonderWoman);

heroes.appendChild(wonderWoman);

heroes.removeChild(aquaman);

heroes.appendChild(aquaman);

console.log(heroes.innerHTML);

//h1.innerHTML = 'Suicide Squad';

const superman = heroes.children[0];
superman.style.border = "red 2px solid";

superman.style.backgroundColor = 'blue';

superman.style.display = 'none';

superman.style.display = 'block';



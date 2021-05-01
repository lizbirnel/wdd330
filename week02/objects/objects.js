console.log("Hi");

const message = "Hello World!";
console.log(message);

console.log(typeof message);
console.log(typeof 'hello');
console.log(typeof 10);
console.log(typeof true);
console.log(typeof {ninja: 'turtle'});
console.log(typeof ["hi", message]);

console.log(3 + 5);

let x=5, y=6, z=7;
console.log(x + y + z);

let scoreTotal = x + y + z;
console.log(scoreTotal);

const firstname="Liz";
console.log(firstname);

/* Cannot reassign a variable/constant that has been originally declared with 'const'. I tried that hear by renaming 'firstname' from 'Liz' to 'Dan' and this throws an error.
firstname = "Dan";
console.log(firstname);
*/

const a=1;
console.log(a);

console.log(firstname.length);

console.log(firstname['length']);
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.charAt(2));
console.log(firstname.includes('z'));

const newMessage = (message + ' ').concat(firstname + ' is here!');
console.log(newMessage);
//test to see if number is integer
console.log(Number.isInteger(55));
console.log(Number.isInteger(3.14159));
//exponential notation
console.log (1e6);
console.log(2e-6);
const num1= 6;
console.log (num1.toExponential());
//rounding numbers
const num2= 3.1415926;
console.log(num2.toFixed(3));

console.log('2' + 9);
console.log(2 + 9);

console.log(!true);
console.log(!false);
//checking soft equality. use = to assign, use == as equality operator 
console.log(firstname=="Liz");
console.log(firstname=="Dan");

//checking hard equality use === to test for equality and same data type
console.log(firstname ==="Liz");
//checking inequality with !=
console.log(16 != '16');
console.log(16 !== '16');

//equality/inequality with logical operators
console.log(8>7 && 6<9);
console.log((8>'8') || (8==='8'));


//Superman's real name Quiz from Chapter 2

/*const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);*/

//Chapter 3 code examples
//create array named heroes
const heroes = [];
console.log(heroes[0]);
//this is undefined because the array heroes is empty right now.


heroes[0]= 'Superman';
console.log(heroes[0]);
//now heroes[0] is defined.

//reassign values to the array
heroes[0] = 'Batman';
console.log(heroes[0]);

heroes[1]= 'Wonder Woman';
heroes[2]= 'Flash';
//assign to any position in the array (this leaves 3 and 4 positions undefined)
heroes[5]= 'Aquaman';

//display entire array
console.log(heroes);

//array literal
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
console.log(avengers);

delete avengers[3];
console.log(avengers);
//'Hulk' at position 3 is now deleted, leaving empty spot

//declare variables in an array.
const [m,n]= [1,2];
console.log([m,n]);
console.log(m);

const avengers1 = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
//find the length of array avengers1
console.log(avengers1.length);
//find the last item in the array by using length property
console.log(avengers1[avengers1.length - 1]);

//change length of array
avengers1.length = 8;
console.log(avengers1.length);
console.log(avengers1);

avengers1.splice(3,1,'Scarlett Witch');
console.log(avengers1);
//this replaces 'Thor' at position 3 with 'Scalett Witch'


//Sets

const list = new Set();
console.log(list);
list.add(1);
console.log(list);
list.add(2).add(3).add(4);
console.log(list);
//ignores repeat values
list.add(2);
console.log(list);

//add multiple values with an array
const numbers = new Set([1,2,3]);
console.log(numbers);
//any repeated numbers are only shown once
const moreNumbers = new Set([7,7,7,7,7,8,8,8,8,9,9,9,9]);
console.log(moreNumbers);
//if string is used as argument in new set, each character is added as a separate element
const letters = new Set('hello');
console.log(letters);
//add separate words
const words = new Set().add('the').add('quick').add('brown').add('fox');
console.log(words);
//duplicate values if added through unique non-primitive values like arrays
const arrays = new Set().add([1]).add([1]);
console.log(arrays);

//convert set to array
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
const shoppingArray = [...shoppingSet];
console.log(shoppingArray);

//creating maps
const romanNumerals = new Map();
romanNumerals.set(1, 'I');
console.log(romanNumerals);
romanNumerals.set(2, 'II').set(3, "III").set(4, "IV").set(5, 'V');
console.log(romanNumerals);

console.log(romanNumerals.has(4));

//convert map to array
[...romanNumerals];
console.log(romanNumerals);



//Chapter 4

//Function Declarations (nothing is calling this function, so it hasn't been run yet)
function hello() {
    console.log('Hello World!');
}

//Function Expressions (again, not calling it, so nothing will happen here)

const goodbye = function() {
    console.log('Goodbye World!');
};

//calling function
console.log (goodbye);

let price= 20;
function discount(price, amount=10) {
    return price*(100-amount)/100;
}

console.log(discount(20));

//arrow functions

const add = (x,y) => x + y;

const hello2 = () => alert ('Hello World!');




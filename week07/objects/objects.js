"use strict";
//-------------Chapter 11 Further Functions--------------//

function square(x) {
    return x*x;
}

console.log(square.length);


function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
console.log(sayHello.call(clark));
console.log(sayHello.call(bruce));

function sayHello2(greeting='Hello'){
    return`${ greeting }, my name is ${ this.name }`;
}

console.log(sayHello2.call(clark, 'Nice to meet you'));

//caching: Memoization 
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

console.log(square(3));
console.log(square(-11));
console.log(square.cache);
console.log(square(5));
console.log(square(9));
console.log(square.cache);

//IIFE Immediately Invoked Function Expressions
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();

//redefine itself
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the t-shirt');
    }
}
party();
party();

//recursive functions
function factorial(n){
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(2));

//event-driven asynchronous programming
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}
function selfDestruct(){
    console.log('Boooom!');
}
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

//promises
const dice = {
    sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    console.log('Before the roll');
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    console.log('After the roll');
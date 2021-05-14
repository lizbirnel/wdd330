"use strict";
//-------------Chapter 12 OOP--------------//

const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const redDice = new Dice();
// Dice { sides: 6, roll: [Function] }

console.log(redDice.roll());

const whiteDice = new Dice(4);
console.log(whiteDice.roll());

class Dice2 {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const blueDice = new Dice2(20);
console.log(blueDice.roll());

class Dice3 {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing random numbers'
    }
}

console.log(Dice3.description());

/*----------Prototypal inheritance model--------*/
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');

console.log(leo.name);
console.log(leo.sayHi());
//Add a weapon class to the turtle
Turtle.prototype.weapon = 'Hands';
console.log(leo.weapon);
//add a method to turtle class
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }

console.log(leo.attack());
//create new turtle
const raph = new Turtle('Raphael');
console.log(raph.name);
console.log(raph.sayHi());
console.log(raph.weapon);
console.log(raph.attack());

console.log(Object.getPrototypeOf(raph));
console.log(raph.__proto__);

//overwrite properties and methods for individual turtles
leo.weapon = 'Katana Blades';
console.log(leo.weapon);

raph.weapon = 'Sai';
console.log(raph.weapon);

console.log(leo);

//add prototype of food
Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

console.log(raph.eat());

const mike = new Turtle('Michelangelo');
console.log(mike.eat());

mike.weapon = 'Nunchakus';
console.log(mike.attack());


class Turtle2 {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

const raph2 = new Turtle2('Raphael','Red');
console.log(raph2._color);
//returns undefined because _color is private

console.log(raph2.getColor());
//I can access this private property using the getColor function

raph2._color = 'blue';
console.log(raph2.getColor());
//color did not change because you can't reassign a private property

raph2.setColor('blue');
console.log(raph2.getColor());
//using the setColor() function allows a private property to be reassigned.




/*--------------Chapter 15------------*/















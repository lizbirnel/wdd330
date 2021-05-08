"use strict";
//----------Object methods "this"-------------------------------//

//this first function returns undefined because the function makeUser() returned "this" outside of an object.

/*function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log(user.ref.name);*/


//this second way of referencing "this" works because it is defined within the function ref() inside an object.  

function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser2();

console.log(user.ref().name);

//-------------Create Calculator task----------------//

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    //I commented out the user prompt on this so it wouldn't load on the page and just hardcoded the values for this example here.

    read() {
        //this.a = parseFloat(prompt('enter #') );
        //this.b = parseFloat(prompt('enter #') );
        this.a = 2;
        this.b = 5;
    }
};

calculator.read();
console.log (calculator.sum() );
console.log (calculator.mul() );

//---------Chaining task---------------//

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { //shows the current step
      console.log( 'step ' + this.step );
      return this;
    }
};
//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep();
ladder.up().up().down().showStep(); 

//-------------Chapter 5 Objects--------------//

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
//accessing properties using dot notation and bracket notation.
console.log(superman.name);
console.log(superman['name']);
//access property name that breaks the naming rules.
console.log(superman["real" + " " + "name"]);


const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!'}; 
console.log(hulk);
//this [] concatenation created the property of catchPhrase

const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true};
console.log(captainBritain);
//returns false, because of the ternary condition where bewitched is true, which is false. Complex!!

//symbol date type used as property key
const name = Symbol('name');
const supergirl = {[name]: 'Supergirl'};
console.log(supergirl[name]);

const realName = Symbol('real name');
supergirl[realName] = 'Kara Danvers';
console.log(supergirl);

//can be used for other objects
const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };
console.log(daredevil);

//calling method like calling function
console.log(superman.fly());
console.log(superman['fly']() );

//to find all properties of an object use a for in loop. 
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}

//returns array of the keys of the object
for(const key of Object.keys(superman)) {
    console.log(key);
}

//returns array of all of the object's values
for(const value of Object.values(superman)) {
    console.log(value);
}

//add a property
superman.city = 'Metropolis';
console.log(superman);

//change a value of a property
console.log(superman['real name'] = 'Kal-El');

//delete a property
delete superman.fly;
console.log(superman); //fly is no longer in this object

//nested objects
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}

console.log(jla.batman.realName);


//dice example for this keyword

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log(dice.roll());

console.log(Math.floor (6 * Math.random() ) );

//-----------Chapter 7 events---------------//

addEventListener('click', () => console.log('You Clicked!'));



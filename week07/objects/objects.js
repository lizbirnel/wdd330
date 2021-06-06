"use strict";
//-------------Chapter 10 Debugging--------------//

function squareRoot(number) {
    if (number < 0) {
        throw new RangeError('You cannot find the square root of negative square root of negative numbers')
    }
    return Math.sqrt(number);
}
//gives the value of square root of 64
console.log(squareRoot(64));
//throws an error because of the negative number
console.log(squareRoot(-1));






'use strict';

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return { name: 'John' };
};

(function () {
    return console.log('IIFE');
})();

console.log(add(2, 2));
console.log(square(2));
console.log(giveMeAnswer());
console.log(multiply(2, 4));
console.log(getPerson());

var numbers = [1, 2, 3, 4, 5];

var sum = 0;
numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum);

var squared = numbers.map(function (n) {
    return n * n;
});
console.log(squared);

var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello, my name is ' + _this.name);
        }, 1000);
    }
};

person.greet();
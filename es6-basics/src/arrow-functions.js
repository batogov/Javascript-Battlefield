let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let multiply = (x, y) => {
    let result = x * y;
    return result;
};

let getPerson = () => ({ name: 'John' });

(() => console.log('IIFE'))();


console.log(add(2, 2));
console.log(square(2));
console.log(giveMeAnswer());
console.log(multiply(2, 4));
console.log(getPerson());



let numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);



let person = {
    name: 'Bob',
    greet: function() {
        window.setTimeout(() => {
            console.log('Hello, my name is ' + this.name);
        }, 1000);
    }
};

person.greet();

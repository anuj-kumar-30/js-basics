// Numbers:
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8973
console.log(otherNumber.toPrecision(3)); // it returns a string value 
console.log(typeof(otherNumber.toPrecision(4))); // after 4 digit it is going to round off the number to that digit eg: 123.8973: precision(3)=124 roundng of .8

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // this is going to add commons according to the indian standard
console.log(hundreds.toLocaleString('en-US')); // 1,000,000

// Maths
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.round(4.5)); //5
console.log(Math.round(4.2)); //4
console.log(Math.ceil(4.2)); //5 ceil chooses the upper value even if its .1 is greater then the lower value
console.log(Math.floor(4.9)); //4 floor chooses the lower value even if its very close the upper value interger.
console.log(Math.min(2,3,4,4,3,2,3,4,45,3,3,2));
console.log(Math.max(2,3,4,4,3,2,3,4,45,3,3,2));
console.log(Math.random()); // returns random value [0,1]
// Find the random value between 10 to 20
let mn = 10;
let mx = 20;
let randomValue = Math.floor((Math.random() * (mx-mn+1))+mn);
console.log(randomValue);

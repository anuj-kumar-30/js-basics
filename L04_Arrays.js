/*
# Array in JS:
- Collections of items in linear formate.
- Position matters.
- Array is object type.
- Mutable in nature

- Create array:
    - let heroes = ["iron-man", "Hulk", "Thor"]
    - let marks = [96, 56, 77]
    - let info = ["Anuj kumar", 24, "Bihar"]
- Methods:
    - marks.length
- Array Indices:
    - arr[0], arr[1], arr[2], ...
- Looping over an array:
- Arrays Method:
    - push()
    - pop()
    - toString()
    - concat(): join multiple arrays
    - unshift(): add to start
    - shift(): delete from start and return
    - slice(): returns a piece of the array, does change our original array
    - splice(startIdx, delCount, newEl1 ...): change original array (add, remove, replace) 
*/
let marks = [23, 34, 45, 67, 78];
console.log("Marks array =", marks);
console.log("Length of Marks array =", marks.length);
console.log("Type of Marks array =", typeof(marks));

// Looping over an array
console.log("Using for-of loop");
for(let mark of marks){
    console.log(mark);
}
console.log("Using for loop");
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

// Practice Questions
console.log("01 For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class");
let studentsMarks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
for(let marks of studentsMarks){
    totalMarks += marks;
}
console.log("Average Marks Of The Entire Class =", totalMarks/studentsMarks.length);

// 2nd problem
console.log("02 For a given array with prices of 5 items -> [250, 645, 300, 900, 50]\nAll items have an offer of 10% OFF on them. Change the array to store final price after applying offer");
let originalPrices = [250, 645, 300, 900, 50];
let discountPercentage = 10;
console.log("Original Prices of items =", originalPrices);
for(let idx in originalPrices){
    originalPrices[idx] = originalPrices[idx]-originalPrices[idx]*0.1;
}
console.log("Discounted Prices of items =", originalPrices);

// Array methods
// push
marks.push(95);
console.log("Adding 95 at the end of the Marks array =", marks);
// pop
marks.pop();
console.log("Removing Last element from the Marks array =", marks);
// toString
marks = marks.toString()
console.log("Converting Our Marks array into String type =", typeof(marks));
// concate
let marvelHeroes = ["IronMan", "Captain America", "Hulk"];
let dcHeroes = ["Superman", "Batman"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log("Contating marverlHeroes and dcHeroes arrays =", heroes);
// Unshift
heroes.unshift("Krish")
console.log("Using unshift method to add krish At the start of an Heroes array =", heroes);
// shift
heroes.shift()
console.log("Using shift method to delete from start of heroes array =", heroes);
// splice
heroes.splice(2, 2, "Krish", "Jaddu");
console.log("Using splice method =", heroes);

// Practice Problem
console.log("01. Create an arary to store companies -> ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']");
console.log("a. Remove the first company from the Array");
let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
companies.shift();
console.log(companies);
console.log("b. Remove Uber and Add ola in its place");
companies.splice(1,1,"Ola");
console.log(companies);
console.log("c. Add Amazon at the end");
companies.push("Amazon");
console.log(companies);
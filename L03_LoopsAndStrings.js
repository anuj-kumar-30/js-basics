/*
# Loops in JS
- for loop
- Infinite Loop(loop never ends)
- while loop
- Do while loop
    - atleast one time execution of code.
- for-of loop
    - for(let val of strVar){
        // some code
     }
    - for strings and arrays looping
- for-in loop
    - for(let var in objVal){
        // some codes
     }
    - mainly used in objects
*/

// for loop
console.log('***For Loop***');
for(let i=0;i<5;i++){
    console.log('loop Number = ',i+1);
}
// Calculate sum of 1 to 5
let sm = 0;
for(let i=1;i<=5;i++){
    sm+=i;
}
console.log('sum of 1 to 5(15) = ', sm);
// while loop
console.log("***While Loop***");
console.log("Print Hello world for 5 times");
let i = 0;
while(i<5){
    console.log('Hello World');
    i++;
}
// do while loop
console.log("***Do While Loop***");
i = 20;
do{
    console.log('Apna college');
    i++;
}while(i<=10)
// for-of loop
console.log("***for of loop***");
let fullName = "Anuj kumar";
console.log('for-of loop on fullName');
let len = 0;
for(let i of fullName){
    console.log("i =", i);
    len++;
}
console.log("Length of fullName =", len);
// for-in loop
console.log("***for in Loop***");
const student = {
    fullName: "Anuj kumar",
    age: 24,
    cgpa: 7.34,
};
console.log("For In Loop on student Object");
for(let i in student){
    console.log("Key =", i,"\nValue =", student[i], "\nType of =", typeof(student[i]));
}

// Practice Problem
console.log("01 Print all even numbers from 0 to 100")
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("02 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.");
let winNumber = 25;
let userNumber;
do{
    userNumber = prompt("Enter A Number: ");
    if(userNumber == winNumber){
        console.log("Congratulations! You have gussed the Correct Number");
        break;
    }
}while(winNumber!=userNumber);

/*
# Stings in JS
- Create string:
    - let str = "Hello World";
- String length:
    - str.length;
- String Indices:
    - str[0], str[2], ...
*/
console.log("## Strings ##")
let str = "Hello World";
console.log("String value =", str);
console.log("Length of Str =", str.length);
console.log("Index value at 0 =", str[0]);
/*
# Template Literals in JS
- A way to have embedded expressions in strings
    `this is a template literal`

# String Interpolation
- To create strings by doing substitution of placeholders
    - `string text ${expresion} string text`
*/
fullName = `Anuj kumar`;
console.log(fullName);
console.log(`Welcome ${fullName}`);

/*
# Escape Characters
- \n: new line
- \t: tab

# String Methods in JS
- These are built-in functions to manipulate a strings
    - str.toUpperCase()
    - str.toLowwerCase()
    - str.trim(): removes white spaces from start and end(but not in-between spaces)
    - str.slice(start, end): start: inclusive, end: non-inclusive
    - str.concat(str2): joins str2 with str1
    - str.replace(searchVal, newVal)
    - str.charAt(idx)
*/
let str1 = 'Hello', str2 = 'World';
console.log("toUpperCase =", str1.toUpperCase());
console.log("toLowerCase =", str1.toLowerCase());
console.log("trim(removing white-spaces) =", "  hello world   ".trim());
console.log("Slice 0 to 3 =", str1.slice(0, 3));
console.log("Concate str1 and str2 =", str1.concat(str2) );
console.log("Replace(H,_) =", str1.replace('H', "_"));
console.log("charAt(0) =", str.charAt(0));

// Practice Problems
console.log("01 Prompt user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.");
fullName = prompt("Enter Your Full Name");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);
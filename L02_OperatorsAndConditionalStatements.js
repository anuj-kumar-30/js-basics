// Single line comments

/*
Multi line comments
*/

/*
# Oerators in JS
- Used to perform some operation on data
- Arithmetic operators: 
    - +, -, *, /
    - %(modulus), **(Exponential)
    - a + b: 
        a,b: operands
        +: operator
- Unary Operators:
    - ++, --
    - a++: post increment
    - ++a: pre increment
- Assignment Operators:
    - =
    - +=
    - -=
    - *=
    - %=
    - **=
- Comparison Operators:
    - ==: is Equal to
    - ===: is Equal to and type
    - != is not Equal to
    - !== is not Equal to and type
    - >, >=, <, <=
- Logical Operators:
    - &&: And
    - ||: or
    - !: not
*/
let a = 5;
let b = 10;

// Arithmetic Operators
console.log('a+b: ', a+b);
console.log('a-b:', a-b);
console.log('a*b:', a*b);
console.log('a/b:', a/b);
console.log('b%a:', b%a);
console.log('b**2:', b**2);

// Unary Operators
console.log("a++:", a++);
console.log("++b:", ++b);

// Assignment operators
a = 5;
b = 2;
console.log("a+=2", a+=2); //a=7
console.log("a%=3", a%=3); //a=a%3=1

// Comparision Operators
a = 5, b = '5';
console.log("a==b: ", a==b); //true
console.log("a===b: ", a===b); //false
console.log("a!=b: ", a!=b); //flase
console.log("a!==b: ", a!==b); //true
console.log("a>b: ", a>b); //false
console.log("a>=b: ", a>=b); //true
console.log("a<b: ", a<b); //false
console.log("a<=b: ", a<=b); //true

// Logical Operator
let x = true;
let y = false;
console.log("true && false", x&&y); //false
console.log("true || false", x||y); //true
console.log("!true", !x); //false

/*
# Conditional Statements
- if statement:
- if-else statement:
- else-if statement:
*/
// if statement
age = 17
if (age>=18){
    console.log("Can vote");
}
if (age<18){
    console.log("Can't vote");
}

// if-else statement
let windowMode = "dark";
let color;
if (windowMode === 'dark'){
    color = 'Black';
}
else{
    color = 'White';
}
console.log(color);

// else-if statement
if (age<18){
    console.log("Junior");
}
else if(age>60){
    console.log("Senior");
}
else{
    console.log("Middle");
}

/*
# Ternary-Operators
- condition? true output: false output
*/
console.log(age>=18? "can vote": "can't vote");

// Practice Questions
// 01. Get user to input a number using prompt("Enter a number: "), Check if the number is a multiple of 5 or not.
console.log("Practice Problem 01");
let num = prompt("Enter a number: ");
if (num%5==0){
    console.log("Number is multiple of 5");
}
else{
    console.log("Number is not multiple of 5");
}
/*
02. Write a code which can give grades to students according to their scores:
    - 80-100: A
    - 70-79: B
    - 60-69: C
    - 50-59: D
    - 0-49: F
*/ 
console.log("Practice Problem 02");
let score = prompt("Enter Your Score: ");
if (score>=80){
    console.log("A");
}
else if(score>=70 && score<=79){
    console.log('B');
}
else if(score>=60){
    console.log('C');
}
else if(score>=50){
    console.log('D');
}
else{
    console.log('F');
}
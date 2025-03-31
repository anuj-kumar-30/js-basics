/*
# Functions In JS
- Block of code that performs a specific task, can be invoked whenever needed.
- It removes reduncy(repitation of code)

- Arrow functions:
    - Compact way of writing a function
    -   const functionName = (para1, para2, ...) => {
            // do some work    
        }
- For-each loop in Arrays
    - arr.forEach(callBackFunction)
    - CallbackFunction: here, it is a function to execute for each element in the array.
    - a callback is a function passed as an argument to another function.
    - it doesn't return anything
- map method in Array
    - it returns the arr.
    - arr.map(functionName)
    - Creates a new array with the results of some operation. The value its callback returns are used to form new array
- filter method in array
    - Creates a new array where condition is true.
    - eg: collection of even numbers
- Reduce method in array
    - Performs some operations & reduces the array to a single value. It returns that single value.
*/
function sumFunction(a, b){
    return a+b;
}
console.log("Sum of 2 and 3 using sum function =", sumFunction(2,3));

// Arrow function
const multiplyFunction = (a, b) => {
    return a*b;
}
console.log("Using Arrow Function to Multiply two numbers(2,3) =", multiplyFunction(2,3));

// Practice problem
console.log("01. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.");
function vowelsCount(str){
    str = str.toLowerCase();
    let ans = 0;
    for(let chr of str){
        if(
            chr == 'a' ||
            chr == 'e' ||
            chr == 'i' ||
            chr == 'o' ||
            chr == 'u'
        ) ans++;
    }
    return ans;
}
console.log('aeiouanuj numebr of vowels are: ', vowelsCount('AEIOUANUJ'));

// 2nd problem
console.log("02 Create an arrow function to perform the same task.");
const countVowels = (str) => {
    str = str.toLowerCase();
    let ans = 0;
    for(let ch of str){
        if(
            ch == 'a' ||
            ch == 'e' ||
            ch == 'i' ||
            ch == 'o' ||
            ch == 'u'
        ) ans++;
    }
    return ans;
};
console.log(countVowels("anujkumar"));

// for-each loop in arrays
let arr = [1,2,3,4];
arr = arr.forEach((num) => {console.log(num**2);});
console.log(arr);

// create a newArray with double the value of old array
// Note: arr is undefined because forEach returns undefined
let _arr = [1, 2, 3, 4]; // Re-declare arr since previous forEach emptied it
const doubleValue = (num) => {
    return num*2;
}
let newArr = _arr.map(doubleValue);
console.log(newArr);

const isEven = (num) => {
    return num%2==0;
}
let evenElements = _arr.filter(isEven);
console.log(evenElements);

// reduce method
let sm = _arr.reduce((res, val) => {return res+val;});
console.log(sm);

// Practice Problem
console.log("01 We are given array of marks of students. Filter our of the marks of students that scored 90+.");
let marks = [23,34,23,5,6,90,9,8,90,99,95];
let above90 = marks.filter((num) => {return num>90;})
console.log(above90);

console.log("02. Take a number n as input from user. Create an array of numbers from 1 to n.");
let n = prompt("Enter a number");
let nums = []
for(let i=1;i<=n;i++){
    nums.push(i);
}
console.log(nums);
console.log("a. Use the reduce method to calculate sum of all numbers in the array.");
let sumOfN = nums.reduce((res, val) => {return res+val;});
console.log(sumOfN);
console.log("b. Use the reduce method to calculate product of all numbers in the array.")
let productOfN = nums.reduce((res, val) => {return res*val;});
console.log(productOfN);
// creates a pop window
alert('hello')

// used to print the msg.
// ; used to confirm the peice of code is ended.
console.log("Hello world");

// variables in JS
// - it is a dynamically typed language, means we don't have to specify the data type of the variable
// - at runtime it assigns the data type for each variable according to the values 
fullName = "Anuj kumar"; //string
age = 24; //integer
price = 99.99; //float
radius = 14; //interger
a = null; //object
let y; //undefined
console.log(typeof(y));
/* 
# Variables naming rules:
- case sensitive
- Only letters, digits, underscore(_) and $ are allowed.
- Only letters, underscore(_) or $ should be 1st character.
- Reserved words can't be variables names

# Conventions:
- we will use camel case
eg: fullName, isFollow, totalPrice ...

# Let, Var, Const
var: re-declared & updated, Global scope variable, generally never use this variable.
let: can't re-declared, but can be updated, Local scope variable.
const: can't be re-declared or updated, Local scope variable, it needs to initialisation.
*/
let rollNumber = 24;
var totalPrice = 99.99;
const pi = 3.14;
console.log([rollNumber, totalPrice, pi]);

/*
Primitive(7) dataTypes: Number, String, Boolena, Undefined, Null, BigInt, Symbol
Non-Primitive dataTypes: 
    - Object: collection of values
              Key: value
*/
const student = {
    name: "Anuj kumar",
    age: 24,
    cgpa: 8.2,
    isPass: true
};
console.log("Type of student var: ", typeof(student)); // object type
/*
+ How to access object key's value.
    - obj.key
    - obj['key']
    - eg: name: student['name']
*/
student.age = 25;
console.log("Updating age key: ", student.age);

// Practice Questions
// 01. Create a const object called 'product' to store information shown in the picture.
const product = {
    productName: "Parker Jotter Standard CT Ball Pen(Black)",
    rating: 4,
    offerPrice: 240,
    discount: '5%',
    originalPrice: 285,
};
console.log("Practice Problem: 01\n",product);

// 02. Create a const object called 'profile' to store information shown in the picture.
const profile = {
    fullName: 'Anuj kumar',
    isFollow: false,
    totalPosts: 195,
    totalFollowers: 569000,
    totalFollowings: 4,
};
console.log("Practice Problem: 02\n", profile);
console.log("Type of profile: ", typeof(profile));
console.log("Type of profile key(fullName): ", typeof(profile.fullName))